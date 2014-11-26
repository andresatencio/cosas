 // https://raw.githubusercontent.com/andresatencio/cosas/master/San%20Nicolas.kml
  // https://github.com/andresatencio/cosas/raw/master/Obra%20alimentador%20Moreno.kmz
  // var map = 'Objeto mapa de google'
  var ctaLayer = new google.maps.KmlLayer({
    url: 'https://github.com/andresatencio/cosas/raw/master/Lincoln%20%2B%20Gral%20Villegas%20%2B%20Gral%20Pinto.kmz'
  });

  ctaLayer.setMap(map)
map.setCenter(new google.maps.LatLng(-34.332321,-60.211002))
map.setCenter()
map.setZoom()

https://github.com/andresatencio/cosas/raw/master/Lincoln%20%2B%20Gral%20Villegas%20%2B%20Gral%20Pinto.kmz

// Descargar consola
(function(console){

console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console)