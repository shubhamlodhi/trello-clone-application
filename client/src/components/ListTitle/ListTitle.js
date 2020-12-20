import React from 'react';
import { Typography} from '@material-ui/core';
import AddTaskButton from '../../components/AddTask/AddTask';



const ListTitle = (props) => {
    return (
        <div className="Column__title_body">
                        
                        <div className="Column__title">

                        
                        <Typography>
                        {props.title}
                            </Typography>
                            </div>
                        
                            
                        
                            <div className="addTask">
                            {/* <button className="addTask_button">+</button> */}
                            <AddTaskButton/>
                            </div>
                            
                            </div>
    );
}

export default ListTitle;
