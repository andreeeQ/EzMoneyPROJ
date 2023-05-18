import React, { useState } from 'react';
import "./support.css";
import "../App.css";
import Navbar from '../components/Navbar';


const setIsFormSubmitted = () => {
        alert('Foem sent');
    }

const Supportpage = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [agreedToPrivacyPolicy, setAgreedToPrivacyPolicy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsFormSubmitted(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    setAgreedToPrivacyPolicy(false);
  };
    return (
        <div>
            <Navbar/>
        <h2 className='support'>Need some help? Get in touch with us.</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone number</label>
            <div>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={agreedToPrivacyPolicy}
                onChange={(e) => setAgreedToPrivacyPolicy(e.target.checked)}
              />{' '}
              You agree to our privacy policy.
            </label>
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    );
}



export default Supportpage;