import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import styles from "./Landmarks.module.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { handLeft } from 'ionicons/icons';
import { type } from 'os';
// const axios = require('axios');

function Roads (props: { Back: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined; }) {
    
    const [name, setName] = useState("");
    const [village, setVillage] = useState("");
    const [typeLandmark,setTypeLandMark] = useState("school");

   
    
    function delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }

    // function getPosition(){
    //     if(navigator.geolocation){
    //       navigator.geolocation.getCurrentPosition(async (position)=>
    //         {
            
            
    //         latitude=position.coords.latitude;
    //         longitude=position.coords.longitude;
          
    //     });
    //   };
    // };

      function handleChange(event: { target: { name: string; value: React.SetStateAction<string>; }; })     
      { 
        if(event.target.name=="type"){
          setTypeLandMark(event.target.value);
        }
        else if(event.target.name=="village"){
          setVillage(event.target.value);
        } else{
        setName(event.target.value);
        }     
      }

      async function handleSubmit(event: { preventDefault: () => void; }){
        
        event.preventDefault();
        let latitude;
        let longitude ;     
        if(navigator.geolocation){
          console.log("hi");
          navigator.geolocation.getCurrentPosition(position=>
            {
            
            
            latitude=position.coords.latitude;
            longitude=position.coords.longitude;
              
        });
      };  

      await delay (250);
      
        
        console.log(typeof(typeLandmark));
        console.log(name);
        
        const temp = JSON.stringify({
          landmark_type:typeLandmark,
          landmark_name:name,
            latitude: latitude,
            longitude: longitude,
          village:village  
        });

        const response = await fetch('http://localhost:5000/storeLandmark', {  //Hosted Apis on localhost:5000
          method: 'POST',
          headers:{
            'Content-Type' : 'application/json',
          },
          body: temp,
        });
        
        const body = await response.text();
        console.log(latitude);
        console.log(longitude);
        console.log('sent');
      };

return(
    <div className={styles.Container}>

    <ExitToAppIcon className={styles.back} style={{fontSize:"2vw"}}  onClick={props.Back}
    
    />
    <br/>

    <b className={styles.text}>Please enter the details of the location</b>
    
    <br/>
    <form onSubmit={handleSubmit}>    
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

    <div>
      <label>Village:</label>
      <input 
        name="village"
        placeholder="Village Name"
        onChange={handleChange}
      />       
    </div>
    
    <div className={styles.emailInputWrapper} >
                <input className={styles.emailInput}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <button type="submit" className={styles.emailButton}>
                   <LocationOnIcon className={styles.emailLogo} /> 
                </button>
        

    </div> 
    </form>



    </div>

);

};
export default Roads;