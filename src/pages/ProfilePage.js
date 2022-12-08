import {useState, useEffect} from 'react'
import axios from 'axios'

// import PostCard from '../components/PostCard'

import Header from "../components/header"
import SideBar from "../components/sidebar"




import './ProfilePage.css'

const ProfilePage = () => {
    
    
    const [ user , setUser ] = useState({})

        useEffect(()=> {
            const localUser = localStorage.getItem('userId')
                    axios.get(`http://localhost:8000/api/v1/users/${localUser}`).then(result => {
                        setUser(result.data)
                    })
        },[])



    return (


        <div className="Profile-main-container">

            <SideBar />
            <Header />

            <div className="Profile_Container">
                <div className="topProfile-container">
                    <img 
                    className='profileImage'
                    src={user.image}
                    alt={user.firstName}
                    />

                    <div className='user-details'>

                    <h2 className="profileName">
                            {user.firstName} {user.lastName}
                    </h2>
                    <h3 className="profileContacts"> 
                            phone: {user.contactNumber}
                    </h3>
                    <h3 className="profileContacts"> 
                            email: {user.email}
                    </h3>
                    
                    </div>

                </div>

            </div>

            {/* <div className='user-profile-posts-container'>
                    {user.posts.map((post)=>{
                        return <PostCard
                        key={post.title}
                        post = {post}
                        />
                    })}
            </div> */}





        </div>

    )
}



export default ProfilePage