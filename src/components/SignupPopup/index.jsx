import React, { useState } from 'react';
import Signup from 'components/Signup';
import "./style.css"

const SignupPopup = (props) => {
  return (
    <div className="popup">
      {/* <div className="popup_inner">
        <h1>{props.text}</h1>
        <button onClick={props.closePopup}>close me</button>
      </div> */}

      <Signup closeSignupPopup={props.closeSignupPopup} />
      
    </div>
  );
};

export default SignupPopup;
