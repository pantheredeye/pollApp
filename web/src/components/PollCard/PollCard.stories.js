import PollCard from './PollCard'

const pollItem = {
  id: 1,
  question: 'What is your market?',
  answers: [
    {
      id: 1,
      answer:
        'The answer to this question depends on a lot of variable factors.',
    },
    { id: 2, answer: 'B2C' },
    { id: 3, answer: 'C2C' },
    { id: 4, answer: 'Government' },
  ],
}

export const generated = (args) => {
  return <PollCard pollItem={pollItem} {...args} />
}

export default { title: 'Components/PollCard' }
