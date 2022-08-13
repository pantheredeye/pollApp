import { render } from '@redwoodjs/testing/web'

import AddingPoll from './AddingPoll'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddingPoll', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddingPoll />)
    }).not.toThrow()
  })
})
