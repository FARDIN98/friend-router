import React from 'react';
import { useEffect, useState } from 'react';
import '../.././App.css'
import Friend from '../Friend/Friend';
const Home = () => {
    const [friends,setFriends] = useState([])
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setFriends(data))
  },[])
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Friends: {friends.length}</h1>
        
        <div className="friendStyle">
        {
          friends.map(friend => <Friend friend = {friend}></Friend>)
        }
        </div>
        </div>
    );
};

export default Home;