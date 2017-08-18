/**
 * @fileoverview Layer Class for the West Valley Fault.
 */
export default class WestValleyLayer {
  constructor(leaflet, map, d3, dataUrl = 'data/west-valley-fault.geojson') {
    console.log(arguments);
    this.data = {};
    this.feature = {};

    this.path_ = () => {};
    this.d3_ = d3;
    this.map_ = map;
    this.dataUrl_ = dataUrl;
    this.leaflet_ = leaflet;

    this.svg_ =
      d3.select(this.map_.getPanes().overlayPane)
        .append('svg');
    this.g_ =
      this.svg_.append('g').attr('class', 'leaflet-zoom-hide wvf-layer');
    console.log(this.g_);

    this.map_.on('zoomend', () => this.reset());
    this.isHidden_ = false;
  }

  get isHidden() { return this.isHidden_; }

  toggle() {
    this.isHidden_ = !this.isHidden_;
    document.querySelector('.wvf-layer')
      .classList.toggle('-hidden', this.isHidden_);
  }

  /** Loads WVF coordinates. */
  load() {
    return new Promise((resolve, reject) => {
      this.d3_.request(this.dataUrl_, (err, {response}) => {
        if (!!err) {
          reject(err);
          return;
        }

        this.data = JSON.parse(response);
        const map_ = this.map_;
        const L_ = this.leaflet_;
        const transform = this.d3_.geoTransform({
          point(x, y) {
            const point = map_.latLngToLayerPoint(new L_.LatLng(y, x));
            this.stream.point(point.x, point.y);
          },
        });
        this.path_ = this.d3_.geoPath(transform);
        this.feature =
        this.g_.selectAll('path')
          .data(this.data.features)
          .enter()
          .append('path')
          .attr("d", this.path_) //fill="orange" stroke="black" stroke-width="3"
          .attr("stroke-width", '2')
          .attr("stroke", 'orange');

        this.reset();
        resolve();
      });
    });
  }

  reset() {
    const bounds = this.path_.bounds(this.data);
    const topLeft = bounds[0];
    const bottomRight = bounds[1];

    this.svg_.attr("width", bottomRight[0] - topLeft[0])
      .attr("height", bottomRight[1] - topLeft[1])
      .style("left", topLeft[0] + "px")
      .style("top", topLeft[1] + "px");

    this.g_.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
    this.feature.attr('d', this.path_);
  }
}