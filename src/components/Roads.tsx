import React, { useEffect, useState } from 'react';
import styles from "./Roads.module.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { createStyles, Theme, makeStyles, withStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import {sendRoute} from "../map/sendRoute";


const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
let a=0;
let temp=0;
var latlon:number[][]=new Array(); 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      root: {
    
    color: 'green',
 
  },
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);



function Roads (props: { Back: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined; }) {

    const [ButtonState, setButton] = useState("not_started");
    const [startLandmark,setStartLandmark] =  useState("");
    const [terminalLandmark,setTerminalLandmark] =  useState("");
    const [startLandMarkType, setStartLandMarkType] =useState("school");
    const [terminalLandMarkType, setTerminalLandmarkType] = useState("school");
    const classes = useStyles();  
        
    function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }


    function handleChange(event: { target: { name: string; value: React.SetStateAction<string>; }; })     
    { 
      if(event.target.name=="startType"){
        setStartLandMarkType(event.target.value);
      } else if(event.target.name="endType"){
        setTerminalLandmarkType(event.target.value);
      } else if(event.target.name="startName"){
        setStartLandmark(event.target.value);
      }
      else{
      setTerminalLandmark(event.target.value);
      }     
    }
async function start()
{
    setButton("started");
    console.log("started");

    
  
    while(ButtonState=="not_started" && a==0)
    {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{

          latlon.push([position.coords.latitude,position.coords.longitude]);
          
        });
      }
    
        console.log("hi");

        await delay(2500);
    }

}

function stop()
{
    a=1;
    setButton("stopped");
    console.log("stopped")
    console.log(latlon);

}

function send()
{
    console.log("sent");
    setButton("not_started");    
    a=0;
    temp=0;
    console.log(latlon);

}

return(
    <div className={styles.Container}>

    <ExitToAppIcon className={styles.back} style={{fontSize:"2vw"}}  onClick={props.Back}
    
    />
    <br/>

 
    <b className={styles.text}>Press Start to Initialize Route Collection</b>

    <div className={styles.wrapper}>
    <div>
    <div>
    <label>Select Type of Start Landmark:</label>

    <select name="starttype" id="cars" className={styles.selector} onChange={handleChange}>
        <option value="school">School</option>
        <option value="hospital">Hospital</option>
        <option value="temple">Temple</option>
        <option value="mosque">Mosque</option>
        <option value="church">Church</option>
    </select>
    </div>


    
    <div className={styles.emailInputWrapper} >
                <input className={styles.emailInput}
                    name="startName"
                    placeholder="Name"
                    onChange={handleChange}
                />
    </div>
    
    </div>

    <div>
    <div>
    <label>Select Type of End Landmark:</label>

    <select name="endtype" id="cars" className={styles.selector} onChange={handleChange}>
        <option value="school">School</option>
        <option value="hospital">Hospital</option>
        <option value="temple">Temple</option>
        <option value="mosque">Mosque</option>
        <option value="church">Church</option>
    </select>
    </div>


    
    <div className={styles.emailInputWrapper} >
                <input className={styles.emailInput}
                    name="endName"
                    placeholder="Name"
                    onChange={handleChange}
                />
    </div>
    
    </div>
    
    {
        ButtonState == "not_started" ?
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={start}>
        <NavigationIcon className={classes.extendedIcon} />
        Start
        </Fab>  
        : <b/>
    }
         
    {
        ButtonState == "started" ?
        <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin} onClick={stop}>
        <NavigationIcon className={classes.extendedIcon} />
        Stop
        </Fab>  
        : <b/>
    }
     {
        ButtonState == "stopped" ?
        <Fab variant="extended" color="inherit" aria-label="add" className={classes.margin} onClick={send}>
        <NavigationIcon className={classes.extendedIcon} />
        Send?
        </Fab>  
        : <b/>
    }
         
    





    </div>

    </div>
);





};


export default Roads;