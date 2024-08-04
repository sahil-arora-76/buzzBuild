import React, { useEffect } from "react";
import star from './public/star.svg';
// import icon from './public/icon.svg';  // Import the icon directly

const CharRegister = () => {
  useEffect(() => {
    const ellipse = document.getElementById("ellipse");
    const handleEllipseClick = (e) => {
      // Please sync "Desktop - 4" to the project
      console.log("Ellipse clicked");
    };

    if (ellipse) {
      ellipse.addEventListener("click", handleEllipseClick);
    }

    return () => {
      if (ellipse) {
        ellipse.removeEventListener("click", handleEllipseClick);
      }
    };
  }, []);

  return (
    <div className="root">
      <main className="desktop-5">
        <div className="sign-in">Sign in</div>
        <div className="content">
          <div className="container-parent">
            <header className="container">
              <div className="elements">
                <div className="elements-child" id="ellipse"></div>
                <h2 className="h2">&lt;</h2>
                <img alt="" src={star} />
              </div>
            </header>
            <div className="registration">
              <div className="input-fields">
                <h3 className="event-registration">Event Registration</h3>
                <div className="name-of-event-container">
                  <p className="blank-line">&nbsp;</p>
                  <p className="name-of-event">Name of Event</p>
                </div>
                <div className="input">
                  <div className="title">Email address</div>
                  <div className="input-field">
                    <input className="text" placeholder="enter email" type="email" />
                    {/* <img className="icon" alt="" src={icon} /> */}
                  </div>
                </div>
                <div className="description-input-parent">
                  <div className="description-input">
                    <div className="description">Description</div>
                    <input className="text" placeholder="enter description" type="text" />
                  </div>
                  <div className="input1">
                    <div className="title1">Password</div>
                    <div className="input-field1">
                      <input className="password" placeholder="enter password" type="password" />
                      {/* <img className="icon1" alt="" src={icon} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="button-primary-parent">
          <div className="button-primary">
            <div className="button">Sign in</div>
          </div>
          <div className="register">Register</div>
        </button>
      </main>
    </div>
  );
};

export default CharRegister;
