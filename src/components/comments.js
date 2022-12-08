import React from 'react'



import ('./comments.css')

const Comments = ({user, body}) => {




  return (
    <section>
      <div className='comment-box'>
        <div className='comment-user-details'>

        <img 
        src={user.image} 
        className='commentImage' 
        alt='user'
        />
        <div className='comment-username'>{user.firstName} {user.lastName}</div>

        </div>
        <p className='comment-section'> 
            {body}
        </p>
      </div>
    </section>
  )
}

export default Comments;