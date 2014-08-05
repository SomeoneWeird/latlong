latlong
=======

Crazy simple module for adding distance to latlongs

API
---

### new LatLong(latitude, longitude)
#### LatLong.move(north, east)
#### LatLong.moveNorth(meters)
#### LatLong.moveSouth(meters)
#### LatLong.moveEast(meters)
#### LatLong.moveWest(meters)

Example
-------

```js
var LatLong = require('simple-latlong');
var location = new LatLong(0, 0);
location.moveNorth(50);
location.move(50, 0);
console.log(location.lat); // 0.0008983152841195215
```
