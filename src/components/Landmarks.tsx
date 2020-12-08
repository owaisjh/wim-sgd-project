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

      function sendPostgresql(data: any){
        const response = fetch('https://992c3ecc5ec3.ngrok.io/storeLandmark', {  //Hosted Apis on localhost:5000
          method: 'POST',
          headers:{
            'Content-Type' : 'application/json',
          },
          body: data,
        });
        return response;
      }

      function sendNeo4j(data: any){
    
        const response = fetch( 'https://992c3ecc5ec3.ngrok.io/add_landmark' ,{  //Hosted Apis on localhost:5000
          method: 'POST',
          headers:{
            'Content-Type' : 'application/json',
          },
          body: data,
        });
        return response;
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

      await delay (4000);
      
        
        console.log(typeof(typeLandmark));
        console.log(name);
        console.log(latitude);
        const temp = JSON.stringify({
          landmark_type:typeLandmark,
          landmark_name:name,
            latitude: latitude,
            longitude: longitude,
          village:village  
        });

        console.log(temp);
        const response_1 = await sendPostgresql(temp);
        const response_2 = await sendNeo4j(temp);
        const body_1 = await response_1.text();
        const body_2 = await response_2.text();
        console.log('sent');
      };

return(
    <div className={styles.Container}>

    <ExitToAppIcon className={styles.back} style={{fontSize:"2vw"}}  onClick={props.Back}
    
    />
    <br/>

    <b className={styles.text}>Please enter the details of the location</b>
    
    <br/>

    <div className={styles.Big}>
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
      <input className={styles.Input}
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
    </div>

);

};
export default Roads;