import React from 'react'
import Dark from '../assets/dark-2.jpg'
import '../Components/About.css'
const About = () => {
  return (
    <>
    <div className="container">
      <div className="about-image" style={{width:'100%', position:'relative'}}>
      </div>
      
      <div className="about">
     <h1>About Me</h1>
    
      <p>Hi, I am Faijan Akhtar. I am a front-end developer who specializes in ReactJs Currently.
         I love making new websites using React with a spice of animations within them.</p>
     </div>
     
    </div>
    <section>
      <div className="myskils">
        <h1>MY SKILLS</h1>
      </div>
      <div className="box">
    
     <div className="bar-main">
     <div className="skill-container">
      
        <p>Python</p>
        <p>70</p>
        </div>
      
        <div className="outer-bar">
        
            <div className="skill-bar1">
              </div>
              </div>
 
          </div>
        

          <div className="bar-main">
     <div className="skill-container">
      
        <p>HTML & CSS</p>
        <p>80</p>
        </div>
      
        <div className="outer-bar">
        
            <div className="skill-bar2">
              </div>
              </div>
          </div>

          <div className="bar-main">
     <div className="skill-container">
      
        <p>JAVASCRIPT</p>
        <p>70</p>
        </div>
      
        <div className="outer-bar">
        
            <div className="skill-bar3">
              </div>
              </div>
 
          </div>

          <div className="bar-main">
     <div className="skill-container">
      
        <p>REACT  js</p>
        <p>85</p>
        </div>
      
        <div className="outer-bar">
        
            <div className="skill-bar4">
              </div>
              </div>

            
          </div>
        

          </div> 
     



     
    


      
     
     


     

         
    
    </section>
    </>
  )
}

export default About
