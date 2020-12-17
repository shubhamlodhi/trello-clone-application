import React,{useEffect,useState} from 'react';
import './Boards.css';
import { Button } from '@material-ui/core';
import Board from '../../components/BoardComponent/BoardComponent';
import CreateBoard from '../../components/CreateBoardComponent/CreateBoard';
import axios from 'axios';
import 'dotenv/config';



export default function Boards() {

  const [boards, setboards] = useState([]);

  useEffect(() => {


      //-
  const postData = {
  email: "test7@test.com",
  password: "password"
};

  const axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
       'Authorization': 'Bearer'+' '+ localStorage.getItem("accessToken"),
      "Access-Control-Allow-Origin": "*",
  }
};

 const url = `http://localhost:3117/board/getboard`;


    
    axios.get(
      url,
      axiosConfig

// proxy: {
//   host: '127.0.0.1',
//   port: 3117
// }

)
.then(res => {

const persons = res.data;
console.log(res.data);
setboards(res.data);
})


  }, [])



  return (
    <div className="boardsdash">


      <div className="empty-navbar"></div>

      <h1>Boards</h1>

      <boardsDisplay className="board">

        <leftBoard className="left__board">

           
             { boards.map(board => <Board info={board} />)}
           

        </leftBoard>



        <rightBoard className="right__board">
           <CreateBoard/>    
        </rightBoard>


    


      </boardsDisplay>
      


    </div>

  );
}


