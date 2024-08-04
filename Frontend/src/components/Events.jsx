import axios, { HttpStatusCode } from "axios";
import { URL } from "../constant/url_config";

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  
const Events = ({ events }) => {
    const deleteEvent = async (id) => {
        try {
            const response = await axios.post(URL.LINK + '/api/event/delete', {eventId: id }); 
            if (response.status === HttpStatusCode.Ok) {
                alert('deleted');
                window.location.reload();
            } else {
                alert(response.message)
            }
        } catch (e) {
            alert('Some error occurred try again later');
        }
    }
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        events.map((e, i) => {
            const date = new Date(e.date);
            return (
                <div className="concert-card">
                    <img src={e.imageLink} alt="" />
                    <div className="concert-details">
                        <h3>{e.name}</h3>
                        <p>{e.description}</p>
                        <h4>Venue - {e.venue}</h4>
                        <a href={e.bookingLink}>Book your show now</a>
                        <span>{weekday[date.getDay()]}, {date.getDate() + ' ' + month[date.getMonth()]}, {formatAMPM(date)}</span>
                    
                    </div>
                    {user && e.userId === user._id ? <button onClick={() => deleteEvent(e._id)}>Delete</button> : null}
                </div>
            )
        })
    )
}

export default Events;