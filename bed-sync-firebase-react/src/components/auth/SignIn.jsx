import React from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';  // using v6

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  // using v6

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate("/Home");  
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Log In to your account</h1>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="Password" 
                    placeholder="Enter your password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default SignIn;
