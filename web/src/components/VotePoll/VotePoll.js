import PropTypes from 'prop-types'

import PollForm from '../PollForm/PollForm'

const VotePoll = (Props) => {
  const handleChange = (e) => {
    //e.preventDefault();
    Props.onChangeOption(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Props.onVote(Props.poll.id, Props.voteId)
  }

  const handleClose = (e) => {
    e.preventDefault()
    Props.onCancel()
  }

  let { poll, votesCount, voteId } = Props
  let totalVotes = votesCount.reduce((acc, vote) => acc + vote.total, 0)
  if (totalVotes === 0) {
    totalVotes = 1
  }
  let options = votesCount.map((vote) => {
    let item = vote.pollItem
    let percent = Math.round((vote.total / totalVotes) * 100).toString() + '%'
    return (
      <div key={item.id}>
        <input
          className="m-1"
          type="radio"
          name={item.id}
          value={item.id}
          checked={voteId === item.id}
          onChange={handleChange}
        />
        {item.title}
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: percent }}
          >
            {vote.total}
          </div>
        </div>
      </div>
    )
  })

  return (
    <form onSubmit={handleSubmit}>
      <h4>Select option you want to vote for &quot;{poll.title}&quot; poll:</h4>
      <div className="m-1">{options}</div>
      <button className="btn btn-primary m-1" type="submit">
        Save and close
      </button>
      <button className="btn btn-primary m-1" onClick={handleClose}>
        Cancel
      </button>
    </form>
  )
}

export default VotePoll

PollForm.propTypes = {
  poll: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  voteId: PropTypes.string.isRequired,
  votesCount: PropTypes.arrayOf(
    PropTypes.shape({
      pollItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
      total: PropTypes.number.isRequired,
      selectedByUser: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onChangeOption: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}
