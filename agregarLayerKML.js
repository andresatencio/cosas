 // https://raw.githubusercontent.com/andresatencio/cosas/master/San%20Nicolas.kml
  // https://github.com/andresatencio/cosas/raw/master/Obra%20alimentador%20Moreno.kmz
  // var map = 'Objeto mapa de google'
  var ctaLayer = new google.maps.KmlLayer({
    url: 'https://github.com/andresatencio/cosas/raw/master/Obra%20alimentador%20Moreno.kmz'
  });

  ctaLayer.setMap(map)
