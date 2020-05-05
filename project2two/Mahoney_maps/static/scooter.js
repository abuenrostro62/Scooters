var newtry = ("short.json");
var map;


startLocation = L.layerGroup(d3.json(newtry, function(response) {

    console.log(response);
  
    for (var i = 0; i < response.length; i++) {
      var startLat = response[i]["Start Lat"];

      var startLong = response[i]["Start Long"];

      var location = [startLat, startLong];  

      console.log(location);
  
      if (location) {
        L.marker([location[0], location[1]]).addTo(map);
      }
    }
  
  }));



endLocation = L.layerGroup(d3.json(newtry, function(response) {
  
    console.log(response);
  
    for (var i = 0; i < response.length; i++) {
      var endLat = response[i]["End Lat"];

      var endLong = response[i]["End Long"];

      var location2 = [endLat, endLong];  

      console.log(location2);
  
      if (location2) {
        L.marker([location2[0], location2[1]]).addTo(map);
      }
    }
  
  }));



//  createMap(startLocation, endLocation);


  
  



  // function createMap (startLocation, endLocation) {

    var streetLayer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken: API_KEY
    });

    var grayScale = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.light",
      accessToken: API_KEY
    });



    var map = L.map('map', {
      center: [41.8781, -87.6298],
      zoom: 13,
      layers: [streetLayer, startLocation, endLocation]
    });

    var baseMaps = {
      "Streets": streetLayer,
      "Light": grayScale
    };
    
    var overlayMaps = {
      "Start Location": startLocation,
      "End Location": endLocation
    };

  L.control.layers(baseMaps, overlayMaps,
      {collapsed: false}).addTo(map);

  // }




  



