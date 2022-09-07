import React, { useState } from 'react'
import Logo from './Logo';
import {useNavigate} from 'react-router-dom';

function Login({setIsLoggedIn, myEmail, myPassword, data}) {


    const [email, setEmail] = useState('seeratalyshah@gmail.com');
    const [password, setPassword] = useState('helloworld123');
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate();


    const handleLogin = (e)=>{
          e.preventDefault();

          if(email !== myEmail || password !== myPassword)
          {
               setIsError(true);
          }
          else{
            setIsLoggedIn(true);
            navigate("/dashboard");
          }
             
    }

  return (
    <div className='login-page'>
     <form onSubmit={handleLogin}>
        <Logo />
        <h1>Login</h1>
        <div className="input-container">
         <label htmlFor="email">Email</label>
         <input type="email" id='email' placeholder='Your email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>

        <div className="input-container">
         <label htmlFor="password">Password</label>
         <input type="password" id='password' placeholder='Your email' value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </div>

        <button type='submit' >Login</button>

        {
            isError? <p className='error'>Invalid Email or Password. Please try again!</p> : null
        }
        
     </form>
    </div>
  )
}

export default Login;