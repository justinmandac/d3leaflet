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

d3.json('https://bost.ocks.org/mike/leaflet/us-states.json',
(err, collection) => {
  console.log(collection);
});