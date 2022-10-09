import { render } from '@redwoodjs/testing/web'

import PollPage from './PollPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PollPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PollPage />)
    }).not.toThrow()
  })
})
