import React, { useState } from 'react';
import './Login.css';
import { useLocation } from 'react-router-dom';
import { FormControl, InputLabel, OutlinedInput} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



export default function Login() {


    const link = useHistory();
    const location = useLocation();
    
    const [credentials, setcredentials] = useState({
        email:"",
        password: ""
    }
    );

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
     
    //Functions
    const changeRoute = (event) => {
            event.preventDefault()
            axios.post(
                `http://127.0.0.1:3117/auth/login`,   
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

        // console.log(event.target.value);
        // console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setcredentials((preValue) => {

            if (name === 'email') {
                return {
                    
                    email: value,
                    password: preValue.password
                };
            }
            else if (name === 'password') {
                return {
                   
                    email: preValue.email,
                    password: value,
                };
            }

        });

    }


    return (
        <div>

            <div className="loginForm">

                <form className="loginForm__box">

                    <h1>Login-In</h1>

                    <text>Get into your Account</text>



                    <FormControl id="email">
                        <InputLabel id="label" htmlFor="component-outlined">Email</InputLabel>
                        <OutlinedInput type="text" placeholder="Email" onChange={inputEvent} value={credentials.email} name="email" />

                    </FormControl>

                    <FormControl id="email">
                        <InputLabel id="label" htmlFor="component-outlined">Password</InputLabel>
                        <OutlinedInput type="password" placeholder="Password" onChange={inputEvent} value={credentials.password} name="password" />
                    </FormControl>


                    <button className="log_button" onClick={changeRoute}>Login</button>



                </form>
            </div>

        </div>
    );
}
