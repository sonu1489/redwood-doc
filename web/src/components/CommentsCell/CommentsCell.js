import Comment from '../Comment/Comment'

export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
      name
      body
      postId
      createdAt
    }
  }
`
export const QUERY2 = gql`
  query addEmpQuery {
    addEmps {
      id
      name
    }
  },
  query CommentsQuery {
         comments {
           id
           name
           body
           postId
           createdAt
         }
       }

`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="text-center text-gray-500">No comments yet</div>
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ comments, addEmps }) => {
  console.log('addempsss', addEmps)
  return (
    <>
      <div className="space-y-8">
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </>
  )
}
