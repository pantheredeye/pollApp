import { PlusIcon as PlusIconMini } from '@heroicons/react/20/solid'

import PollAnswer from '../PollAnswer/PollAnswer'

const PollCard = ({ pollItem }) => {
  return (
    <div className="overflow rounded-lg bg-white shadow">
      <div className="px-4 py-2 sm:px-6">{pollItem.question}</div>
      <div className="px-4 py-2 sm:p-4">
        <ul className="space-y-2">
          {pollItem.answers.map((answer) => (
            <li
              key={answer.id}
              className="overflow-hidden rounded-sm bg-gray-100 p-1 text-gray-700 shadow hover:bg-blue-100 hover:text-blue-400"
            >
              <PollAnswer answer={answer} />
            </li>
          ))}
          <li className="overflow-hidden rounded-sm bg-gray-100 p-1 text-gray-700 shadow hover:bg-blue-100 hover:text-blue-400">
            <PollAnswer
              answer={{ id: '+', answer: 'Write a custom answer here...' }}
            />
          </li>
        </ul>
      </div>
      <div className="bg-gray-50 px-4 py-2">
        <div className="flex justify-center">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Back
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default PollCard
