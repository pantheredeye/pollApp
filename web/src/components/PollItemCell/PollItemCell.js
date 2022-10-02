export const QUERY = gql`
  query FindPollItemQuery($id: Int!) {
    pollItem: pollItem(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ pollItem }) => {
  return <div>{JSON.stringify(pollItem)}</div>
}
