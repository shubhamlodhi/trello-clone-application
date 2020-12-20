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



export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth = {false}
                maxWidth='sm'
            >
                <DialogTitle id="form-dialog-title">
                Add Board
                </DialogTitle>

                <DialogContent>
                    <Box display="flex" flexDirection="column" justifyContent='center'>
                        <Box>
                        <TextField
                        id="outlined-helperText"
                        label="Description"
                        defaultValue="Default Value"
                        helperText="Note"
                        variant="outlined"
                        inputProps={{ readOnly: false, }}
                        fullWidth />
                        </Box>
                        <Box m ={2}/>
                        <Box>

                        {/* <UsersDropdown/> */}

l


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

                <DialogContent>

                <div className={classes.root}>
      <Avatar>H</Avatar>
      <Avatar className={classes.orange}>N</Avatar>
      <Avatar className={classes.purple}>OP</Avatar>
    </div>
                </DialogContent>

        


                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
                
            </Dialog>
        </div>
    );
}
