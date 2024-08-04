import React from 'react';
import './ExploreEvents.css';
import { event_list } from '../../assets/Assets';

const ExploreEvents = () => {
  return (
    <div className='explore-events' id='explore-events'>
      <h1>Explore our Events</h1>
      <p className='explore-event-text'>Choose from a diverse list of events!</p>
      <div className='explore-event-list'>
        {event_list.map((event, index) => (
          <div className='event' onClick={() => window.location.href = event.url}>
            <img src={event.event_image} alt='' />
            <p>{event.event_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreEvents;
