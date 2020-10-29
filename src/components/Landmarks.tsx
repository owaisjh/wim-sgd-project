import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import styles from "./Landmarks.module.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { handLeft } from 'ionicons/icons';

function Roads (props: { Back: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined; }) {
    
    const [name, setName] = useState("");
    const [typeLandmark,setTypeLandMark] = useState("school");
    


    function getPosition(){
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(position=>
            {
            console.log(position.coords.latitude,position.coords.longitude);
            console.log(name);
            console.log(typeLandmark);
          
          });
        }
      };

      function handleChange(event: { target: { name: string; value: React.SetStateAction<string>; }; })     
      { 
        if(event.target.name=="type"){
          setTypeLandMark(event.target.value);
        }
        else{
        setName(event.target.value);
        }     
      }
return(
    <div className={styles.Container}>

    <ExitToAppIcon className={styles.back} style={{fontSize:"2vw"}}  onClick={props.Back}
    
    />
    <br/>

    <b className={styles.text}>Please enter the details of the location</b>
    <br/>    
    <div>
    <label>Select Type of Landmark:</label>

    <select name="type" id="cars" className={styles.selector} onChange={handleChange}>
        <option value="school">School</option>
        <option value="hospital">Hospital</option>
        <option value="temple">Temple</option>
        <option value="mosque">Mosque</option>
        <option value="church">Church</option>
    </select>
    </div>


    
    <div className={styles.emailInputWrapper} >
                <input className={styles.emailInput}
                    name="text"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <button className={styles.emailButton} onClick={getPosition}>
                   <LocationOnIcon className={styles.emailLogo} /> 
                </button>
        

    </div> 




    </div>

);

};
export default Roads;