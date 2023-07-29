import React from 'react'
import { NavContant } from './Header'

const Mininav = ({menu, setmenu}) => {
  return (
    <div className={`navPhone ${menu?'navPhoneComes':''}`}>
        <NavContant setmenu={setmenu}/>
      
    </div>
  )
}

export default Mininav
