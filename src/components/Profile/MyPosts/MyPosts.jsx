import React from "react"
import classes from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = (props) => {

  let postsElements = props.posts.map(post =>
    <Post message={post.message} likesCount={post.likesCount} />
  )

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addNewPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts