import { render } from '@redwoodjs/testing/web'

import PollCard from './PollCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PollCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PollCard />)
    }).not.toThrow()
  })
})
