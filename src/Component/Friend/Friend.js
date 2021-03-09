

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'


const Friend = (props) => {
    const{name,email,phone,website,id} = props.friend
    const history = useHistory()
    const handleClick = (id) => {
        history.push(`/friend/${id}`)
    }
    return (
        <div className = "friendStyle">
            <div className = "friendStyleInside">
                <p><b>Name: {name}</b></p>
                <p><b>Email: {email}</b></p>
                <p><b>Phone: {phone}</b></p>
                <p><b>Website: {website}</b></p>
                <Link to={`/friend/${id}`}>
                    <button onClick={() => handleClick(id)}>Click me</button>
                </Link>
            </div>
            
        </div>
    );
};

export default Friend;