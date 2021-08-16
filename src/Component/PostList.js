import React from 'react'
import { Spinner } from 'react-bootstrap'
import post  from "./Post"

const PostList = ({posts, loadPosts}) => {
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
           {
               loadPosts ? (
                   <Spinner/>
               ):(
                   posts.map((el)=> <post post={el} key={el.id} /> )
               )

           } 
        </div>
    )
}

export default PostList
