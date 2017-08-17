/**
 * @fileoverview Entry point.
*/
const leaflet = require('leaflet');
const mapContainer = document.getElementById('map');

const map = new L.Map('map', {center: [37.8, -96.9], zoom: 4})
.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));