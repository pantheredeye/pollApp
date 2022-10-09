import { MetaTags } from '@redwoodjs/web'

import PollsCell from 'src/components/PollsCell/PollsCell'

const PollPage = () => {
  return (
    <>
      <MetaTags title="Poll" description="Poll page" />

      <h1>PollPage</h1>

      <PollsCell />
    </>
  )
}

export default PollPage
