export const QUERY = gql`
  query PollsQuery {
    polls {
      id
    }
  }
`
import PollCard from '../PollCard/PollCard'

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ polls }) => {
  return (
    <>
      {polls.map((item) => (
        <div key={item.id} className="my-8">
          <PollCard pollItem={item} />
        </div>
      ))}
    </>
  )
}
