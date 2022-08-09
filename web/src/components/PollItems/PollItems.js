import PropTypes from 'prop-types'
import update from 'react-addons-update'

const PollItems = () => {
  const addOption = () => {
    let newOption = { id: Date.now().toString(), title: '' }
    let newOptions = update(this.props.items, { $push: [newOption] })
    this.props.handleChange(newOptions)
  }

  const handleChange = (itemId, e) => {
    let itemIndex = this.props.items.findIndex((item) => item.id === itemId)
    let newTitle = e.target.value
    let newOptions = update(this.props.items, {
      [itemIndex]: { title: { $set: newTitle } },
    })
    this.props.handleChange(newOptions)
  }

  let items = this.props.items.map((item) => (
    <li key={item.id}>
      <input
        className="form-control m-1"
        type="text"
        name={'option_' + item.id}
        value={item.title}
        onChange={handleChange.bind(this, item.id)}
        placeholder="Option name"
        required={true}
      />
    </li>
  ))
  return (
    <div>
      <ol id="container">{items}</ol>
      <button
        className="btn btn-primary m-1"
        id="add_option"
        onClick={addOption.bind(this)}
      >
        Add new option
      </button>
    </div>
  )
}

PollItems.propTypes = {
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default PollItems
