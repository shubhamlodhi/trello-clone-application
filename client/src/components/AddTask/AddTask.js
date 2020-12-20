import React , {useState,useEffect} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AvatarGroup } from "@material-ui/lab";
import { Card,Avatar, Typography, Box,Container,Divider, InputBase, Input, makeStyles } from "@material-ui/core";
import { Textarea } from "@chakra-ui/react"
import EditTask from  "../../components/EditTask/EditTask"
import axios from 'axios';
export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const [tasks, settasks] = useState(
        {
            taskName: "",
            stage:"todo",
            description: ""
           // boardMembers: [],
        }
    );

  const inputEvent = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);


        const value = event.target.value;
        const name = event.target.name;

        settasks((preValue) => {
            if (name === 'name') {
                return {
                    taskName: value,
                };
            }
            else if( name === 'description'){
                return {
                    description: value,
                };
            }
           

        });

    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {


        setOpen(false);
        window.location.reload();
    };

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer '+ localStorage.getItem("accessToken"),
            "Access-Control-Allow-Origin": "*",
        }
    };

    const onSave = (event) => {
            event.preventDefault()
            axios.post(
                `/task`,
                 tasks,
                 axiosConfig
                ).then(function (response) {
                console.log(response)
                setOpen(false);
                
            })
                .catch(function (error) {
                console.log(error)
            })
            
            
            setOpen(false);
            window.location.reload();

    }


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
    }));


    const classes = useStyles();
    return (
        // onClick={handleClickOpen}
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
      </Button> */}
      <button className="addTask_button" onClick={handleClickOpen}>+</button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth
                maxWidth='md'
            >
                <DialogTitle id="form-dialog-title">
          Add Task
        </DialogTitle>
        
            <Box display="flex">
            <Container maxWidth='md'>

                <DialogContent>
                        
                         {/* <InputBase
                            className={classes.margin}
                            // defaultValue="Naked input"
                            inputProps={{ 'aria-label': 'naked',readOnly: false, }} 
                            />  
                        */}

                    <Input onChange={inputEvent} value={tasks.taskName} name="name" placeholder="Task Title" inputProps={{ 'aria-label': 'description', readOnly: false }} />

                </DialogContent>

                <Box  m ={3}/>            
                <DialogContent>

                    <Box display="flex">
                        <Box><Typography>Members</Typography></Box>
                        <Box m={0.2} />
                        <Box><button className="addTask_button">+</button></Box>
                    </Box>
                    <Box  m ={2}/>
                    <AvatarGroup max={4}>
                        <Avatar alt="RS" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                </DialogContent>
                <Box  m ={5}/>
                <DialogContent >
                    

                        <textarea rows="7" cols="75" onChange={inputEvent} value={tasks.description} name ="description" >
                            
                        </textarea>

                    
                        
                        
                    {/* <TextField
                        id="outlined-helperText"
                        label="Description"
                        defaultValue="Default Value"
                        helperText="Note"
                        variant="outlined"
                        inputProps={{ readOnly: false, }}
                        fullWidth /> */}


                </DialogContent>
                </Container>

                <Box>
                    <Box display="flex" flexDirection="column" justifyContent='center' marginTop={0}>

                        {/* <button className="log_button">Edit</button> */}
                        {/* <Divider  /> */}
                        {/* <button className="log_button">Join Task</button> */}
                        <Box component='span' m={2}/>
                        
                        <Typography>Move To</Typography>
                        <Divider  />
                        <button className="log_button">To-Do</button>
                        <button className="log_button">Development</button>
                        <button className="log_button">Review</button>
                        <button className="log_button">Finished</button>

                        
                </Box>
                
                </Box>
                </Box>


                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
                
            </Dialog>
        </div>
    );
}
