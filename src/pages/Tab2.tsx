import React, { useEffect, useState } from 'react';
// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import styles from "./Tab2.module.css"
import StartDiv from '../components/StartDiv';
import { addDataLayer } from "../map/addDataLayer";
import { initializeMap } from "../map/initializeMap";
// import { fetcher } from "../utilities/fetcher";

// import { map, resize } from 'ionicons/icons';
import 'mapbox-gl/dist/mapbox-gl.css' // Updating node module will keep css up to date.
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../components/footer';

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
  const [map, setMap] = useState();
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
  const [geoData, setGeoData] = useState([{
    id:null,
    landmark_name:null,
    geometry:{
      type:null,
      coordinates:[]
    }
  }]);
  const [name,setName] = useState("");
  var  marker, markerPopUp;
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWRpYWpnMTY5IiwiYSI6ImNrZ204ang1MDBpcnoycm8xc3I5cDlzMnAifQ.CQlynGnQmIdrW68HSoAynQ";
  
    async function getLandmarksql(name:string){

      const encodedLandmark = encodeURIComponent(name);
      fetch(`http://localhost:5000/getLandmark?landmark_name=${name}`)
      .then((response)=>response.json())
      .then((data) =>{setGeoData(data); setTemp(1);});
  }



  useEffect(() => {
    setPageIsMounted(true);

    const map = new mapboxgl.Map({
   
      zoom: 13,
      
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [
        72.848784,19.128629
      ],
     
      
    
    });
    
    // initializeMap(mapboxgl, map);
    
    setMap(map);
    //window.addEventListener("onload", updateWidthAndHeight);
    
    console.log(map);
    
   
    
  }, []);

  function handleChange(event: { target: { name: string; value: React.SetStateAction<string>; }; })     
      { 
        if(event.target.name=="name"){
          setName(event.target.value);
          console.log(name);
        }
      }
  async function handleSubmit(){
    console.log(name);
    getLandmarksql(name);
    console.log(geoData);
    
    if(temp==1){
      var name_=geoData[0].landmark_name;
    var lat=geoData[0].geometry.coordinates[0];
    var long=geoData[0].geometry.coordinates[1];
    console.log(geoData[0].geometry);
    console.log(name_);
    var markerPopUp = new mapboxgl.Popup({closeOnClick: false})
    .setText(name_)
    .setLngLat([long,lat]);
    console.log(markerPopUp);

    var marker = new mapboxgl.Marker()
    .setLngLat([long,lat])
    .setPopup(markerPopUp)
    .addTo(map);
    console.log(marker);
  }
}

function handleAlldata(){
  fetch(`http://localhost:5000/getAllLandmark`)
  .then((response)=>response.json())
  .then((data) =>{setGeoData(data); setTemp(1);});
  console.log(geoData);
  if(temp==1){
  addDataLayer(map,geoData[0]);
}
}
function loaded()
{

  if(Load=="not_loaded")
  {
      setLoaded("loaded");
      console.log("loaded");
      var geolocate = new mapboxgl.GeolocateControl();
      let map = new mapboxgl.Map({
     
          zoom: 13,
          
          container: "map",
          style: "mapbox://styles/mapbox/outdoors-v10",
          center: [
            72.848784,19.128629
          ],
         
          
        
        });
       
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          })
        );
        setMap(map);
    
  
    }
  
}

  return (
    <div className={styles.container}  >
        
       <main className="main" onFocus={loaded}>
        
        <div id="map" style={{position:"absolute", width: "100%", height:"100%"}}  />
        
 
      </main >
      
      <div className={styles.holder} >
      
        
      


        <Button variant="contained" color="secondary" className={styles.showAll} onClick={handleAlldata} style={{fontSize:"inherit"}}>
          Show All 
        </Button>

        <div className={styles.SingleWrapper}>

        <h4 className="Single"> Enter the name of the landmark</h4>

{/* 
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
 */}

        <div className={styles.emailInputWrapper} >
                  <input className={styles.emailInput}
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                  />

                  <button onClick={handleSubmit} className={styles.emailButton}>
                    <SearchIcon className={styles.emailLogo} style={{fontSize:"inherit"}} /> 
                  </button>
          

          </div> 
        </div>


    </div>




   <Footer /> 
</div>


  );
};

export default Tab2;
