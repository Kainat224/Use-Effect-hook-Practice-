import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <header>
      <a href="#">Logo</a>
      <ul>
        <li> 
            <NavLink to="/" >Home</NavLink> 
        </li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact" >Contact</NavLink></li>
      </ul>
    </header>
    <section>You are on Home Page</section>
    </>
  )
}

export default Home
