const PollAnswer = ({ answer }) => {
  return (
    <div className="flex flex-wrap items-center justify-between focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
      <div className="flex w-0 flex-1 items-center">
        <span className="h-6 w-6 rounded-md bg-white text-center shadow-sm">
          <p className="text-center font-medium hover:text-blue-600">
            {answer.id}
          </p>
        </span>
        <p className="ml-3 font-medium hover:text-blue-600">
          <span>{answer.answer}</span>
        </p>
      </div>
    </div>
  )
}

export default PollAnswer
