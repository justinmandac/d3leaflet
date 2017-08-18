/**
 * @fileoverview Entry point.
*/
import * as d3 from 'd3';
import L from 'leaflet';
import 'mapbox-gl-leaflet/leaflet-mapbox-gl';
import WestValleyLayer from './west-valley.layer';

// Center to MNL PH
const map = new L.Map('map', {center: [14.5995, 120.9842], zoom: 8});
const gl = (new L.MapboxGL({
  accessToken : 'pk.eyJ1IjoianVzdGlubWFuZGFjIiwiYSI6ImNqNmczc3FyajA1NHgycHBrNzlneW9oMG0ifQ.eF_q_8CkR4-vlGhBAMqhtw',
  style: 'mapbox://styles/mapbox/dark-v9',
}))
.addTo(map);
const westValleyLayer = new WestValleyLayer(L, map, d3);

westValleyLayer.load();
