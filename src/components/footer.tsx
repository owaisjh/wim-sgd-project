import React, { useEffect, useState } from 'react';
import styles from "./footer.module.css";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ExploreIcon from '@material-ui/icons/Explore';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import HomeIcon from '@material-ui/icons/Home';
 
function footer () {



return(
    <div className={styles.Container}>

      <a href="/tab1">
        <div className={styles.Acq}>

        <AddLocationIcon className={styles.AddLocation} style={{fontSize:"inherit"}}  
    />

        </div>


    </a>



        <a href="/tab2">
        <div className={styles.Landmarks}>
        <LocationCityIcon className={styles.landmark} 
        
        style={{fontSize:"inherit",
      
    
    
    }}  
    />
        </div>
</a>



<a href="/tab3">
        <div className={styles.Roads}>

        <ExploreIcon className={styles.roads} style={{fontSize:"inherit"}} 

/>

        </div>        
</a>
<a href="http://mapify-main.bss.design/index.html">
        <div className={styles.Home}>

        <HomeIcon className={styles.home} style={{fontSize:"inherit"}} 

/>

        </div>        
</a>






    </div>
);





};


export default footer;