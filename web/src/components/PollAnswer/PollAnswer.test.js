import { render } from '@redwoodjs/testing/web'

import PollAnswer from './PollAnswer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PollAnswer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PollAnswer />)
    }).not.toThrow()
  })
})
