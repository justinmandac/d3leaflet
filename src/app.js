/**
 * @fileoverview Entry point.
*/
import * as d3 from 'd3';
import L from 'leaflet';
import 'mapbox-gl-leaflet/leaflet-mapbox-gl';

// Center to MNL PH
const map = new L.Map('map', {center: [14.5995, 120.9842], zoom: 8});
const gl = (new L.MapboxGL({
  accessToken : 'pk.eyJ1IjoianVzdGlubWFuZGFjIiwiYSI6ImNqNmczc3FyajA1NHgycHBrNzlneW9oMG0ifQ.eF_q_8CkR4-vlGhBAMqhtw',
  style: 'mapbox://styles/mapbox/dark-v9',
}))
.addTo(map);

const svg = d3.select(map.getPanes().overlayPane).append('svg');
const g = svg.append('g').attr('class', 'leaflet-zoom-hide');

function projectPoint(x, y) {
  const point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}

d3.request('data/west-valley-fault.geojson', (err, {response}) => {
  if (!!err) {
    console.error(err);
    return;
  }

  const data = JSON.parse(response);

  L.geoJSON(data.features, {
    style: {
      color: '#F44336',
      weight: 2,
      opacity: 0.85,
    }
  }).addTo(map);
});