
import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from "./services/auth.services";



const Login = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const router = useHistory()

   const handleSubmitClick = async (e) => {
        e.preventDefault();
        try {
        await AuthService.login(email, password).then(
            () => {
            redirectToHome()
            },
            (error) => {
            console.log(error);
            }
        );
        } catch (err) {
        console.log(err);
        }
        
    }


    const redirectToHome = () => {
        router.push('/home');
    }
    
   


return (
    <>
        <h1> Sign In </h1>
        <form onClick={handleSubmitClick}>
            <input 
            type="text" 
            placeholder='Email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ height: '30px'}}
            />
            <input 
            type="password" 
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />
           
            <button type='submit'  className="btn" style={{ height: '50px', cursor: 'pointer'}}>
                SIGN IN
            </button>
        </form>
    </>
        
)


}

export default Login;