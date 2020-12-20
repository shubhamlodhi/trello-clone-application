import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  
  state = {
    persons: {}
  }

  componentDidMount() {



//-
const postData = {
  email: "test7@test.com",
  password: "password"
};

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDgxMDg0OTQsImV4cCI6MTYwODExMjA5NCwiYXVkIjoiNWZkOWM3M2RiODMzODI2OTgwMmVmODFjIiwiaXNzIjoic2h1YmhhbWxvZGhpLmdpdGh1Yi5pbyJ9.d6thgnrbbcb27YUniKJwN5u-89UG4-G0a3AkbJZkB4k',
      "Access-Control-Allow-Origin": "*",
  }
};


const headers = {
  'Content-Type': 'application/json',
}
    
    axios.post(`http://127.0.0.1:3117/auth/register`,
              postData,
              axiosConfig
     


    // {
    //   // headers: 
      //   {
      //   'Access-Control-Allow-Origin': '*',
      //   },

      // proxy: {
      //   host: '127.0.0.1',
      //   port: 3117
      // }

    // }
    )
      .then(res => {
        
        const persons = res.data;
        console.log(res.data.accessToken);
        const user = {accessToken:res.data.accessToken}; 
         localStorage.setItem("accessToken",res.data.accessToken);
         this.setState({ persons });
      })
  }

  render() {
    return (
      
       
         <div>hello
           {/* {this.state.persons} */}
           </div>
          //  <ul>
          //   { this.state.persons.map(person => <li><text>{person.email}</text></li>)}
          // </ul>
    )
  }
}