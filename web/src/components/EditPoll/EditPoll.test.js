import { render } from '@redwoodjs/testing/web'

import EditPoll from './EditPoll'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditPoll', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPoll />)
    }).not.toThrow()
  })
})
