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
    center: [149.144,-35.307],
    zoom: 10.5
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
      `<a href = "location-page/${feature.properties.filename}.html">
      <h3>${feature.properties.title}</h3></a>
      <p>${feature.properties.description}</p>
      <a href = "location-page/${feature.properties.filename}.html" style="text-align: center;">
      Click Here</a>`
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

function buttonclicked(button){
    switch(button){
        case 'north':
            console.log("North");
            map.fitBounds([
                [148.962649, -35.267175],
                [149.296011, -35.111423]
            ]);
            map.setFilter('locations-canberra', ['in','area','North']);
            break;
        case 'inner-north':
            console.log("Inner North");
            map.fitBounds([
                [149.076949, -35.303617],
                [149.254140, -35.221187]
            ]);
            map.setFilter('locations-canberra', ['in','area','Inner North']);
            break;
        case 'inner-south':
            console.log("Inner South");
            map.fitBounds([
                [149.053985, -35.346255],
                [149.193944, -35.281044]
            ]);
            map.setFilter('locations-canberra', ['in','area','Inner South']);
            break;
        case 'south':
            console.log("South");
            map.fitBounds([
                [148.984598, -35.459392],
                [149.265964, -35.328773]
            ]);
            map.setFilter('locations-canberra', ['in','area','South']);
            break;
        case 'reset':
            console.log("reset");
            map.fitBounds([
                [148.780120, -35.474503],
                [149.561017, -35.115220]
            ]);
            map.setFilter('locations-canberra', null);
            break;
    }
};






document.getElementById('north-button').addEventListener('click', function(){
    buttonclicked('north');
});
document.getElementById('inner-north-button').addEventListener('click', function(){
    buttonclicked('inner-north');
});
document.getElementById('inner-south-button').addEventListener('click', function(){
    buttonclicked('inner-south');
});
document.getElementById('south-button').addEventListener('click', function(){
    buttonclicked('south');
});
document.getElementById('reset-button').addEventListener('click', function(){
    buttonclicked('reset');
});

function change_image(clicked_id){
    document.getElementById('mainImage').src = clicked_id;

    
};