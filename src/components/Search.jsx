import React, { Fragment, useState, useEffect } from "react";
import styles from '../styles/main.css';
import DisplayItems from './DisplayItems'

import axios from "axios";

// material UI
import { Input, Button } from "@material-ui/core";
import {AppBar} from '@material-ui/core'
import { textAlign } from "@material-ui/system";



const Search = (props) => {
    const [search, setSearch] = useState();
    const [data, setData] = useState();
    // const [list, setList] =  useState([])

    const searching = () => {
        axios.post(`http://localhost:3009/api/search/`, {name:search}).then(res => {
            setData(res.data.data);
        }).catch(error =>{
            console.log(error)
        })
    }
   
    return(
        <Fragment>
            <AppBar className="items" color="primary" position="static">
                <h2 style={{textAlign:'center'}}>Search</h2>
            </AppBar>
       <div className="searchBox">
       

            <Input
                    type="text"
                    placeholder="Restaurant, Sauna, etc."
                    onChange={(e)=>setSearch(e.target.value)}/>
                   <Button
                   variant="container"
                   color="secundary"
                   onClick={searching}
                   >Search</Button>
        <DisplayItems data={data}  />
       </div>
       
    
      

        </Fragment>
    )

}

export default Search;