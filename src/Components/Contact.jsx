import React from 'react'
import '../Components/Contact.css'
import pic from '../assets/dark-1.jpg'
const Contact = () => {
  return (
    <>
     <div className="main1">
      <div className="contact-main">
       <div className="container-form">
        <h1>Contact Me</h1>
        <form className="form-main">
          <label htmlFor="">NAME</label>
          <input type="text" name='username' />
          <label htmlFor="">Email</label>
          <input type="email" name='useremail' />
          <label htmlFor="">Message</label>
          <textarea name='message' type='submit'/>

        </form>
        <button className='submit-btn'>submit</button>
       </div>
   
      </div>
     </div>
    </>
  )
}

export default Contact
