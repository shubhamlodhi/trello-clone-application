import React, {useState,useEffect} from 'react';
import './Dashboard.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Typography, Button, Avatar, IconButton } from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm';
import { AvatarGroup } from '@material-ui/lab';
import TaskDialog from '../../containers/taskDialog/taskDialog'
import MembersDialog from '../../containers/membersDialog/membersDialog'
import BoardDialog from '../../containers/boardDialog/boardDialog'
import UsersDropdown from '../../components/dropdown/dropdown';
import AddMembersButton from '../../components/AddMembers/AddMembers'
import AddTaskButton from '../../components/AddTask/AddTask'
import Task from '../../components/OpenTask/OpenTask'
import axios from 'axios';
import { useLocation,useHistory } from 'react-router-dom';


import ListTitle from '../../components/ListTitle/ListTitle'



const useStyles = makeStyles({
  root: {
    minWidth: 20,
    backgroundColor: '#f2f4fc'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },

});



export default function Dashboards() {
  const classes = useStyles();
  
  const location = useLocation();
  const link = useHistory();


  


const [tasks, settasks] = useState([]);


// useEffect(() => {

// const axiosConfig = {
// headers: {
//     'Content-Type': 'application/json;charset=UTF-8',
//      'Authorization': 'Bearer '+ localStorage.getItem("accessToken"),
//     "Access-Control-Allow-Origin": "*",
// }
// };


// const url = `task/gettask`;

  
//   axios.get(url,axiosConfig).then(res=>
//     {
//       console.log(res.data);
//       settasks(res.data);
//     }
    
//     )

// }, [])








  return (

    <div className="dashboard">

      
      <div className="empty-navbar"></div>

      {/* <TaskDialog />
      <MembersDialog />
      <BoardDialog />
      <UsersDropdown /> */}

      <div className="dashboard__navbar">

        <h1>{location.boardname}</h1>

       
        <AddMembersButton />
      </div>

      <div className="dashboard__body">
        {/* Coloum 1 */}
        <div className="Column__head">
          <ListTitle title="To-Do" />
          <div className="Column__body">
          {/* Filter those task whose               board_id === "this" &&  task_tag === todo              */}
             {/* // Using Map I populate this coloumn  */}
             {/* { tasks.map(task => <Task title={task.taskName}/>)} */}

            <Task title="Add new Chart to Home page"/>
            <Task title="Bug in HomePage"/>
            <Task title="Create oAuth Feature"/>

          </div>
        </div>





        {/* Coloum 2 */}
        <div className="Column__head">
          <ListTitle title="In-Development" />
          <div className="Column__body">

          {/* Filter those task whose               board_id === "this" &&  task_tag === todo              */}

          <Task title="Add new Chart to HomePage"/>
          <Task title="Bug in HomePage"/>
            
          </div>
        </div>




        {/* Coloum 3 */}
        <div className="Column__head">
          <ListTitle title="To-Be Reviewed" />
          <div className="Column__body">
          
          {/* Filter those task whose               board_id === "this" &&  task_tag === todo              */}
          
          <Task title="Add new Chart to Home page"/>

          </div>
        </div>





        {/* Coloum 4 */}
        <div className="Column__head">
          <ListTitle title="Finished" />
          <div className="Column__body">
          
          {/* Filter those task whose               board_id === "this" &&  task_tag === todo              */}
          
          <Task title="Add new Chart to Home page"/>
            <Task title="Bug in HomePage"/>
            <Task title="Create oAuth Feature"/>
        
        
          </div>
        </div>
        




                      </div>{/* Dashboard body Ends */}

    </div>


  );
}