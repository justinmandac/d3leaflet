/**
 * @fileoverview Entry point.
*/
const d3 = require('d3');
const leaflet = require('leaflet');
const URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const map = new L.Map('map', {center: [37.8, -96.9], zoom: 4});
const tileLayer = new L.TileLayer(URL);

map.addLayer(tileLayer)
   .setView([14.5995, 120.9842], 5); // center to MNL, PH

const svg = d3.select(map.getPanes().overlayPane).append('svg');
const g = svg.append('g').attr('class', 'leaflet-zoom-hide');

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGlubWFuZGFjIiwiYSI6ImNqNmczc3FyajA1NHgycHBrNzlneW9oMG0ifQ.eF_q_8CkR4-vlGhBAMqhtw';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/dark-v9'
// });