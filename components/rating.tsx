interface RatingProps {
  selected?: number;
  onchange?: (selected: number) => void;
}

function Rating({ selected = 0, onchange = () => { } }: RatingProps) {
  return (
    <ul className="my-7 flex list-none items-center justify-around">
      {[...Array(10).keys()].map((i) => {
        const label = (i + 1).toString();
        const id = `num${i + 1}`;
        const isSelected = selected === i;

        return (
          <li key={i} className={`relative h-14 w-14 rounded-full border-2 border-gray-300 p-3 text-center transition duration-300 ${isSelected ? "bg-pink-500 text-white" : "bg-gray-200"}`}>
            <input
              type="radio"
              id={id}
              name="rating"
              value={i + 1}
              checked={isSelected}
              onChange={() => onchange(i + 1)}
            />
            <label
              htmlFor={id}
              className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2  cursor-pointer items-center justify-center rounded-full transition duration-300 hover:bg-pink-500 hover:text-white"
            >
              {label}
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default Rating