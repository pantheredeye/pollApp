import PollQuestion from './PollQuestion'

const question = 'what is your market?'

export const generated = (args) => {
  return <PollQuestion question={question} {...args} />
}

export default { title: 'Components/PollQuestion' }
