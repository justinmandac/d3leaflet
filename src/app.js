/**
 * @fileoverview Entry point.
*/
import * as d3 from 'd3';
import L from 'leaflet';
import 'mapbox-gl-leaflet/leaflet-mapbox-gl';

// Center to MNL PH
const map = new L.Map('map', {center: [14.5995, 120.9842], zoom: 5});
const gl = (new L.MapboxGL({
  accessToken : 'pk.eyJ1IjoianVzdGlubWFuZGFjIiwiYSI6ImNqNmczc3FyajA1NHgycHBrNzlneW9oMG0ifQ.eF_q_8CkR4-vlGhBAMqhtw',
  style: 'mapbox://styles/mapbox/dark-v9',
}))
.addTo(map);

const svg = d3.select(map.getPanes().overlayPane).append('svg');
const g = svg.append('g').attr('class', 'leaflet-zoom-hide');