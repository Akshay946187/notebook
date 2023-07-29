import React from 'react'

const Skills = () => {
  return (
  <div id="skills">  
  <section id="skill-section">
    <div className="header skill-head">
        <h2>My<span>Skills</span></h2>
        <p>here is my skills to represent my Espertise</p>
    </div>
    <div className="skill-main">
        <div className="skill-bar">
            <div className="info">
                <p>HTML</p>
                <p>80%</p>
            </div>
            <div className="bar">
                <span className="html"></span>
            </div>
        </div>
        <div className="skill-bar">
            <div className="info">
                <p>CSS</p>
                <p>70%</p>
            </div>
            <div className="bar">
                <span className="css"></span>
            </div>
        </div>
        <div className="skill-bar">
            <div className="info">
                <p>java-script</p>
                <p>80%</p>
            </div>
            <div className="bar">
                <span className="js"></span>
            </div>
        </div>
        <div className="skill-bar">
            <div className="info">
                <p>Reactjs</p>
                <p>70%</p>
            </div>
            <div className="bar">
                <span className="react"></span>
            </div>
        </div>
        <div className="skill-bar">
            <div className="info">
                <p>Python</p>
                <p>70%</p>
            </div>
            <div className="bar">
                <span className="py"></span>
            </div>
        </div>
        <div className="skill-bar">
            <div className="info">
                <p>Django</p>
                <p>70%</p>
            </div>
            <div className="bar">
                <span className="dj"></span>
            </div>
        </div>
        <div className="skill-bar">
            <div className="info">
                <p>Mongodb</p>
                <p>60%</p>
            </div>
            <div className="bar">
                <span className="mongo"></span>
            </div>
        </div>
    </div>
  </section>
  </div>
  )
}

export default Skills
