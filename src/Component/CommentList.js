import React from 'react'
import { Spinner } from 'react-bootstrap'
import Comment from './Comment'

const CommentList = ({Comment, loadComment}) => {
    return (
        <div>
            {
                loadComment ? (
                    <Spinner   animation="border" />
                 
                ):(
                    Comment.map((el)=> <Comment key={el.id}el={el} />)
                )
            }
        </div>
    )
}

export default CommentList;
