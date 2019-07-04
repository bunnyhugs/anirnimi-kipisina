if (screen.width <= 699) {
alert("Mobile version coming soon!");
}

mapboxgl.accessToken = 'pk.eyJ1IjoienJpcGthIiwiYSI6ImNqZjRjcDNtcDBrazMzM244MHo3cXEyZnYifQ.Jpu-mLwgOjU-AzjXOho8wQ'; // replace this with your access token
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/zripka/cjx6jmeca03s21cnnb08jj1cw', // replace this with your style URL
      center: [-98, 51],
      zoom: 4
    });
   
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['tooktoo'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h4>' + feature.properties.location + '</h4><p>' + feature.properties.date + '</p><p> day: ' + feature.properties.day + '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
}); 