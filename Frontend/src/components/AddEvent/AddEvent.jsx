import { useEffect, useState } from 'react';
import './styles.css'
import axios, { HttpStatusCode } from 'axios';
import { Link } from 'react-router-dom';
import { URL } from '../../constant/url_config';
const AddEevnt = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [venue, setVenue] = useState('');
  const [link, setLink] = useState('');
  const [imageLink, setImageLink] = useState('');


  const saveEvent = async () => {
    if (name.length <= 0 || description.length <= 0 || date.length <= 0 || type.length <= 0 || venue.length <= 0) {
      return alert('fill all the fields')
    }
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    try {
      const path = '/user/add';
      const response = await axios.post(URL.LINK + path, {
        name: name, description: description,
        date: date.toString(),
        type: type,
        imageLink, 
        bookingLink: link,
        venue: venue, 
        userId: user._id
      });
      if (response.status === HttpStatusCode.Ok) {
        alert('event added');
        window.location.href = '/listOfEvents';
      } else {
        alert('error occurred while saving try again later')
      }
    } catch (e) {
      alert('error occurred while saving try again later')
    }
  }

  return (
    <div className="add-events-container">
      <input placeholder="Event name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Event description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Event Venue" value={venue} onChange={(e) => setVenue(e.target.value)} />
      <input placeholder="Event date" type="datetime-local" onChange={(e) => setDate(e.target.value)} />
      <input placeholder="Event booking link" onChange={(e) => setLink(e.target.value)} value={link}  />
      <input placeholder="Event poster image link" onChange={(e) => setImageLink(e.target.value)} value={imageLink}  />

      <select onChange={(e) => setType(e.target.value)}>
        <option disabled selected hidden value="">Event Type</option>
        <option value="dj-party">Dj Party</option>
        <option value="sports">Sports & fitness </option>
        <option value="charity">Charitable and fundraising</option>
        <option value="workshop">Workshops</option>
        <option value="exibhi">Exhibitions, Festivals and Markets</option>
        <option value="social">Social Mixers</option>
      </select>
      <button onClick={saveEvent}>Sumbit</button>
    </div>
  )
}
export default AddEevnt;