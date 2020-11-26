import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import LikeButton from '../../components/Animation';

import './style.css';


export default class Main extends Component {

    
    state = {
        posts: []
    };

    componentDidMount(){
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await api.get('/posts');

        this.setState({posts: response.data});
    };
 

    
    render(){
        const {posts} =  this.state;
        return(
            <div className="post-list">

                <div className="actions">
                 <button>
                     <Link to="/post">Novo Post</Link>
                 </button>  
                </div>
                {posts.map(posts => (
                    <article key={posts.id}>
                        <strong>{posts.post}</strong>
                        <p>{posts.createDateTime}</p>
                         
                        <div className="likii">
                        <LikeButton />
                        </div>                
                    </article>
                ))}
            </div>
        )
    }
}

