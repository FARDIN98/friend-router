import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const{name,email,phone,website,id} = props.friend
    return (
        <div className = "friendStyle">
            <div className = "friendStyleInside">
                <p><b>Name: {name}</b></p>
                <p><b>Email: {email}</b></p>
                <p><b>Phone: {phone}</b></p>
                <p><b>Website: {website}</b></p>
                <button><Link to={`/friend/${id}`}>Show Detail of {id}</Link></button>
            </div>
            
        </div>
    );
};

export default Friend;