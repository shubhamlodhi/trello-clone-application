import React,{useState,useEffect} from "react";
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
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import UsersDropdown from "../dropdown/dropdown";
import axios from 'axios';
//Custom mUI
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));


//   const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     margin: {
//         margin: theme.spacing(1),
//     },
// }));



function CreateBoard(){

    
    const classes = useStyles();

    
    //Hooks
    const [open, setOpen] = React.useState(false);

    
    
    //Functions
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


     //Hooks 
     const [boardinfo, setboardinfo] = useState(
        {
            boardName: "",
           // boardMembers: [],
        }
    );

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer '+ localStorage.getItem("accessToken"),
            "Access-Control-Allow-Origin": "*",
        }
    };
     
  
  
    
   
    //Functions
    const onCreate = (event) => {
            event.preventDefault()
            axios.post(
                `/board`,
                 boardinfo,
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

    const inputEvent = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);


        const value = event.target.value;
        const name = event.target.name;

        setboardinfo((preValue) => {
            if (name === 'name') {
                return {
                    boardName: value,
                };
            }
           

        });

    }










    
    return (
        <div>


   
            <Button id="submit" variant="contained" color="primary" onClick={handleClickOpen}>
                Create Board
            </Button>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth = {false}
                maxWidth='sm'>

                <DialogTitle id="form-dialog-title">
                    Add Board
                </DialogTitle>

                {/* Inputs */}
                <DialogContent>

                    <Box display="flex" flexDirection="column" justifyContent='center'>
                            
                            <Box>
                                    <TextField
                                    id="outlined-helperText"
                                    label="Board Name"
                                    // defaultValue="Default Value"
                                    placeholder="Product Team"
                                    helperText="Create your own team"
                                    variant="outlined"
                                    name="name"
                                    inputProps={{ readOnly: false, }}
                                    onChange={inputEvent}
                                    value={boardinfo.boardName}
                                    fullWidth />
                            </Box>

                        {/* Span */}
                        <Box m ={2}/>
                        
                            <Box>
                            <UsersDropdown/>
                            {/* <UsersDropdown/> */}

                            {/* <TextField
                            id="outlined-helperText"
                            label="Description"
                            defaultValue="Default Value"
                            helperText="Note"
                            variant="outlined"
                            inputProps={{ readOnly: false, }}
                            fullWidth /> */}
                            
                            </Box>


                    </Box> 

                </DialogContent>


                {/* Action */}
                <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        
                        <Button onClick={onCreate} color="primary">
                            Create
                        </Button>
                </DialogActions>
                
            </Dialog>







        </div>
    );
}

export default CreateBoard;
