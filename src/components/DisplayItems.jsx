import React, { Fragment, useState, useEffect } from "react";
import styles from '../styles/main.css';
import axios from "axios";
import GoogleMaps from './Maps';


//material-ui
import { Grid, Paper,  Box } from "@material-ui/core";



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    text:{
        textAlign:'left'
    }
  });

const DisplayItems = ({ data = [] })=>{

    console.log(data)
     let time = new Date();
     let day = time.getDay();    
     let hour = time.getHours() + ":" + time.getMinutes() + ":"+"00";
    return(
      
        <Fragment>
           

           
                {data.map((post, key) =>(
     <div>             
    <Card className={useStyles.root, useStyles.text, useStyles.media} key={key}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {post.name.fi}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {post.location.address.street_address}
          </Typography> 
          <Typography>
              {/* {post.opening_hours.hours[day].opens }
              {hour}
              {post.opening_hours.hours[day].closes} */}
              {hour > post.opening_hours.hours[day].opens &&  hour < post.opening_hours.hours[day].closes ? <h5>abierto</h5> : <h5>cerrado</h5>}
             
          </Typography>
        </CardContent>
        <CardMedia>
              {/* <GoogleMaps
     zoom={18}
     initialCenter={{ lat: post.location.lat, lng: post.location.lon}}
     />   */}
        </CardMedia>
      
           
      </CardActionArea>
     
    </Card>
    
     </div>
                ))}
               
        </Fragment>
       
    )
}

export default DisplayItems;