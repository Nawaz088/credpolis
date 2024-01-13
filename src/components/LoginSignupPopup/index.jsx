import React, { useState } from 'react';
import Login from 'components/Login';

import "./style.css"
const LoginSignupPopup = (props) => {
  return (
    <div className="popup">
      {/* <div className="popup_inner">
        <h1>{props.text}</h1>
        <button onClick={props.closePopup}>close me</button>
      </div> */}

      <Login closePopup={props.closePopup} toggleSignupPopup={props.toggleSignupPopup}  />
      
    </div>
  );
};

export default LoginSignupPopup;