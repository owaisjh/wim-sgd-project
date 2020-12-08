export function addDataLayer(map, data) {
  map.loadImage(
    'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
    function (error, image) {
    if (error) throw error;
    map.addImage('custom-marker', image);
    // Add a GeoJSON source with 2 points
  
  if (!map.getSource("postgredb")) {
    map.addSource("postgresdb", {
      type: "geojson",
      data: data.data,
      cluster: false,
    });
  } else {
    map.getSource("postgresdb").setData(data);
  }

  map.addLayer({
    'id': 'points',
    'type': 'symbol',
    'source': 'postgresdb',
    'layout': {
    'icon-image': 'custom-marker',
    // get the title name from the source's "title" property
    'text-field': ['get', 'f2'],
    'text-font': [
    'Open Sans Semibold',
    'Arial Unicode MS Bold'
    ],
    'text-offset': [0, 1.25],
    'text-anchor': 'top'
    }
    });

  }
  );
}
//   map.addLayer({
//     id: "schools",
//     type: "circle",
//     source: "postgresdb",
//     filter: ["has", "point_count"],
//     paint: {
//       "circle-color": "rgb(229, 36, 59)",
//       "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
//       "circle-opacity": 0.75,
//       "circle-stroke-width": 4,
//       "circle-stroke-color": "#fff",
//       "circle-stroke-opacity": 0.5,
//     },
//   });

//   map.addLayer({
//     id: "cluster-count",
//     type: "symbol",
//     source: "dcmusic.live",
//     filter: ["has", "point_count"],
//     layout: {
//       "text-field": "{sum}",
//       "text-font": ["Open Sans Bold"],
//       "text-size": 16,
//     },
//     paint: {
//       "text-color": "white",
//     },
//   });

//   map.addLayer({
//     id: "unclustered-point",
//     type: "circle",
//     source: "dcmusic.live",
//     filter: ["!", ["has", "point_count"]],
//     paint: {
//       "circle-radius": ["step", ["get", "event_count"], 20, 100, 30, 750, 40],
//       "circle-color": "rgb(229, 36, 59)",
//       "circle-opacity": 0.75,
//       "circle-stroke-width": 4,
//       "circle-stroke-color": "#fff",
//       "circle-stroke-opacity": 0.5,
//     },
//   });

//   map.addLayer({
//     id: "event-count",
//     type: "symbol",
//     source: "dcmusic.live",
//     filter: ["!", ["has", "point_count"]],
//     layout: {
//       "text-field": "{event_count}",
//       "text-font": ["Open Sans Bold"],
//       "text-size": 16,
//     },
//     paint: {
//       "text-color": "white",
//     },
//   });
// }
