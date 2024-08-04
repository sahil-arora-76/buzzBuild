import React, { useEffect, useState } from 'react';
import './Exhibitions.css'; // Ensure you have the necessary styles

// Importing images
import mirror from './mirror.png';
import shop from './souk.png';
import jewell from './jewell.png';
import axios from 'axios';
import { URL } from '../constant/url_config';
import Events from '../components/Events';

const Exhibitions = () => {
  // useEffect(() => {
  //   console.log('Rendering Exhibitions component');
  // }, []); // UseEffect with an empty dependency array to log once on mount
  const [events, setEvents] = useState([])

  const saveEvent = async () => {
    try {
      const type = 'exibhi'
      const path = '/user/list';
      const response = await axios.get(URL.LINK + path);
      const filteredPaths = response.data.data.filter(e => e.type == type)
      setEvents(filteredPaths);
    } catch (e) {
      alert('error occurred while saving try again later')
    }
  }

  useEffect(() => [
    saveEvent()
  ], [])
  return (
    <div className="container">
      <h1>Exhibitions</h1>
      <div className="concert-grid">
        {/* Food Exhibition */}
        {/* <div className="concert-card promoted">
          <img src={mirror} alt="" />
          <div className="concert-details">
            <h3>Infinity Mirrored Room</h3>
            <p>Immerse yourself in a world of artistic expression at our gallery. Discover captivating works that ignite your imagination and inspire conversation.</p>
            <h4>Venue - Infinity Room-Neeta Mukesh Ambani Center</h4>
            <p><a href="https://in.bookmyshow.com/events/infinity-mirrored-room/ET00364831?data=similarEvent&">Click here</a></p>
            <span>Thu, 18 Jul</span>
          </div>
        </div>
        
        <div className="concert-card promoted">
          <img src={shop} alt="" />
          <div className="concert-details">
            <h3>Conscious Souk Edition 22 - Curated Exhibition</h3>
            <p>A night of elegance and sparkle, showcasing exquisite jewellery pieces and stunning designs.</p>
            <h4>Venue - Love OORU-Bengaluru</h4>
            <p><a href="https://in.bookmyshow.com/events/conscious-souk-edition-22-curated-exhibition/ET00402090">Click here</a></p>
            <span>Sat, 27 Jul</span>
          </div>
        </div>
        
        <div className="concert-card">
          <img src={jewell} alt="" />
          <div className="concert-details">
            <h3>Jewellery World Exhibition</h3>
            <p>A night of elegance and sparkle, showcasing exquisite jewellery pieces and stunning designs.</p>
            <h4>Venue - The saint Regis- Mumbai</h4>
            <p><a href="https://in.bookmyshow.com/events/jewellery-world-exhibition/ET00392729">Click here</a></p>
            <span>Fri, 26 July</span>
          </div>
        </div> */}
  <Events events={events} />
      </div>
    </div>
  );
};

export default Exhibitions;
