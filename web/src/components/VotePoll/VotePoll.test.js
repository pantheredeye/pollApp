import { render } from '@redwoodjs/testing/web'

import VotePoll from './VotePoll'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VotePoll', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VotePoll />)
    }).not.toThrow()
  })
})
