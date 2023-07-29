import React from 'react'


const Footer = () => {
  return (
    <>
    <footer>
        <div className="waves">
            <div className="wave" id='wave1'></div>
            <div className="wave" id='wave2'></div>
            <div className="wave" id='wave3'></div>
            <div className="wave" id='wave4'></div>
        </div>
       <ul className='social_icon'>
       <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
       <li><a href="https://instagram.com/akshaykumar6770?igshid=ZDdkNTZiNTM="><ion-icon name="logo-instagram"></ion-icon></a></li>
       <li><a href="https://github.com/Akshay946187/react-project.git"><ion-icon name="logo-github"></ion-icon></a></li>
       <li><a href="https://www.linkedin.com/in/akshay-kumar-08b570240"><ion-icon name="logo-linkedin"></ion-icon></a></li>
       </ul>
    </footer>

    </>
  )
}

export default Footer
