import React, { useEffect, useState } from 'react';
import styles from "./StartDiv.module.css";
import Home from "./Home";

import Roads from "./Roads";
import Landmarks from "./Landmarks";

const StartDiv: React.FC = () => {
    const [DivState, setDiv] = useState("home");




    function landmarkCall()
    {

        setDiv("landmark");
    }

    function roadsCall()
    {

        setDiv("roads");
    }
    function back()
    {
        setDiv("home")

    }



    return (


        <div className={styles.container}>
                        
        {   DivState == "home" ? 
             <Home LandmarkFunction={landmarkCall}
                    RoadsFunction={roadsCall}
                  
             
             /> : <div/>
        }

        {
            DivState=="roads"?
            <Roads  Back={back}/>         

            : <div/>
        }


{
            DivState=="landmark"?
            <Landmarks Back={back}/>         

            : <div/>
        }




        </div>
    
    
      );





};




export default StartDiv;



