import React, {useEffect, useState} from 'react'
import Axios from "axios"
import PostList from '../Component/PostList'
import OneUser from   '../Component/OneUser'
const UserDetails = (props) => {

const [user, setUser]= useState({})
const [loaduser, setloadUser] = useState (true)
const [posts,setPosts]= useState([]);
const [loadPosts, setLoadPosts]= useState (true);
const {id} = props.match.params
//get user info
const getUser = ()=>{
    Axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
.then((res)=>{
    setUser(res.data)
    setloadUser(false)
})
.catch((err)=>console.log(err))
}

// Get User Posts
const getPosts = () =>{
    Axios.get(`http://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((res)=>{
        setPosts(res.data)
        setLoadPosts(false)
})
.catch((err)=>console.log(err))
}
useEffect(() => {
    getUser();
    getPosts();
    //eslint-disable-next-line
},[])
    return (
        <div>
           
          <OneUser user={user} loaduser={loaduser}   />
          <PostList posts={posts} setLoadPosts={loadPosts}/>
        </div>
    )
}

export default UserDetails;
