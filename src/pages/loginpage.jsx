// import React, { useState } from 'react'
// import {Buttonwrapper,
//         Inptwrapper,
//         LogContainer, 
//         LoginButton,
//         Logintitle,
//         LoginWrapper } from '../constants/styles/style';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';



// const LoginPage = () => {
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');
//     const [error,setError] = useState('');
//     const navigate = useNavigate(); 

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post (`http://localhost:7070/auth/sign-in`,
//             {
//                  method:"POST",
//                  headers:{
//                     "Content-Type":"application/json",
//                  },
//                  body: JSON.stringify({ email,password 

//                  })
//                 }); 
//                 const data = await  response.json()
//                 if (response.ok) {
//                     alert(`Welcome, ${data.name}! You have logged in successfully.`);
//                     localStorage.setItem("token", data.token)
//                     console.log("Token is " ,data.token)
//                 }
//                 navigate("/motor");

//             console.log(response);
//             console.log(`Login successful`, response.data)
//         } catch (error) {
//             alert(`Email or password is wrong`);
//             setError("Invalid username or password")
//         }
//     }
//   return (
//     <LoginWrapper>
//             <LogContainer >
//                 <Logintitle>Login</Logintitle>
//                 <Inptwrapper>
//                     <input
//                     placeholder='email'
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </Inptwrapper>
//                 <Inptwrapper>
//                     <input 
//                     placeholder='password'
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </Inptwrapper>
//                 <Buttonwrapper> 
//                     <LoginButton type="submit" onClick={handleSubmit}>Login</LoginButton>
//                 </Buttonwrapper>
//             </LogContainer>
//     </LoginWrapper>  
//   )
// }

// export default LoginPage;




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
        
        if (!email || !password) {
            setError("Email and password cannot be empty");
            return;
        }
    
        try {
            const response = await axios.post(`http://localhost:7070/auth/sign-in`, {
                email,
                password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
    
            if (response.status === 200) {
                const data = response.data;
                alert(`Welcome, ${data.name}! You have logged in successfully.`);
                localStorage.getItem("token", data.token);
                console.log("Token is ", data.token);
                navigate("/motor");
            } else {
                setError("Invalid username or password");
            }
        } catch (error) {
            console.error(error);
            if (error.response) {
                // Server responded with a status other than 200 range
                setError(error.response.data.message || "An unexpected error occurred.");
            } else {
                // Network error or other issues
                setError("An unexpected error occurred. Please try again later.");
            }
        }
    };
    
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