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
        <form action='https://api.web3forms.com/submit' method='POST' className="form-main ">
        <input type="hidden" name="access_key" value="8607fe6a-d46b-4ace-b752-0c1b1586f26b"/>
          <label htmlFor="">NAME</label>
          <input type="text" name='username' />
          <label htmlFor="">Email</label>
          <input type="email" name='useremail' />
          <label htmlFor="">Message</label>
          <textarea name='message' type='submit'/>
          <button style={{marginTop:'20px'}} type='submit' className='submit-btn'>submit</button>
        </form>
       
       </div>
   
      </div>
     </div>
    </>
  )
}

export default Contact
