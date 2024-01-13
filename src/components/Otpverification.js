import React from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, updatePhoneNumber } from "firebase/auth";
import app from './firebase_config'
import {toast,Toaster} from "react-hot-toast"
import { useState, useEffect } from 'react'

const auth = getAuth(app);

const Otpverification = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showOTPField, setShowOTPField] = useState(false);
    const [verificationId, setVerificationId] = useState('');
    const [otp, setOTP] = useState('');
    const [user,setUser] = useState(null);
    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };
   
    useEffect(() => {
      // Initialize RecaptchaVerifier when the component mounts
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptchacontainer', {
        size: 'invisible',
        callback: (response) => {
          // Callback logic
          onSignInSubmit();
          // console.log(response)
        },
      });
    }, []);

  //  const onCaptchaverify = () => {
  //   if(!window.recaptchaVerifier){
  //       window.recaptchaVerifier = new RecaptchaVerifier(auth,"recaptchacontainer",{
  //         'size': 'invisible',
  //         'callback': (response) => {
  //           // reCAPTCHA solved, allow signInWithPhoneNumber.
  //           onSignInSubmit();
  //         },
  //       }
  //       );
  //   }
  //   }
    const handleFormSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      verifyCode(); // Call the OTP verification function
    };
    
  
    const onSignInSubmit = (e) => {
      // console.log("onSignInSubmit function is running")
      e.preventDefault()
      // onCaptchaverify();
      // console.log("hello"+phoneNumber);
      const phonenumber = "+91" + phoneNumber;
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phonenumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert("otp sent")
        // console.log("onSignInSubmit function running complited")
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        alert(error)
        // ...
      });
    }
  
    const handlePhoneNumberChange = (e) => {
      const inputPhoneNumber = e.target.value;
      setPhoneNumber(inputPhoneNumber)
      props.updatenumber(inputPhoneNumber)
      // console.log(inputPhoneNumber)
      // console.log(phoneNumber)
      // Check if the entered phone number has 10 digits
      if (inputPhoneNumber.length === 10) {
  
        setShowOTPField(true); // Display OTP field
      } else {
        setShowOTPField(false); // Hide OTP field
      }
    };
    const verifyCode = (e) => {
      e.preventDefault()
      // console.log(otp)
      window.confirmationResult 
        .confirm(otp)
        .then(async (res) => {
          // User signed in successfully.
          alert('Verification Done')
        })
        .catch((error) => {
            alert('Invalid OTP')
        });
    };
  return (
    <div>
      <p className="text-end text-gray-500 mt-4">Phone No.</p>
        <input
            type="number"
            name="Phonenumber"
            placeholder="9123456789"
            className="form-input mt-2 rounded-lg"
            required
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
        />
        <div id='recaptchacontainer'></div>
        <button onClick={onSignInSubmit} className='flex text-gray-500 '>Send OTP</button>
        {/* OTP field (conditionally rendered) */}
        {showOTPField && (
            <div className='flex flex-col'>
            <p className="text-end text-gray-500 mt-4">OTP</p>
            <input
                type="number"
                name="otp"
                className=" mt-2 rounded-lg"
                required
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
            />
            <button onClick={verifyCode} className='flex text-gray-500 '>Verify OTP</button>
            </div>
        )}
    </div>
  )
}

export default Otpverification
