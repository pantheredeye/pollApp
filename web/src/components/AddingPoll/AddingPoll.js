import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import PollForm from './PollForm'

const AddingPoll = (Props) => {
  const [state, setState] = useState({
    id: undefined,
    title: '',
    editable: true,
    items: [],
  })

  useEffect(() => {
    setState()
  }, [state])

  const handleChange = (field, value) => {
    setState({ [field]: value })
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
        buttonLabel="Add a poll"
        poll={state}
        handleChange={handleChange.bind(this)}
        handleSubmit={handleSubmit.bind(this)}
        handleClose={handleClose.bind(this)}
      />
    </div>
  )
}

export default AddingPoll

AddingPoll.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}
