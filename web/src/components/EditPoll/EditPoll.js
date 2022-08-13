import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import PollForm from './PollForm'

const EditPoll = (Props) => {
  const [state, setState] = useState(...Props.poll)

  useEffect(() => {
    setState()
  }, [state])

  const handleChange = (field, value) => {
    this.setState({ [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Props.onSubmit(this.state)
  }

  const handleClose = () => {
    Props.onCancel()
  }

  return (
    <div>
      <h4>Add a poll.</h4>
      <PollForm
        buttonLabel="Edit a poll"
        poll={this.state}
        handleChange={handleChange.bind(this)}
        handleSubmit={handleSubmit.bind(this)}
        handleClose={handleClose.bind(this)}
      />
    </div>
  )
}

EditPoll.propTypes = {
  poll: PropTypes.shape({
    title: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default EditPoll
