import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'

function Github() {
    const [data, setData] = useState(0);
    useEffect(() => {
        fetch('https://api.github.com/users/Harsh40863')
        .then(response => response.json())
        .then(data => setData(data))
    }, []);
  const {username}=useParams();
  return (
    <div className="text-3xl font-bold underline bg-gray-600 text-white p-4">
      GitHub followers: {data.followers} Followers
    </div>
  )
}
export default Github;