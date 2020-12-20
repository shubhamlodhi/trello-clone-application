import React from 'react';
import './BoardComponent.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Typography, Button, Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import {useHistory,useLocation} from 'react-router-dom';







  




// Custom Style For mUI
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#f2f4fc'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  
  });

    // const location = useLocation();
    



    const BoardComponent = (props) => {



    const classes = useStyles();

    const link = useHistory();

    const changeRoute = () => {
      
      
        
         link.push(
          // '/'+ props.info._id +'/dashboard'
           { pathname: `/${props.info._id}/dashboard`, boardname: props.info.boardName }
           );
        
    }

    return (
        <div onClick={changeRoute}>

                <Card className={classes.root}>

                    <CardContent>

                        <Typography variant="h5" component="h2">
                            {props.info.boardName}
                            </Typography>

                    </CardContent>

                    <CardActions>
                        <AvatarGroup max={4}>

                            <Avatar alt="RS"  />
                            <Avatar alt="Travis Howard" />
                            <Avatar alt="Cindy Baker" />
                            <Avatar alt="Agnes Walker" />
                            <Avatar alt="Trevor Henderson" />

                        </AvatarGroup>
                    </CardActions>
                </Card>
            


        </div>
    );
}



export default BoardComponent;
