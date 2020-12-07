import React, { useEffect, useState } from 'react';
// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import StartDiv from '../components/StartDiv';
// import { addDataLayer } from "../map/addDataLayer";
import { initializeMap } from "../map/initializeMap";
// import { fetcher } from "../utilities/fetcher";
import styles from "../styles/Home.module.css";
// import { map, resize } from 'ionicons/icons';
import 'mapbox-gl/dist/mapbox-gl.css' // Updating node module will keep css up to date.
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);


var mapboxgl = require("mapbox-gl");

const Tab2: React.FC = () => {

  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map2, setMap2] = useState();
  const [Load, setLoaded] = useState("not_loaded");
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const prevHeight = height;
  const prevWidth = width;
  console.log("Height:"+prevHeight);
  console.log("Width:"+prevWidth); 
  const updateWidthAndHeight = () => {
    setWidth(753);
    setHeight(1005);
  };
  const [temp, setTemp] = useState(0);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWRpYWpnMTY5IiwiYSI6ImNrZ204ang1MDBpcnoycm8xc3I5cDlzMnAifQ.CQlynGnQmIdrW68HSoAynQ";




  useEffect(() => {
    setPageIsMounted(true);

    let map2 = new mapboxgl.Map({
   
      zoom: 13,
      
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v10",
      center: [
        72.848784,19.128629
      ],
     
      
    
    });
    
    initializeMap(mapboxgl, map2);
    
    setMap2(map2);
    window.addEventListener("onload", updateWidthAndHeight);
    
    console.log(map2);
    
   
    
  }, []);

  
function loaded()
{

  if(Load=="not_loaded")
  {
      setLoaded("loaded");
      console.log("loaded");
      var geolocate = new mapboxgl.GeolocateControl();
      let map2 = new mapboxgl.Map({
     
          zoom: 13,
          
          container: "map",
          style: "mapbox://styles/mapbox/outdoors-v10",
          center: [
            72.848784,19.128629
          ],
         
          
        
        });
        map2.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          })
        );
    
  
    }
  
}

  return (
    <div className="container"  >
        
       <main className="main" onFocus={loaded} >
        
        <div id="map" style={{position:"absolute", width: "100%", height:"100%"}}  />
        
 
      </main >
      
      <div className="holder" >
      
        
      


      <Button variant="contained" color="secondary" className="showAll">
        Show All Landmarks
      </Button>

      <div className="SingleWrapper">

      <h4 className="Single"> Enter the name of the landmark</h4>

      <div className="emailInputWrapper" >
                <input className="emailInput"
                    name="name"
                    placeholder="Name"
                    // onChange={handleChange}
                />

                <button type="submit" className="emailButton">
                   <SearchIcon className="emailLogo" /> 
                </button>
        

    </div> 
    </div>


    </div>




    
</div>


  );
};

export default Tab2;
