import React, { useEffect, useState } from 'react';
// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

// import { addDataLayer } from "../map/addDataLayer";
import { initializeMap } from "../map/initializeMap";
// import { fetcher } from "../utilities/fetcher";
import styles from "../styles/Home.module.css";
// import { map, resize } from 'ionicons/icons';
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");



const Tab1: React.FC = () => {

  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();
  
  const [temp, setTemp] = useState(0);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWRpYWpnMTY5IiwiYSI6ImNrZ204ang1MDBpcnoycm8xc3I5cDlzMnAifQ.CQlynGnQmIdrW68HSoAynQ";





  function tp()
  {




setTemp(1);
    
  }

  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
   
      zoom: 12.5,
      
      container: "my-map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [
        72.848784,19.128629
      ],
     
      
    
    });
    
    initializeMap(mapboxgl, map);
  
    setMap(map);
    map=map.resize();
    setMap(map);
   
    tp();
  }, []);

  
function loaded()
{

 console.log("hi");
}

  return (
    <div className="container" >
        
       <main className="main"  >
        <div id="my-map" style={{ width: "100vw", height:"100vh" }}  />

  {/* <b className="temp">{temp}</b> */}
      </main>

</div>


  );
};

export default Tab1;
