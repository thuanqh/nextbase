import { RegisterForm } from "./form";

export default function RegisterPage() {
  return (
    <div className="container">
      <div className="flex h-[70vh] max-w-[980px] items-center justify-center">
        <div>
          <h1>Register</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}