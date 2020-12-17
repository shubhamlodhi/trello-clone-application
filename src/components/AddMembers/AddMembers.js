import React from "react";
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



function AddMembers(){

    
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

    const team = "Product Team";
    
    return (
        <div>


   
            <button className="addMember_button" onClick={handleClickOpen}>Add Members</button>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth = {false}
                maxWidth='sm'>

                <DialogTitle id="form-dialog-title">
                    Add Members
                </DialogTitle>

                {/* Inputs */}
                <DialogContent>

                    <Box display="flex" flexDirection="column" justifyContent='center'>
                            
                            <Box>
                                    <TextField
                                    id="outlined-helperText"
                                    label="Board Name"
                                    defaultValue={team}
                                    placeholder="Product Team"
                                    // helperText="Create your own team"
                                    variant="outlined"
                                    inputProps={{ readOnly: true, }}
                                    fullWidth />
                            </Box>

                        {/* Span */}
                        <Box m ={1}/>
                        
                            <Box>
                            <UsersDropdown/>
                            
                            </Box>


                    </Box> 

                </DialogContent>


                {/* Action */}
                <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        
                        <Button onClick={handleClose} color="primary">
                            Add
                        </Button>
                </DialogActions>
                
            </Dialog>







        </div>
    );
}

export default AddMembers;
