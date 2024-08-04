import React, { useEffect, useState } from 'react';
import './Exhibitions.css'; // Ensure you have the necessary styles
// Importing images
import cricket from './cric-1@2x.png';
import yoga from './yoga.png';
import foot from './footb-1@2x.png';
import axios from 'axios';
import { URL } from '../constant/url_config';
import Events from '../components/Events';
//import yoga from './yoga-1@2x-copy.png';
const Fitness= () => {
  // useEffect(() => {
  //   console.log('Rendering Exhibitions component');
  // }, []); // UseEffect with an empty dependency array to log once on mount
  const [events, setEvents] = useState([])
  
  const saveEvent = async () => {
    try {
      const type = 'sports'
      const path = '/user/list';
      const response = await axios.get(URL.LINK + path);
      console.log(response.data.data);
      const filteredPaths = response.data.data.filter(e => e.type == type)
      setEvents(filteredPaths);
    } catch (e) {
      console.log(e);
      alert('error occurred while saving try again later')
    }
  }

  useEffect(() => [
    saveEvent()
  ], [])
  
  return (
    <div className="container">
    <h1>Sports and fitness</h1>
    <div className="concert-grid">
      {/* Food Exhibition */}
      {/* <div className="concert-card promoted">
        <img src={cricket} alt="" />
        <div className="concert-details">
          <h3>Tribute to Linkin Park ft. Anthracite</h3>
          <p>Experience an electrifying night of cosmic music, dazzling lights, and unforgettable performances here</p>
          <h4>Hard Rock Cafe-Banglore</h4>
          <p><a href="https://in.bookmyshow.com/events/tribute-to-linkin-park-ft-anthracite/ET00401217">Book your show here</a></p>
          <span>Sat, 27 July</span>
        </div>
      </div>

      <div className="concert-card promoted">
        <img src={yoga} alt="" />
        <div className="concert-details">
          <h3>Lets Jam Bollywood Night</h3>
          <p>A night of electrifying music and vibrant energy, where your relationship status shines in black or white!"</p>
          <h4>Venue - Radio Bar- Banglore</h4>
          <p><a href="https://in.bookmyshow.com/events/lets-jam-bollywood-night/ET00402955">Book your show now</a></p>
          <span>Sat, 6 July</span>
        </div>
      </div>

      <div className="concert-card">
        <img src={foot} alt="" />
        <div className="concert-details">
          <h3>Alan Walker</h3>
          <p>Get ready to be electrified at the Alan Walker World Tour in Bengaluru, featuring heart-pounding beats, stunning visuals, and an unforgettable night of music and dance!</p>
          <h4>Venue - Sunbrun</h4>
          <p><a href="https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00394914">Book your show now</a></p>
          <span>Sat, 9 Aug</span>
        </div>
      </div> */}
      <Events events={events} />
    </div>
  </div>

           
  );
};

export default Fitness;