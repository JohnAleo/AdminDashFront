import React, { useState } from 'react'
import {Buttonwrapper,
        Inptwrapper,
        LogContainer, 
        LoginButton,
        Logintitle,
        LoginWrapper } from '../constants/styles/style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("1chi xabar")
        try {
            const response = await axios.post(`http://localhost:7070/auth/sign-in`,
            {
                 email,
                 password,
            }); navigate("/motor")
            console.log(response);
            console.log(`Login successful`, response.data)
        } catch (error) {
            alert(`Email or password is wrong`);
            setError("Invalid username or password")
        }
    }
  return (
    <LoginWrapper>
            <LogContainer >
                <Logintitle>Login</Logintitle>
                <Inptwrapper>
                    <input
                    placeholder='email'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Inptwrapper>
                <Inptwrapper>
                    <input 
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Inptwrapper>
                <Buttonwrapper> 
                    <LoginButton type="submit" onClick={handleSubmit}>Login</LoginButton>
                </Buttonwrapper>
            </LogContainer>
    </LoginWrapper>  
  )
}

export default LoginPage;