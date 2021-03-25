import React, { Fragment, useEffect, useState, useRef } from "react";
import styles from '../styles/main.css';
import axios from "axios";

// material UI
import { Input, Button } from "@material-ui/core";




const Search = (props) => {

    const [search, setSearch] = useState();

    const searching = () => {
        axios.post(`http://localhost:3009/api/search/`, {name:search}).then(res => {
            console.log(res);
            
        }).catch(error =>{
            console.log(error)
        })
    }
    
    return(
        <Fragment>
       <div className="searchBox">
            <Input
                    type="text"
                    placeholder="Find a restaurant, Gym, etc."
                    onChange={(e)=>setSearch(e.target.value)}/>
                   <Button
                   variant="container"
                   color="secundary"
                   onClick={()=>searching()}
                   >Search</Button>

       </div>
       
    
      
      

        </Fragment>
    )

}

export default Search;