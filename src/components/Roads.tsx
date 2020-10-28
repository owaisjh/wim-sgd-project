import React, { useEffect, useState } from 'react';
import styles from "./Roads.module.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { createStyles, Theme, makeStyles, withStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

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

    const classes = useStyles();

    function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

async function start()
{
    setButton("started");
    console.log("started");

    while(ButtonState=="started")
    {
    var geolocate = new mapboxgl.GeolocateControl();
  
    
    geolocate.on('geolocate', function(e: { coords: { longitude: any; latitude: any; }; }) {
          var lon = e.coords.longitude;
          var lat = e.coords.latitude
          var position = [lon, lat];
          console.log(position);
    });
    
    console.log("hi");

    await delay(500);
    }

}

function stop()
{
    setButton("stopped");
    console.log("stopped");

}

function send()
{
    console.log("sent");
    setButton("not_started");    

}

return(
    <div className={styles.Container}>

    <ExitToAppIcon className={styles.back} style={{fontSize:"2vw"}}  onClick={props.Back}
    
    />
    <br/>

 
    <b className={styles.text}>Press Start to Initialize Route Collection</b>

    <div className={styles.buttonWrapper}>
    
    
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