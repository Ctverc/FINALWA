// Register.js
import React, { useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import BckImage from '../components/BckImage';
import Footer from '../components/Footer';
import "../components/styles.css";
import FirstImage from "../images/Kuchyn.png"
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/register.php', {
                username,
                password
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <Navbar/>
<div className="backIm">
    <div className="mask">
        <img className="firstimg" src={FirstImage} alt="IMGF"/>
    </div>
    <div className="content">
        
   
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
        </div>
        <Footer/>
  </div>

    );
};

export default Register;