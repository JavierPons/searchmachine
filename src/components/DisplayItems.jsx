import React, { Fragment, useState, useEffect } from "react";
import styles from '../styles/main.css';
import axios from "axios";

//material-ui
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


const DisplayItems = ({ data = [] })=>{

    console.log(data)
     
    return(
      
        <Fragment>
           
            <Grid container spacing={40} justify="center">
                {data.map((post, key) =>(
                    <Grid item key={key}> 
                        <Card>
                            <CardContent>
                                
                                {post.name.fi}
                            </CardContent>
                        </Card> 
                    </Grid>       
                ))}

            </Grid>

            
        </Fragment>
       
    )
}

export default DisplayItems;