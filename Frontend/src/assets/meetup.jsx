import React, { useEffect, useState } from 'react';
import './Exhibitions.css'; // Ensure you have the necessary styles

// Importing images
import coffee from './coffee.png';
import book from './books.png';
import poets from './poet.png';
import board from './board.png';
import axios from 'axios';
import { URL } from '../constant/url_config';
import Events from '../components/Events';
const Meetup = () => {
  // useEffect(() => {
  //   console.log('Rendering Exhibitions component');
  // }, []); // UseEffect with an empty dependency array to log once on mount
  const [events, setEvents] = useState([])

  const saveEvent = async () => {
    try {
      const type = 'social'
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
      <h1>Meetups</h1>
      <div className="concert-grid">
        {/* Food Exhibition */}
        {/* <div className="concert-card promoted">
          <img src={coffee} alt="" />
          <div className="concert-details">
            <h3>Coffee Meetup: Meet, Greet and Connec</h3>
            <p>Join us for a coffee meetup, where coffee lovers gather to enjoy great brews, lively conversation, and a relaxed atmosphere. It's a perfect chance to meet new people, share your favorite coffee tips, and unwind with a cup of your favorite blend.</p>
            <h4>Venue - Board in the City- Banglore</h4>
            <p><a href="https://in.bookmyshow.com/events/coffee-meetup-meet-greet-and-connect/ET00378575">Click here to book your meet</a></p>
            <span>Sat, 6 Jul</span>
          </div>
        </div>
        
        <div className="concert-card promoted">
          <img src={book} alt="" />
          <div className="concert-details">
            <h3>Bangalore Reads Books</h3>
            <p>Join our book lovers' meetup to connect with fellow readers and share favorite reads. Discover new books and enjoy lively discussions in a welcoming atmosphere!</p>
            <h4>Venue -The Nexus Mall, Koramangala-Banglore</h4>
            <p><a href="https://in.bookmyshow.com/events/bangalore-reads-books/ET00385479">Click here to book your meet</a></p>
            <span>Sun, 7 Jul</span>
          </div>
        </div>
        
        <div className="concert-card">
          <img src={poets} alt="" />
          <div className="concert-details">
            <h3>Poetic seasoning</h3>
            <p>Join us for a poets meetup, where poetry enthusiasts share their work, discuss poetic techniques, and offer feedback in a supportive community. Whether you're a poet or a poetry lover, come connect, be inspired, and celebrate the beauty of poetry together.</p>
            <h4>Venue - SmallWorld, Koramangala 5th Block- Banglore</h4>
            <p><a href="https://in.bookmyshow.com/events/poet-s-meet/ET00353515">Click here to meet your fellow poets</a></p>
            <span>Sat, 2 Jul</span>
          </div>
        </div>
        <div className="concert-card promoted">
          <img src={board} alt="" />
          <div className="concert-details">
            <h3>Board Games Night</h3>
            <p>Join us for a comedy night filled with laughter, hilarious performances, and good vibes. Enjoy stand-up acts from talented comedians and have a great time with friends in a fun and relaxed atmosphere.</p>
            <h4>Venue - SmallWorld: Koramangala 5th Block</h4>
            <p><a href="https://in.bookmyshow.com/events/board-games-night/ET00356671">Click here for the board games night</a></p>
            <span>Thu 4 July-Thu 5 Sept</span>
          </div>
        </div> */}
        <Events events={events} />
      </div>
    </div>
  );
};

export default Meetup;
