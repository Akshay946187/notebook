import React, { useState } from 'react'
import vg from '../assets/vg.png'
import { toast } from 'react-hot-toast';

const Contact = () => {

    const[name,setname] = useState('');
    const[email,setemail] = useState('');
    const[massage,setmassage] = useState('');

    const submithandler = (e)=>{
        e.preventDefault()
        console.log(name,email,massage)
        toast.success('Message sent')
    }
  return (
    <div id='contact'>
      <section>
        <form id='form'>
            <h2>Contact Me</h2>
            <input type="text" placeholder='Enter your name'  required  value={name} onChange = {(e)=> setname(e.target.value)}/>
            <input type="email" placeholder='Enter your Email' required  value={email} onChange = {(e)=> setemail(e.target.value)}/>
            <input type="text" placeholder='Enter your massage' required  value={massage} onChange = {(e)=> setmassage(e.target.value)}/>

            <button type='submit' onClick={submithandler}>send</button>
        </form>
      </section>
      <aside>
        <img src={vg} alt="vg" />
      </aside>
    </div>
  )
}

export default Contact
