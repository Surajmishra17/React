import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Surajmishra17')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white font-mono text-3xl p-4'>
      Github follower : {data.followers}
      <img src={data.avatar_url} alt="Gir picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Surajmishra17')
    return res.json()
}
