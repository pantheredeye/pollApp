import PropTypes from 'prop-types'

import PollItems from '../PollItems/PollItems'

const PollForm = (Props) => {
  const handleChange = (field, e) => {
    Props.handleChange(field, e.target.value)
  }

  const handleOptionsChange = (options) => {
    Props.handleChange('items', options)
  }

  const handleClose = (e) => {
    e.preventDefault()
    Props.handleClose()
  }

  return (
    <div>
      <form onSubmit={Props.handleSubmit.bind(this)}>
        <label htmlFor="title">Poll title</label>
        <input
          className="m-1"
          type="text"
          id="title"
          name="title"
          value={Props.poll.title}
          onChange={handleChange.bind(this, 'title')}
          required={true}
        />
        <h4>Options to vote:</h4>
        <PollItems
          items={Props.poll.items}
          handleChange={handleOptionsChange.bind(this)}
        />
        <button className="btn btn-primary m-1" type="submit">
          {Props.buttonLabel}
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={handleClose.bind(this)}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

PollForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  poll: PropTypes.shape({
    title: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default PollForm
