import { render } from '@redwoodjs/testing/web'

import PollForm from './PollForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PollForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PollForm />)
    }).not.toThrow()
  })
})
