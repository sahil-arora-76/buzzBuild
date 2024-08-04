import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Exhibitions from './assets/Exhibitions';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Meetup from './assets/meetup';
import Parties from './assets/parties';
import Fit from './assets/fitness';
import Charity from './assets/charity';
import CharRegister from './assets/charityreg';
import Workshop from './assets/workshop';
import Contact from './components/Contact/contact.jsx';
import AddEvent from './components/AddEvent/AddEvent.jsx';
import ExploreEvents from './components/ExploreEvents/ExploreEvents.jsx';
const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const Outlay = ({ children }) => {
    return (
      <>
      {showLogin ? <LoginPopup /> : null}
        <Navbar setShowLogin={setShowLogin} />
        {children}
      </>
    )
  }

  return (

      <BrowserRouter>
        <Routes>
        <Route path="/listOfEvents" element={<Outlay children={<ExploreEvents />} />} />
          <Route path="/" element={<Outlay children={<Home />} />} />
          <Route path="/LoginPopup" element={<LoginPopup />} />
          <Route path='/addEvent' element={<Outlay children={<AddEvent />} />} />
          <Route path="/cart" element={<Outlay children={<Cart />} />} />
          <Route path="/order" element={<Outlay children={<PlaceOrder />} />} />
          <Route path="Exhibitions" element={<Outlay children={<Exhibitions />} />} />
          <Route path="meetup" element={<Outlay children={<Meetup />} />} />
          <Route path="parties" element={<Outlay children={<Parties />} />} />
          <Route path="fitness" element={<Outlay children={<Fit />} />} />
          <Route path='charity' element={<Outlay children={<Charity />} />} />
          <Route path='charityreg' element={<Outlay children={<CharRegister />} />} />
          <Route path='/workshop' element={<Outlay children={<Workshop />} />} />
          <Route path='contact' element={<Outlay children={<Contact />} />} />
          {/* <Route path="LoginPopup" element={<LoginPopup />} /> */}
          {/* Add other routes here */}
        </Routes>
      </BrowserRouter>
  );
};

export default App;
