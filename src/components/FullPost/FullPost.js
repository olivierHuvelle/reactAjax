import React, { Component } from 'react'
import axios from 'axios'
import classes from './FullPost.module.css'

class FullPost extends Component {
    state = {
        currentPost : null
    }
    componentDidUpdate () { //ici il faudrait split et créer une sous-méthode ex fetchData 
        if(Number.isInteger(this.props.id) && this.props.id > 0 && (!this.state.currentPost || this.state.currentPost.id !== this.props.id))
        {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => this.setState({currentPost : response.data})) //crée une boucle infinie -> faut vérifier le state
        }
    }

    deletePostHandler (){
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => console.log(response.data))
    }

    render () {
        let post = <p>Please select a Post!</p>
        if(this.props.id)
        {
            post = <p>Loading ...</p>
        }
        if(this.state.currentPost)
        {
            post = 
                <div className={classes.FullPost}>
                    <h1>{this.state.currentPost.title}</h1>
                    <p>{this.state.currentPost.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete} onClick={this.deletePostHandler.bind(this)}>Delete</button>
                    </div>
                </div>
        }            
        return post;
    }
}

export default FullPost;
/*
 add propTypes here in a very close future 
*/