// TODO: Add form submittal on selected
// TODO: Fetch Questions; Fetch previous answers; Merge

// TODO: Validate Next Click on empty selection

import { useState, useEffect } from 'react'

import { RadioGroup } from '@headlessui/react'

import PollAnswer from '../PollAnswer/PollAnswer'
import PollQuestion from '../PollQuestion/PollQuestion'

const PollCard = ({ pollItem }) => {
  const [selected, setSelected] = useState('')
  useEffect(() => {
    console.log(`You selected ${selected}.`)
  })

  return (
    <div className="overflow rounded-md shadow">
      <PollQuestion question={pollItem.question} />
      <div className="p-2">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">
            {pollItem.question}
          </RadioGroup.Label>

          {pollItem.answers.map((answer) => (
            <RadioGroup.Option
              key={answer.id}
              value={answer.answer}
              className={({ active, checked }) =>
                `${
                  active
                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                    : ''
                }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative m-3 flex cursor-pointer rounded-md p-2 shadow-md focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {answer.answer}
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white">
                        <CheckIcon className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PollCard
