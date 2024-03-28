import React, { useState } from 'react';
import './App.css';

function App() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // State for email validation
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Update form data as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate email format
    if (name === 'email') {
      setIsValidEmail(validateEmail(value));
    }
  };

  // Validate email function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Display entered form data in an alert
  const handleSubmit = () => {
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className="app-container">
      <h1>Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={!isValidEmail ? 'invalid' : ''}
          />
          {!isValidEmail && (
            <div className="error-message">Please enter a valid email</div>
          )}
        </div>
        <div className="form-group">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>

      <h2>Entered Data</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.name}</td>
            <td>{formData.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;





//import React, { useState } from 'react'


//function App() {
 // const [users, setusers] = useState (userData);
 // return (
  //  <>
  //    <center>
  //      <h1>Form</h1>
  //      <label input='name'></label>



     // </center>
      
      
    
    
   // </>
  //)
//}

//export default App
