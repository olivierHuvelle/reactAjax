import React, {Component} from 'react'
import axios from 'axios'
import classes from './Blog.module.css'

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'

class Blog extends Component
{
    state = {
        posts : [], 
        selectedPostId : null,
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const visiblePosts = response.data.splice(0,3).map(post =>({...post, author : 'Olivier'}))
                this.setState({ posts : visiblePosts})
            })
            .catch(e => this.setState({error : true}))
    }

    postSelectedHandler = id => {
        this.setState({selectedPostId : id})
    }

    render() 
    {
        let postCompononents = this.state.error ? <p>Something went wrong</p> : 
            this.state.posts.map(post => <Post key={post.id} post={post} clicked={this.postSelectedHandler.bind(this)} />)
        return (
            <div>
                <header>
                    <nav className={classes.Navbar}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">New Article</a></li>
                        </ul>
                    </nav>
                </header>

                <section className={classes.Posts}>
                  {postCompononents}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}
export default Blog 
/*
 add propTypes here in a very close future 
*/