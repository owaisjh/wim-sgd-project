import React, { useEffect, useState } from 'react';
import styles from "./Landmarks.module.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Roads (props: { Back: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined; }) {
    
    const [name, setName] = useState("");


    function getPosition(){
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(position=>
            {
            console.log(position.coords.latitude,position.coords.longitude);
            console.log(name);
          });
        }
      };

return(
    <div className={styles.Container}>

    <ExitToAppIcon className={styles.back} style={{fontSize:"2vw"}}  onClick={props.Back}
    
    />
    <br/>

    <b className={styles.text}>Please enter the details of the location</b>
   

    
    <div className={styles.emailInputWrapper} >
                <input className={styles.emailInput}
                    name="text"
                    placeholder="Name"
                />

                <button className={styles.emailButton} onClick={getPosition}>
                   <LocationOnIcon className={styles.emailLogo} /> 
                </button>
        

    </div> 




    </div>

);

};
export default Roads;