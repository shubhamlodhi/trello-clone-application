import React from 'react';
import './TaskCard.css';
import { Card,CardContent,CardActions,Typography,Button,Avatar,IconButton } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import OpenTask from "../../components/OpenTask/OpenTask";

const TaskCard = (props) => {
  

    // Custom mUI
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

    


    const classes = useStyles();
    return (
        <div className="tsk">


            <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h6" component="h2">
        {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
    {/* {props.title} */}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Work of the Day
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button className={classes.color} size="small" >More</Button> */}
        <AvatarGroup max={4}>
      <Avatar alt="RS" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
      </CardActions>
    </Card>
</div>
    );
}

export default TaskCard;
