import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {
    state = {
        users : []
    }
    componentDidMount() {
        console.log(this.props.match.path);
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            this.setState({
               users : res.data 
            })
        })
    }
    render(){
        const users = this.state.users;
        const userList = users.map(user => {
            return(
                <div key={user.id}>
                    <div className="content">
                        <div>Name : {user.name}</div>
                        <div>userName : {user.username}</div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <h2>Blog</h2>
                <p>This is Blog Section</p>
                {userList}
            </div>
            );
    }
    
}

export default Blog;