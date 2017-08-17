/**
 * @fileoverview Entry point.
*/
const leaflet = require('leaflet');
const map = new L.Map('map', {center: [37.8, -96.9], zoom: 4});
const tileLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(tileLayer)
   .setView([14.5995, 120.9842], 5); // center to MNL, PH