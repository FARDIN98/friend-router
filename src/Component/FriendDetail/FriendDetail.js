import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FriendDetail.css'
const FriendDetail = () => {
    const{id} = useParams()
    const [friend,setFriend] = useState({})
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div className="friendDetailStyle">
            <h3>This is friend detail {id}</h3>
            <p><b>Name: {friend.name}</b></p>
            <p><b>Email: {friend.email}</b></p>
            <p><b>Phone: {friend.phone}</b></p>
            <p><b>Website: {friend.website}</b></p>
            <p><b>Address: {friend.address?.city + "," + friend.address?.street + "," + friend.address?.zipcode}</b></p>  
        </div>
    );
};

export default FriendDetail;