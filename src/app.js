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

console.log(map);

const svg = d3.select(map.getPanes().overlayPane).append('svg');
const g = svg.append('g').attr('class', 'leaflet-zoom-hide');

function projectPoint(x, y) {
  const point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}
let path;
let data;
let feature;

function reset() {
  const bounds = path.bounds(data);
  const topLeft = bounds[0];
  const bottomRight = bounds[1];

  svg.attr("width", bottomRight[0] - topLeft[0])
  .attr("height", bottomRight[1] - topLeft[1])
  .style("left", topLeft[0] + "px")
  .style("top", topLeft[1] + "px");

  g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
  feature.attr('d', path);
}

map.on("zoomend ", reset);

d3.request('data/west-valley-fault.geojson', (err, {response}) => {
  if (!!err) {
    console.error(err);
    return;
  }

  data = JSON.parse(response);
  const transform = d3.geoTransform({
    point(x, y) {
      const point = map.latLngToLayerPoint(new L.LatLng(y, x));
      this.stream.point(point.x, point.y);
    },
  });

  path = d3.geoPath(transform);

  console.log(path);
  feature =
    g.selectAll('path')
      .data(data.features)
      .enter()
      .append('path')
      .attr("d", path) //fill="orange" stroke="black" stroke-width="3"
      .attr("stroke-width", '2')
      .attr("stroke", 'orange');

  reset();

});