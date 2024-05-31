// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

import "../components/styles.css";
import FirstImage from "../images/Kuchyn.png"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            console.log("AAAAAAAAA")
            const response = await axios.post('http://localhost/login.php', {
                username,
                password
            });
            if (response.data.success) {
                console.log("AAAAAAAAA")
                setMessage(response.data.message);
                setLoggedInUser(response.data.username);
            } else {
                console.log("aaaadw")
                setMessage(response.data.message);
                setLoggedInUser(null);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('An error occurred. Please try again.');
            setLoggedInUser(null);
        }
    };

    return (
        <div>
            <Navbar/>
        
            <div className="backIm">
    <div className="mask">
        <img className="firstimg" src={FirstImage} alt="IMGF"/>
    </div>
    <div className="content a" >
        
    
            <h2>Login</h2>
            <p>Login to acces secret site</p>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            {loggedInUser && <p>Welcome, {loggedInUser}!</p>}
            <h4>Dont have an account?: <Link to ="/Register">Register</Link></h4>
        </div>
        </div>
        <Footer/>
  </div>
    );
};

export default Login;