import React, {useEffect, useState} from 'react'
import Axios from "axios"
import CommentList from '../Component/CommentList'
const CommentPage = (props) => {
    const [comment, setComment]= useState([])
    const [loadComment, setloadComment]= useState(true)
    const {post}= props.location.state;
    const {id} = props.match.params;
    // Get Comments
    const getComments = ()=>{
        Axios.get(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((res)=>{
            setComment(res.data)
            setloadComment(false)
        })
        .catch((err)=>console.log(err))
    }

useEffect(()=>{
    getComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

    return ( 
        <div>
            <h2>Post Name:{post.title}</h2>
            <h3>Post: {post.body}</h3>
            <CommentList comment={comment} loadComment={loadComment}/>
        </div>
    )
}

export default CommentPage
