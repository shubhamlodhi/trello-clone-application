import React, { useState } from 'react';
import "./Signup.css";
import { useLocation,useHistory } from 'react-router-dom';
import axios from 'axios';
import { FormControl, InputLabel, OutlinedInput} from '@material-ui/core';
import 'dotenv/config';



const Signup = () => {


    const location = useLocation();
    const link = useHistory();
    
    //Hooks 
    const [credentials, setcredentials] = useState(
        {
            name: "",
            email: location.name ? location.name : "",
            password: ""
        }
    );

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
     
  
  
    const baseURL = process.env.API_URI;
   
    //Functions
    const changeRoute = (event) => {
            event.preventDefault()
            axios.post(
                `http://127.0.0.1:3117/auth/register`,
                 credentials,
                 axiosConfig
                ).then(function (response) {
                console.log(response)
                localStorage.setItem("accessToken",response.data.accessToken);
                link.push('/boards');    
            })
                .catch(function (error) {
                console.log(error)
            }) 

    }    

    const inputEvent = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);


        const value = event.target.value;
        const name = event.target.name;

        setcredentials((preValue) => {
            if (name === 'name') {
                return {
                    name: value,
                    email: preValue.email,
                    password: preValue.password
                };
            }
            else if (name === 'email') {
                return {
                    name: preValue.name,
                    email: value,
                    password: preValue.password
                };
            }
            else if (name === 'password') {
                return {
                    name: preValue.name,
                    email: preValue.email,
                    password: value,
                };


            }

        });

    }
    

    return (


        <div className="signupForm">
                
            <form className="signupForm__box">

                <h1>Sign-Up</h1>

                <text>Create an account</text>

                <FormControl id="email" isRequired>
                    <InputLabel id="label" htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput type="text" placeholder="Name" onChange={inputEvent} value={credentials.name} name="name" />

                </FormControl>

                <FormControl id="email">
                    <InputLabel id="label" htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput type="text" placeholder="Email" onChange={inputEvent} value={credentials.email} name="email" />

                </FormControl>

                <FormControl id="email">
                    <InputLabel id="label" htmlFor="component-outlined">Password</InputLabel>
                    <OutlinedInput type="password" placeholder="Password" onChange={inputEvent} value={credentials.password} name="password" />
                </FormControl>

                
                <button className="log_button" onClick={changeRoute}>Sign-Up</button>  

                
            </form>
        </div>
    );
}

export default Signup;

