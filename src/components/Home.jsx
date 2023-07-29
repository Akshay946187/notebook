import React from 'react'
import me from '../assets/hero.png';
import {motion} from "framer-motion";
import  Typewriter  from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs';

const Home = () => {
  return (
    <>
    <div id="home">
        <section>
            <div>
                <motion.h1 initial={{
                    x : "-100%",
                    opacity:0,
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}>
                    Hi , i Am <br/> Akshay Choudhary

                </motion.h1>
                <Typewriter
                  options={{
                    strings : ["i am a full stack devleper"],
                    autoStart:true,
                    loop:true,
                    cursor:"",
                    wrapperClassName : "typewriterpara",
                  }}
                />
            <div>
            <a href="aki748434@gmail.com">Hire Me</a>
            <a href="#work">projects <BsArrowUpRight/></a>
            </div>
            
           
            </div>
        </section>
        <section>
          <img src={me} alt="Akshay" />
        </section>
        <BsChevronDown/>
    </div>
      
    </>
  )
}

export default Home
