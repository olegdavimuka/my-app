import React from "react"
import classes from './Post.module.css'

const Post = (props) => {
  return (
    < div className={classes.item} >
      <img src="https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt='background'></img>
      {props.message}
      <div>
        <span>Likes: {props.likesCount}</span>
      </div>
    </div >
  )
}

export default Post