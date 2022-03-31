import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const  [ token, setToken ] = useState({
        token: ""
    })
    const router = useHistory()

    //PostLogin
  const Url = 'https://demoapi.remis.ng/Login'
    const ACCESS_TOKEN_NAME = 'login_access_token';

   const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":email,
            "password":password,
        }
        axios.post(Url, payload)
            .then(function (response) {
                if(response.status === 200){
                    console.log(response.data)
                    const Tk = response.data.token
                    localStorage.setItem(ACCESS_TOKEN_NAME,Tk);
                    // redirectToHome();
                    setToken({
                        token: Tk
                    })
                }
            })
          
            .catch(function (error) {
                console.log(error);
            });
    }

    //getDriver
    const compoundId = '96f583d7-7395-412d-bb7c-5f6747ab479b'

    const getDriver = async () => {
        let res;
        try {
        res = await axios.get(`https://demoapi.remis.ng/Drivers/All?count=true&companyId=${compoundId}`, { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        console.log(res)
        } catch (e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        getDriver()
        console.log(token)
    })


    //PostDriver

    const Url2 = `https://demoapi.remis.ng/Driver/Add/${compoundId}`
    const submitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":email,
            "password":password,
            "name": name,
            "phone": phone,
            "address": address,
            "city": city,
            "state": state,
        }

        axios.post(Url2, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
            .then(function (response) {
                if(response.status === 200){
                    console.log(response.data)
                }
            })
          
            .catch(function (error) {
                console.log(error);
            });
    }
    // useEffect(() => {
    //     const token = localStorage.getItem('ACCESS_TOKEN_NAME');
    //     console.log(token)
    //     if (token) {
    //     setToken(token);
    //     }
    //     return () => {
    //     }
    // }, [token])

    console.log(token)
    const redirectToHome = () => {
        router.push('/home');
    }
    
   


return (
    <>
        <form  onClick={handleSubmitClick}>
            <input 
            type="text" 
            placeholder='Email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input 
            type="password" 
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
             className="name"
            />
           
            <button type='submit'  className="btn">
                SIGN IN
            </button>
        </form>
        
        <h1> Post for Drivers</h1>
        <form  onClick={submitClick}>
            <input 
            type="text" 
            placeholder='Email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input 
            type="password" 
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
             className="name"
            />
             <input 
            type="text" 
            placeholder='City'
            value={city}
            onChange={e => setCity(e.target.value)}
             className="name"
            />
            <input 
            type="text" 
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
             className="name"
            />
            <input 
            type="text" 
            placeholder='address'
            value={address}
            onChange={e => setAddress(e.target.value)}
             className="name"
            />
            <input 
            type="text" 
            placeholder='state'
            value={state}
            onChange={e => setState(e.target.value)}
             className="name"
            />
            <button type='submit'  className="btn">
                Submit
            </button>
        </form>
        


    </>
)


}

export default Login;