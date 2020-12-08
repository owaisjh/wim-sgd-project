import React, { useEffect, useState } from 'react';
import styles from "./Home.module.css";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ExploreIcon from '@material-ui/icons/Explore';

function Home (props: { LandmarkFunction: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined; RoadsFunction: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined; }) {



return(
    <div className={styles.Container}>

        <LocationCityIcon className={styles.landmark} style={{fontSize:"inherit"}}  onClick={props.LandmarkFunction}
    
        />


        <ExploreIcon className={styles.roads} style={{fontSize:"inherit"}} onClick={props.RoadsFunction}
    
        />


        

    </div>
);





};


export default Home;