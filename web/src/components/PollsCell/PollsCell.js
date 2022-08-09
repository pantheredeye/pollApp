import PropTypes from 'prop-types'

export const QUERY = gql`
  query PollsQuery {
    polls {
      id
    }
    user {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ polls }) => {
  const handleAddPoll = () => {
    this.props.addPoll()
  }

  const handleEditPoll = (pollId) => {
    this.props.editPoll(pollId)
  }

  const handleVotePoll = (pollId) => {
    this.props.votePoll(pollId)
  }

  const handleDeletePoll = (pollId) => {
    this.props.deletePoll(pollId)
  }

  // get user from auth Mechanism; 'polls' from query
  // const { user, polls } = this.props

  let listStuff
  if (polls.length > 0) {
    listStuff = (
      <table className="polls">
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {polls.map((poll) => {
            let userButtons = ''
            if (poll.editable) {
              userButtons = (
                <div>
                  <button
                    className="btn btn-primary m-1"
                    onClick={handleEditPoll.bind(this, poll.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary m-1"
                    onClick={handleDeletePoll.bind(this, poll.id)}
                  >
                    Delete
                  </button>
                </div>
              )
            }
            return (
              <tr key={poll.id}>
                <td className="m-1">
                  <button onClick={handleVotePoll.bind(this, poll.id)} href="#">
                    {poll.title}
                  </button>
                </td>
                <td className="m-1">{userButtons}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  } else {
    listStuff = <p>There are no any polls to show. Add new one.</p>
  }

  return (
    <div className="polls-list">
      <h3>Polls created by {user.name}.</h3>
      {listStuff}
      <button className="btn btn-primary" onClick={handleAddPoll.bind(this)}>
        Add new poll
      </button>
    </div>
  )
}

PollsList.propTypes = {
  polls: PropTypes.array.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  addPoll: PropTypes.func.isRequired,
  editPoll: PropTypes.func.isRequired,
  votePoll: PropTypes.func.isRequired,
  deletePoll: PropTypes.func.isRequired,
}
