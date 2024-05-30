import React from 'react'

function CommentLists({commentList}) {
  // console.log(commentList);
  return (
    <>
    <div className='comment-list'>
      {
        commentList.map((comment) =>(
          <div className='comment'>
            <p><strong>{comment.name}</strong></p>
            <p>{comment.comment}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default CommentLists