import React, { useEffect, useState } from 'react';
import styles from "./Landmarks.module.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Roads (props: { Back: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined; }) {



return(
    <div className={styles.Container}>

    <ExitToAppIcon className={styles.back} style={{fontSize:"2vw"}}  onClick={props.Back}
    
    />
    <br/>

        

    </div>
);





};


export default Roads;