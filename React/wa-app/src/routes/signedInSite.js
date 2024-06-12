import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Image from '../components/SecretFaceImage';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
// acces nefunguje
let acces = true;

function signIn() {
    acces = true;
}

function logout() {
    acces = false;
}

function check(che) {
}

const SignedInSite = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!acces) {
            navigate('/login');
        }
    },);

    return (
        <div>
            <Navbar />
            <Image />
            <h1>Skrytá stránka pro splnění zadání</h1>
            <Footer />
        </div>
    );
}

export default SignedInSite;