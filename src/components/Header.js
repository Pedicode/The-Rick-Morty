import React from "react"
import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom"
const activeStyle = {
  color: "#E96F96",
  borderBottom: "0.2rem solid",
  borderImageSource:
    "linear-gradient(270deg,#bd00ff 0%,#f10082 25.56%,#ec00f1 58.58%,#a4f100 100.65%)",
  borderImageSlice: 1,
}
const Header = () => {
  return (
    <>
      <img src={logo} alt='The Rick and Morty' />
      <h1>The Rick and Morty</h1>
      <nav className='header__nav'>
        <NavLink
          to='/'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <a href='https://rickandmortyapi.com/'>About</a>
      </nav>
    </>
  )
}

export default Header
