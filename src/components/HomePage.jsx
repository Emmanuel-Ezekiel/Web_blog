import React, { useState, useEffect } from 'react'
import axios from 'axios'
import postService from "./services/post.services";

const HomePage = () => {

const [posts, setPosts] = useState([]);
const [driver, setDriver] = useState([]);
const [ message, setMessage ] = useState([])

  useEffect(() => {
    postService.getAllDriver().then(
      (response) => {
        setPosts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
    postService.getDriver().then(
      (response) => {
        setDriver(response.data);
        setMessage(response.data.data)
      },
      (error) => {
        console.log(error);
      }
    );
   
  }, [message,driver]);




  return (
    <div>
    <h1>All Drivers Details</h1>
    <h3>
        {posts.map((post, index) => (
          <div key={index}>
             <span>Name: {post.name}</span> 
             <br />
             <span>Address: {post.address}</span> 
             <br />
             <span>City: {post.city}</span> 
             <br />
             <span>State: {post.state}</span> 
             <br />
             <span>Phone: {post.phone}</span> 
             <br />
             <span>Role: {post.roles[0]}</span> 
             <br />
             <span>Email: {post.email}</span> 
             <br />
             <span>DriverId: {post.id}</span> 
             <br />
          </div>
        ))}
    </h3>

    <hr />

    <h1> Get A Driver </h1> 
        <div>
            <span> Message: {driver.message}</span>
            <br/>
            <span> Message: {driver.status}</span>
        </div>
        <div>  
            {Object.keys(message).map((key,index) => ( 
                <h3 key={index}>
                    {key}:{message[key]}
                </h3>
            ))}
        </div>
      <hr />

    </div>
  )
}

export default HomePage