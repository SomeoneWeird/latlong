var R = 6378137;

var LatLong = module.exports = function LatLong(lat, long) {
    this.lat  = lat  || 0;
    this.long = long || 0;
}

LatLong.prototype.move = function(mNorth, nEast) {
    var _lat  = mNorth / R;
    var _lon  = nEast / (R * Math.cos(Math.PI * this.lat / 180));
    this.lat  = this.lat + _lat * 180 / Math.PI;
    this.long = this.long + _lon * 180 / Math.PI; 
}

LatLong.prototype.moveNorth = function(m) {
    this.move(m,0);
}

LatLong.prototype.moveSouth = function(m) {
    this.move(-(m),0);
}

LatLong.prototype.moveEast = function(m) {
    this.move(0,m);
}

LatLong.prototype.moveWest = function(m) {
    this.move(0,-(m));
}

