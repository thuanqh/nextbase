import { apiCreateFeedback } from "@/api-request";
import useFeedbackStore from "@/store";
import { useRef, useState } from "react";
import Rating from "@/components/rating";
import { useToast } from "@/components/ui/use-toast";

export default function FeedbackForm() {
  const { toast } = useToast()
  const [text, setText] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [rating, setRating] = useState(10)
  const store = useFeedbackStore()
  const minTextLength = 10

  const textInputRef = useRef<HTMLInputElement>(null)

  const handleRatingSelect = (value: number) => {
    setRating(value)
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setMessage(null)
    setText(value)
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    store.setPageLoading(true)

    if (text.trim().length < minTextLength) {
      setMessage("Text must be at least 10 characters")
      store.setPageLoading(false)
      return
    }

    const feedbackData = JSON.stringify({
      text: text,
      rating: rating,
    })

    try {
      const feedback = await apiCreateFeedback(feedbackData)
      store.addFeedback(feedback)
      store.setPageLoading(false)
      toast({
        variant: "destructive",
        description: "Feedback added successfully",
      })
      setText("")
      setRating(10)
      if (textInputRef.current) {
        textInputRef.current.value = ""
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: `${error.toString()}`,
      })
      console.error(error)
      store.setPageLoading(false)
    }
  }

  return (
    <div>
      <header>
        <h2>How would you rate your service with us?</h2>
      </header>
      <form onSubmit={onSubmit}>
        <Rating selected={rating} onchange={handleRatingSelect} />
        <div>
          <input type="text" ref={textInputRef} onInput={handleInput} placeholder="Tell us something that keeps you coming back" />
          <button type="submit" disabled={store.page_loading}>Send</button>
        </div>

        {message && (
          <div>{message}</div>
        )}
      </form>
    </div>
  )
}