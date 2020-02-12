import React from "react";
import Posts from "../Post/Posts";

import {} from "../Main.css";

const Home = () => (
  <div>
    <div className='jumbotron'>
      <h2>Social Network</h2>
      <p className='lead'>Welcome to the Social Network</p>
    </div>
    <div className='container'>
      <Posts />
    </div>
  </div>
);

export default Home;
