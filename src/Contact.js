
 import React, { useState } from 'react';
 import './App.css';
 
 function Contact() {
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     message: '',
   });
   const [submittedData, setSubmittedData] = useState(null);
 
   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
     

     setSubmittedData(formData);
   };
 
   return (
     <div className="contact-container">
       <h1 style={{ textAlign: 'center', color: 'blue' }}>Contact Pages</h1>
       <p>Contact Us (000-123456) Office</p>
       <p>Whatsapp (000-123456789) Admin</p>
       <form onSubmit={handleSubmit}>
         <label>
           Name
           <input
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
           />
         </label>
         <br />
         <label>
           Email:
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
           />
         </label>
         <br />
         <label>
           Text:
           <textarea
             name="message"
             value={formData.message}
             onChange={handleChange}
           ></textarea>
         </label>
         <br />
         <button type="submit">Submit</button>
       </form>

     </div>
   );
 }
 
 export default Contact;
 