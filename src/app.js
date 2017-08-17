/**
 * @fileoverview Entry point.
*/
const d3 = require('d3');
const URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// Center to MNL PH
console.log(L);
const map = new L.Map('map', {center: [14.5995, 120.9842], zoom: 5});
const gl = L.MapboxGL({
  accessToken : 'pk.eyJ1IjoianVzdGlubWFuZGFjIiwiYSI6ImNqNmczc3FyajA1NHgycHBrNzlneW9oMG0ifQ.eF_q_8CkR4-vlGhBAMqhtw',
  style: 'mapbox://styles/mapbox/dark-v9',
}).addTo(map);

const svg = d3.select(map.getPanes().overlayPane).append('svg');
const g = svg.append('g').attr('class', 'leaflet-zoom-hide');

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGlubWFuZGFjIiwiYSI6ImNqNmczc3FyajA1NHgycHBrNzlneW9oMG0ifQ.eF_q_8CkR4-vlGhBAMqhtw';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/dark-v9'
// });