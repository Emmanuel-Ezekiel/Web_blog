import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import postService from "./services/post.services";



const Register = () => {
    const [ email, setEmail ] = useState("");
    const [ name, setName ] = useState("");
    const [ userId, setUserId ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ roles, setRoles ] = useState([]);
    const [ company, setCompany ] = useState("");

 

   const handleSubmitClick = async (e) => {
        e.preventDefault();
        try {
        await postService.postDriver(company,userId,name,phone,email,address,city,state,roles).then(
            () => {

            },
            (error) => {
            console.log(error);
            }
        );
        } catch (err) {
        console.log(err);
        }
        
    }


    
   


return (
    <>
        <h1> Add Driver </h1>
        <form onClick={handleSubmitClick}>
            <label htmlFor=""> Company ID</label>
            <input 
            type="text" 
            placeholder='Email'
            value={company}
            onChange={e => setCompany(e.target.value)}
            style={{ height: '30px'}}
            />

            <label htmlFor=""> user ID</label>
            <input 
            type="text" 
            placeholder='id'
            value={userId}
            onChange={e => setUserId(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> Name </label>
            <input 
            type="name" 
            placeholder='name'
            value={name}
            onChange={e => setName(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> Phone </label>
            <input 
            type="text" 
            placeholder='phone number'
            value={phone}
            onChange={e => setPhone(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> Email </label>
            <input 
            type="text" 
            placeholder='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> Address </label>
            <input 
            type="text" 
            placeholder='Address'
            value={address}
            onChange={e => setAddress(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> city </label>
            <input 
            type="text" 
            placeholder='city'
            value={city}
            onChange={e => setCity(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> state </label>
            <input 
            type="text" 
            placeholder='state'
            value={state}
            onChange={e => setState(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> Role </label>
            <input 
            type="role" 
            placeholder='role'
            value={roles}
            onChange={e => setRoles(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />
           
            <button type='submit'  className="btn" style={{ height: '50px', cursor: 'pointer'}}>
                ADD
            </button>
        </form>
        
        <hr />
        
        <h1>Edit Driver</h1>
        <form onClick={handleSubmitClick}>
            <label htmlFor=""> Company ID</label>
            <input 
            type="text" 
            placeholder='Email'
            value={company}
            onChange={e => setCompany(e.target.value)}
            style={{ height: '30px'}}
            />

            <label htmlFor=""> user ID</label>
            <input 
            type="text" 
            placeholder='id'
            value={userId}
            onChange={e => setUserId(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> Name </label>
            <input 
            type="name" 
            placeholder='name'
            value={name}
            onChange={e => setName(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> Phone </label>
            <input 
            type="text" 
            placeholder='phone number'
            value={phone}
            onChange={e => setPhone(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> Email </label>
            <input 
            type="text" 
            placeholder='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> Address </label>
            <input 
            type="text" 
            placeholder='Address'
            value={address}
            onChange={e => setAddress(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> city </label>
            <input 
            type="text" 
            placeholder='city'
            value={city}
            onChange={e => setCity(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> state </label>
            <input 
            type="text" 
            placeholder='state'
            value={state}
            onChange={e => setState(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />

            <label htmlFor=""> Role </label>
            <input 
            type="role" 
            placeholder='role'
            value={roles}
            onChange={e => setRoles(e.target.value)}
             className="name"
             style={{ height: '30px'}}
            />
           
            <button type='submit'  className="btn" style={{ height: '50px', cursor: 'pointer'}}>
                Edit
            </button>
        </form>
    </>
        
)


}

export default Register;