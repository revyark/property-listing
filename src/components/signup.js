import React, { useState } from 'react';
import './Signup.css';
import pt1 from './images/pt1.jpg';
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className="signup-container">
      <div className="signup-image" style={{backgroundImage: `url(${pt1})`}}></div>
      <div className="signup-form">
        <h1 className="logo">AGAR</h1>
        <h2 className="tagline">Log in to unlock the best of <span className="highlight">AGAR.</span></h2>

        <form onSubmit={handleSubmit}>
          <label>First Name *</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

          <label>Last Name *</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

          <label>Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone</label>
          <div className="phone-input">
            <span>+1</span>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <label>Password *</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <p className="password-hint">
            Password must be at least 8 characters long, with an uppercase, lowercase letter, and special character.
          </p>

          <label>Birthday *</label>
          <div className="birthday-selects">
            <select name="birthMonth" value={formData.birthMonth} onChange={handleChange}>
              <option value="">Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>

            <select name="birthDay" value={formData.birthDay} onChange={handleChange}>
              <option value="">Day</option>
              {days.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>

            <select name="birthYear" value={formData.birthYear} onChange={handleChange}>
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <p className="login-link">
          Already a member? <a href="#">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
