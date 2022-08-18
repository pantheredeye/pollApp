import { render } from '@redwoodjs/testing/web'

import PollsList from './PollsList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PollsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PollsList />)
    }).not.toThrow()
  })
})
