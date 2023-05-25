mapboxgl.accessToken = 'pk.eyJ1Ijoia3lsZXJvYmVydHNvbi05OCIsImEiOiJjbGh6MGJieWYxMjBmM2ZzMm5pMGlibXBvIn0.zHzTfEYYu3iOm2Nc88oUNA';
// This GeoJSON contains features that include an "icon"
// property. The value of the "icon" property corresponds
// to an image in the Mapbox Light style's sprite. (Note:
// the name of images is the value of the "icon" property
// + "-15".)


// const filterGroup = document.getElementById('filter-group');
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/kylerobertson-98/clhsf0kv900oy01pofrom3xhz',
    center: [149.110159, -35.250093],
    zoom: 11.15
});

// map.on('load', () => {
//     map.setFilter('locations-canberra', null)
//     // map.setFilter('locations-canberra', ['==',['get','type'],'cafe'] )
// });

map.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['locations-canberra'] // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
      
      
      /* 
      Create a popup, specify its options 
      and properties, and add it to the map.
    */
    const popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
      `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(map);
    
    });

const array1 = ['cafe','Bar & Restaurants','Retail','Attractions','National Parks']
var cafetracker = 0;
var bartracker = 0;
var parktracker = 0;
var attracttracker = 0;
var retailtracker = 0;



document.getElementById('cafe-button').addEventListener('click', function(){
    // map.setFilter('locations-canberra', ['in','type',...array1])
    if (cafetracker == 0){
        map.setFilter('locations-canberra', ['in','type','cafe'])
        cafetracker = 1;
        console.log(cafetracker)
    } else {
        map.setFilter('locations-canberra', null)
        cafetracker = 0;
    }
});

document.getElementById('restaurants-button').addEventListener('click', function(){
    // map.setFilter('locations-canberra', ['in','type',...array1])
    if (bartracker == 0){
        map.setFilter('locations-canberra', ['in','type','Bar & Restaurants'])
        bartracker = 1;
        console.log(bartracker)
    } else {
        map.setFilter('locations-canberra', null)
        bartracker = 0;
    }
});
document.getElementById('parks-button').addEventListener('click', function(){
    // map.setFilter('locations-canberra', ['in','type',...array1])
    if (parktracker == 0){
        map.setFilter('locations-canberra', ['in','type','National Park'])
        parktracker = 1;
        console.log(parktracker)
    } else {
        map.setFilter('locations-canberra', null)
        parktracker = 0;
    }
});
document.getElementById('attractions-button').addEventListener('click', function(){
    // map.setFilter('locations-canberra', ['in','type',...array1])
    if (attracttracker == 0){
        map.setFilter('locations-canberra', ['in','type','Attractions'])
        attracttracker = 1;
        console.log(attracttracker)
    } else {
        map.setFilter('locations-canberra', null)
        attracttracker = 0;
    }
});
document.getElementById('retail-button').addEventListener('click', function(){
    // map.setFilter('locations-canberra', ['in','type',...array1])
    if (retailtracker == 0){
        map.setFilter('locations-canberra', ['in','type','Retail'])
        retailtracker = 1;
        console.log(retailtracker)
    } else {
        map.setFilter('locations-canberra', null)
        retailtracker = 0;
    }
});