/**
 * @fileoverview Entry point.
*/
import * as d3 from 'd3';
import L from 'leaflet';
import 'mapbox-gl-leaflet/leaflet-mapbox-gl';
import WestValleyLayer from './west-valley.layer';
import getEvents from './api.js';

const lat = 12.8797; // PH Latitude
const lng = 121.7740; // PH Longitude
const radius = 942; // Approx radius of PH around coords. Used the sqrt of PH area as radius
// plus a ~200km fudge factor

// Center to middle PH
const map = new L.Map('map', {center: [lat, lng], zoom: 7});
const gl = (new L.MapboxGL({
  accessToken : 'pk.eyJ1IjoianVzdGlubWFuZGFjIiwiYSI6ImNqNmczc3FyajA1NHgycHBrNzlneW9oMG0ifQ.eF_q_8CkR4-vlGhBAMqhtw',
  style: 'mapbox://styles/mapbox/dark-v9',
}))
.addTo(map);
const westValleyLayer = new WestValleyLayer(L, map, d3);

westValleyLayer.load();
getEvents(lat, lng, radius, '2017-08-01').then((data) => {
  console.log(data);
  var geojsonMarkerOptions = {
    radius: 5,
    fillColor: "#ff7800",
    opacity: 1,
    fillOpacity: 0.8
};

  L.geoJSON(data.features, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
    }
  }).addTo(map);
});
