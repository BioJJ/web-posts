import React, { Component }  from 'react';
import api from '../../services/api';
import './style.css';

export default class Post extends Component{
  
    state = {
        post:''
    }

    save = ()  =>{
        console.log(this.state);

        api.post('/posts', {
            post: this.state.post
        }).then(() => {
            alert('Post publicado com sucesso!')
            this.props.history.push('/')
                     

        }).catch(() => {
            alert('Deu merda')
        })
    }


    render(){
        return(

            <div className="post-list">
             <fieldset>
                        <legend>New Post</legend>
               
                   
                    <textarea
                     id="post"
                    name="post"
                    onChange={e => this.setState({post:e.target.value})}
                        
                    />
                                                     
               

               

                <div className="actions">
                    <button onClick={this.save} type="button">
                     postar
                    </button>  
            </div>
            </fieldset>
           
        </div>

        );
    }
              
}
