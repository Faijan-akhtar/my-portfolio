import React from 'react'
import movie from '../assets/F-movi.jpg'
import reactLogo from '../assets/react.svg'
import Dark from '../assets/dark.jpg'
import Quiz from '../assets/quiz.jpg'
import Food from '../assets/food.jpg'
import ToDo from '../assets/todo1.jpg'

import {ReactTyped} from 'react-typed'
import'../Components/Home.css'
const Home = () => {

const stringToRender=[
  "a competitive coder",
  "a Tech Enthusiast",
  "a React Developer"


]




  return (
    <>
        <div className="container">
    <section>
       
 
       <div className="bg-image" style={{width:"100%"}}> 
       
       
            
        
       </div>
      
       <div className="intro">
        <h1>Hi</h1>
        <h1>I am Faijan Akhtar</h1>
        <p>
          <ReactTyped style={{background:"none", color:"aqua"}} strings={stringToRender}
          typeSpeed={60}
          backSpeed={50}
          loop
          
          />
        </p>
       </div>
      </section>
     
      
      <div className="project-heading">
      <h1>My Projects</h1>
      </div>
   
    <div className="info">
     <div className="project-scale">
     <button type='button'>small Project</button>
        <button type='button'>Midium Project</button>
        <button  type='button' className='pro-btn'>Larg Project</button>

     </div>
     <div className="project">
      <div class="flip-card" >
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Quiz} alt="Avatar" style={{height:'150px',width:'200px'}}/>
    </div>
    <div class="flip-card-back">
      <h1 style={{background:'transparent'}}>Quiz-App</h1>
      <p style={{background:'transparent' ,opacity:'0.5'}}> Quizizz app to learn anything, anywhere</p>
      <button><a style={{background:'transparent'}} href="https://faijan-akhtar.netlify.app">Open-App</a></button>

    </div>
  </div>
</div>
    
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Food} alt="Avatar" style={{height:'150px',width:'200px'}}/>
    </div>
    <div class="flip-card-back">
      <h1 style={{background:'transparent'}}>Food-App</h1>
      <p style={{background:'transparent',opacity:'.5'}}>Search yummy</p>
      <button><a  style={{background:'transparent'}}  href="https://faizyfood.netlify.app">Open-App</a></button>

    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={ToDo} alt="Avatar" style={{height:'150px',width:'200px' }}/>
    </div>
    <div class="flip-card-back">
      <h1 style={{background:'transparent'}}>ToDo-App</h1>
      <p style={{background:'transparent'}}>Play and Good score</p>
      <button><a style={{background:'transparent'}} href="https://faijan-todo-app.netlify.app">ToDo-App</a></button>

    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={movie} alt="Avatar" style={{height:'150px',width:'200px'}}/>
    </div>
    <div class="flip-card-back">
      <h1 style={{background:'transparent', fontSize:'20px'}}>F-Movies-app</h1>
      <p style={{background:'transparent' }}>Colour in eye</p>
      <button><a style={{background:'transparent'}} href="https://f-movies-app.netlify.app">F-Movies-app</a></button>

    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Quiz} alt="Avatar" style={{height:'150px',width:'200px'}}/>
    </div>
    <div class="flip-card-back">
      <h1 style={{background:'transparent'}}>Quiz-App</h1>
      <p style={{background:'transparent'}}>Play and Good score</p>
      <button>Detail</button>

    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Quiz} alt="Avatar" style={{height:'150px',width:'200px'}}/>
    </div>
    <div class="flip-card-back">
      <h1 style={{background:'transparent'}}>Quiz-App</h1>
      <p style={{background:'transparent'}}>Play and Good score</p>
      <button>Detail</button>

    </div>
  </div>
</div>




      </div>

       </div>
    

  
   
      
   

    </div>
     





    </>
  )
}

export default Home
