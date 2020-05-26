import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <article className={classes.Post} onClick={() => props.clicked(props.post.id)}>
            <h1>{props.post.title}</h1>
            <div className={classes.Info}></div>
            <div className={classes.Author}>{props.post.author}</div>
        </article>
    )
 }

export default Post;

/*
 add propTypes here in a very close future 
*/