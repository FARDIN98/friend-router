import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const{id} = useParams()
    const [friend,setFriend] = useState({})
    // const {name,email,phone,website,address} = friend
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h3>This is friend detail {id}</h3>
            {/* <p><b>Name: {name}</b></p> */}
            <p><b>Address: {friend.address.street}</b></p>
        </div>
    );
};

export default FriendDetail;