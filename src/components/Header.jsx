import React from 'react'
import{AiOutlineMenu} from "react-icons/ai";

const Header = ({menu,setmenu}) => {
  return (
    <>
      <nav>
        <NavContant />
      </nav>
     <button className='navbtn' onClick={()=>setmenu(!menu)}><AiOutlineMenu/></button>
    </>
  )
}

export const NavContant = ({setmenu})=>{
    return(
        <>
          <h2>Akshay</h2>
          <div>
            <a onClick={()=>setmenu(false)} href="#home">Home</a>
            <a onClick={()=>setmenu(false)} href="#work">Work</a>
            <a onClick={()=>setmenu(false)} href="#skills">Skills</a>
            <a onClick={()=>setmenu(false)} href="#contact">Contact</a>
          </div>
          <a href="aki748434@gmail.com">
            <button>Email</button>
          </a>
        </>
    )
}

export default Header
