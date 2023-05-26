import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddUser = () => {
    const initialState = {name:"" , username:"",phone:"", email:"", website:""}
    const [user, setUser] = useState(initialState)

    const {name, username, email,phone, website}=user;


    const onChangeInput = event => {
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);

        setUser({ ...user, [event.target.name]:event.target.value});


        }


    const navigate = useNavigate();
    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(!user.name){
            alert("Name cannot be empty");
            return;
        }
        if(!user.username){
            alert("Username cannot be empty");
            return;
        }
        if(!user.email){
            alert("Email cannot be empty");
            return;
        }
        if(!user.phone){
            alert("Phone cannot be empty");
            return;
        }
        if(!user.website){
            alert("Website cannot be empty");
            return;
        }

        axios.post("http://localhost:5000/users", user);

        navigate('/')
    }
    return (
        <div className='container'>
            <div className='w-75 mx-auto p-5 shadow'  >
                <h2 className='text-center mb-4'>Add user</h2>
                <form onSubmit={(event)=>onFormSubmit(event)}>
                    <div className='form-group mb-2'>
                        <input type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter the full name'
                        name='name'
                        value={name}
                        onChange={(event)=>onChangeInput(event)}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <input type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter the username'
                        name='username'
                        value={username}
                        onChange={(event)=>onChangeInput(event)}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <input type='email'
                        className='form-control form-control-lg'
                        placeholder='Enter your email'
                        name='email'
                        value={email}
                        onChange={(event)=>onChangeInput(event)}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <input type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter your phone number'
                        name='phone'
                        value={phone}
                        onChange={(event)=>onChangeInput(event)}
                        />
                    </div>
                    <div className='form-group mb-4'>
                        <input type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter your website'
                        name='website'
                        value={website}
                        onChange={(event)=>onChangeInput(event)}
                        />
                    </div>
                    <button type='submit' className='btn btn-info text-white col-12'>Add user</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;
