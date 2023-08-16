const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoia2FybC10IiwiYSI6ImNsbGU1cjVrejBpOHkzZGthZnV6cnJhc3AifQ.eOmCNZzS0tSIbcCNekYp4g";

var map = new mapboxgl.Map({
  accessToken: MAPBOX_ACCESS_TOKEN,
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
});

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
  console.log(position);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls);

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  });
  map.addControl(directionControls, "top-left");
}
