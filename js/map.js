function initMap() {
  let opt = {
    center: {
      lat: 59.939,
      lng: 30.3218
    },
    zoom: 17,
    styles: [{
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
          },
          {
            "hue": "#ff0000"
          },
          {
            "saturation": "100"
          },
          {
            "lightness": "-8"
          }
        ]
      }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },

      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#009DE0"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [{
          "color": "#ffffff"
        }]
      }
    ]

  }

  let map = new google.maps.Map(document.querySelector("#map"), opt);

  let marker = new google.maps.Marker({
    position: {

      lat: 59.938714,
      lng: 30.323048
    },
    map: map,
    title: "Студия Nёrd's",
    icon: "img/bubble.svg"
  });
}
