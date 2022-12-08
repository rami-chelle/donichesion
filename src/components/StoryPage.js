
import {useState} from 'react'
import Comments from './comments';
import CommentFormPage from './Comment'

import './StoryPage.css'


const StoryPage = ({ post, onClickDisplayPostProps }) => {

    const [comments , setComments] = useState(post.comments)


    return (

        <div className='storypage-Container'>


            <div className='StoryContainer'>
                <h2 className='StoryPage-close' onClick={onClickDisplayPostProps}>X</h2>

                <div className='storyLeft'>
                <div className='storycard-top'>
                    <img className='storycard-user-profilepic'
                        src={post.author.image}
                        alt='user-profile-pic'
                    />
                    <div className='story-user-profile-details-container'>
                        <h3 className='story-user-profile-name'>
                            {post.author.firstName} {post.author.lastName}
                        </h3>

                        <h4 className='story-user-profile-email'>
                            {post.author.email}
                        </h4>

                    </div>
                </div>


                

                    <img
                        className='storyPage-image'
                        src={post.image}
                        alt={post.title}
                    />

                    <div className='storyPage-story-need'>
                        <div className='story-purpose-fund'>
                            <h3 className='storyPage-fund-needed'> PURPOSE: <span className='storyPage-span'> {post.purpose}  </span> </h3>

                        </div>

                        <div className='story-purpose-fund'>
                            <h3 className='storyPage-fund-needed'> FUND NEEDED: <span className='storyPage-span'> {post.fundNeeded}</span> </h3>

                        </div>
                    </div>






                    {/* donations here */}

                </div>


                    <div className='storyRight'>

                    <h2 className='StoryPage-title'>Title: {post.title}</h2>

                        <p className='StoryPage-body'>
                            {post.body}
                        </p>

                        <CommentFormPage
                        post={post}
                        
                        
                        />

                        {comments.map(comment => {
                            return <Comments
                            key={comment.body}
                            user = {comment.author}
                            body = {comment.body}
                            />
                        })}


                    </div>

                </div>

            </div>

            )
}


            export default StoryPage