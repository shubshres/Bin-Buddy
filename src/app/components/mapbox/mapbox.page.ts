import { Component, OnInit } from '@angular/core';
import { WSAEINVALIDPROCTABLE } from 'constants';
import * as mapboxgl from 'mapbox-gl';
import { MapboxService } from 'src/app/services/mapbox.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.page.html',
  styleUrls: ['./mapbox.page.scss'],
})


export class MapboxPage implements OnInit{
  
  waypoints1 = 
    [
      [-97.12620951310845,32.72879004802739],
      [-97.1491449191207,32.71408139805665],
      [-97.14019596225292,32.714280853602745],
      [-97.14025522686795,32.71572689297342],
      [-97.1428036053135,32.71577675598232],
      [-97.1392477284125,32.71667428536692],
      [-97.13581038074105,32.718868208063896],
      [-97.13598817458612,32.715527440660836],
      [-97.13948478687261,32.715677029937524],
      [-97.13930699302753,32.71358275724016],
      [-97.13841802380215,32.71582661896247],
      [-97.13752905457679,32.71403153410003],
      [-97.13172112230481,32.713981670116326],
      [-97.1318989161499,32.72146095621552],
      [-97.1299284881859,32.7242396192148],
      [-97.13032080692138,32.72595272331775],
      [-97.12628326136117,32.72608226895272],
      [-97.12624589767239,32.72872258128956]
    ];
    waypoints2 = 
    [
      [-97.11445257421775,32.735713721672354],
      [-97.09730625855468,32.73556082720016],
      [-97.09742743393011,32.72093271004201],
      [-97.08028111826756,32.72088173679681],
      [-97.08028111826756,32.72332841970608],
      [-97.09760919699376,32.72353230691769],
      [-97.10288032583735,32.72307356003503],
      [-97.1058491225421,32.73770132593444],
      [-97.08011616738115,32.73537671261876],
      [-97.07484509440454,32.73137358780545],
      [-97.07720801423109,32.72953874749534],
      [-97.07569332203462,32.72816259247844],
      [-97.0766021373524,32.72520633579866],
      [-97.08672028122402,32.72632768607838],
      [-97.1148935560765,32.72714320469609],
      [-97.11453002994968,32.73580762929825],

    ];
        
    nextRoute = true;
    selectedRoute;

    ngOnInit() {

          let nextRoute = this.nextRoute;
          mapboxgl.accessToken = 'pk.eyJ1Ijoibmljay1ob2JieSIsImEiOiJjbDFwb2hxYXYxZ2p0M2VqeGoxYWtwcnl1In0.ulM1bufKeHUXZcL7VgYfSg';
          const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: nextRoute ?         
            
             [-97.1081, 32.7357]:[-97.12620951310845,32.72879004802739], // starting position
            zoom: 12
          });
 
    async function getRoute() {
      // make a directions request using cycling profile
      // an arbitrary start will always be the same
      // only the end or destination will change
      const query = await fetch(
        // `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,

        nextRoute ?         
        `https://api.mapbox.com/directions/v5/mapbox/driving/-97.12620951310845%2C32.72879004802739%3B-97.1491449191207%2C32.71408139805665%3B-97.14019596225292%2C32.714280853602745%3B-97.14025522686795%2C32.71572689297342%3B-97.1428036053135%2C32.71577675598232%3B-97.1392477284125%2C32.71667428536692%3B-97.13581038074105%2C32.718868208063896%3B-97.13598817458612%2C32.715527440660836%3B-97.13948478687261%2C32.715677029937524%3B-97.13930699302753%2C32.71358275724016%3B-97.13841802380215%2C32.71582661896247%3B-97.13752905457679%2C32.71403153410003%3B-97.13172112230481%2C32.713981670116326%3B-97.1318989161499%2C32.72146095621552%3B-97.1299284881859%2C32.7242396192148%3B-97.13032080692138%2C32.72595272331775%3B-97.12628326136117%2C32.72608226895272%3B-97.12624589767239%2C32.72872258128956?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1Ijoibmljay1ob2JieSIsImEiOiJjbDFwb2hxYXYxZ2p0M2VqeGoxYWtwcnl1In0.ulM1bufKeHUXZcL7VgYfSg`
        :`https://api.mapbox.com/directions/v5/mapbox/driving/-97.11445257421775%2C32.735713721672354%3B-97.09730625855468%2C32.73556082720016%3B-97.09742743393011%2C32.72093271004201%3B-97.08028111826756%2C32.72088173679681%3B-97.08028111826756%2C32.72332841970608%3B-97.09760919699376%2C32.72353230691769%3B-97.10288032583735%2C32.72307356003503%3B-97.1058491225421%2C32.73770132593444%3B-97.08011616738115%2C32.73537671261876%3B-97.07484509440454%2C32.73137358780545%3B-97.07720801423109%2C32.72953874749534%3B-97.07569332203462%2C32.72816259247844%3B-97.0766021373524%2C32.72520633579866%3B-97.08672028122402%2C32.72632768607838%3B-97.1148935560765%2C32.72714320469609%3B-97.11453002994968%2C32.73580762929825?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1Ijoibmljay1ob2JieSIsImEiOiJjbDFwb2hxYXYxZ2p0M2VqeGoxYWtwcnl1In0.ulM1bufKeHUXZcL7VgYfSg`,
        { method: 'GET' }
      );
      const json = await query.json();
      const data = json.routes[0];
      const route = data.geometry.coordinates;
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };
      // if the route already exists on the map, we'll reset it using setData
      if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
      }
      // otherwise, we'll make a new request
      else {
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });
      }

      const instructions = document.getElementById('instructions');
      let tripInstructions = '';
      
      for(let i = 0; i < data.legs.length; i++){
        const steps = data.legs[i].steps;
        for (const step of steps) {
          tripInstructions += `<li>${step.maneuver.instruction}</li>`;
        }
      }
      instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
        data.duration / 60
      )} min 🚛 </strong></p><ol>${tripInstructions}</ol>`;
    }

  map.on('load', () => {
  // make an initial directions request that
  // starts and ends at the same location
  
  getRoute();

  
  
  
  
  
});

}
nextR(){
  this.nextRoute = !this.nextRoute;
  this.ngOnInit();
}


}
