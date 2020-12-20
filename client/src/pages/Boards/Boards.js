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

  
  const axiosConfig = {
  headers: {
      "Content-Type": "application/json;charset=UTF-8",
       "Authorization": 'Bearer '+ localStorage.getItem("accessToken"),
      "Access-Control-Allow-Origin": "*",
  }
};



 const url = `/board/getboard`;


 axios.get(url,axiosConfig
//  ,{
  // headers:{
  //     "Authorization":"Bearer "+localStorage.getItem("jwt")
  // }
// }
).then(res=>{

  // const persons = res.data;
  console.log(res.data);
  setboards(res.data);
  })




//  function getGithubOrgs(url) {
//   return fetch(url).then((response) => response.json());
// }

    
//     getGithubOrgs(url).then((result) => 
          
//       console.log(result.data),
//       // console.log(result.data)
//       // console.log(result.data.express),
//       // console.log(result.express),
//       // setboards(result);
    
//     )
//    {

// const persons = res.data;

// console.log("******************************" + res.express);
// setboards(res.data);
// console.log(boards)
// });


  }, []);



  return (
    <div className="boardsdash">


      <div className="empty-navbar"></div>

      <h1>Boards</h1>

      <boardsDisplay className="board">

        <leftBoard className="left__board">

           {/* <p>
             {"Token :" + localStorage.getItem("accessToken")}
             {boards}
             </p> */}
             { boards.map(board => <Board info={board} />)}
           

        </leftBoard>



        <rightBoard className="right__board">
           <CreateBoard/>    
        </rightBoard>


    


      </boardsDisplay>
      


    </div>

  );
}