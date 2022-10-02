import { render } from '@redwoodjs/testing/web'

import PollQuestion from './PollQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PollQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PollQuestion />)
    }).not.toThrow()
  })
})
