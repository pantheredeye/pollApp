import { render } from '@redwoodjs/testing/web'

import PollItems from './PollItems'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PollItems', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PollItems />)
    }).not.toThrow()
  })
})
