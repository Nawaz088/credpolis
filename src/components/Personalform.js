import { Button } from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Text, Img } from 'components';
import { faCheck, faQuestion } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useState, useEffect } from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import app from './firebase_config'
import {toast,Toaster} from "react-hot-toast"
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase_config'
const auth = getAuth(app);

const Personalform = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOTPField, setShowOTPField] = useState(false);
  const [verificationId, setVerificationId] = useState('');
  const [otp, setOTP] = useState('');
  //database names
  const [firstname, setFirstname] = useState('')
  const [middlename, setMiddlename] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [pincode, setPincode] = useState('')
  const [salary, setSalary] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [loanAmount, setLoanAmount] = useState('')

  useEffect(() => {
    // Initialize RecaptchaVerifier when the component mounts
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptchacontainer', {
      size: 'invisible',
      callback: (response) => {
        // Callback logic
        onSignInSubmit();
      },
    });
  }, []);

  

  const handleSubmitdata = (e) => {
    e.preventDefault()
    if(firstname === '' ||  lastname === '' || email === '' || pincode === '' || salary === '' || phonenumber === '' || loanAmount === '' ) {
      alert("Please Fill all the field")
      return;
    }
    const dataCollRef = collection(db, 'PersonalLoan') 
    addDoc(dataCollRef, { firstname, middlename, lastname, email, pincode, salary, phonenumber, loanAmount })
    .then( response => {
      alert("Applied Succesfully!!")
    }).catch(error => {
      console.log(error.message)
    })
  }
  
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

 const onCaptchaverify = () => {
  if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier(auth,"recaptchacontainer",{
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
      );
  }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    verifyCode(); // Call the OTP verification function
  };
  

  const onSignInSubmit = (e) => {
    console.log("onSignInSubmit function is running")
    e.preventDefault()
    onCaptchaverify();
    console.log("hello"+phoneNumber);
    const phonenumber = "+91" + phoneNumber;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phonenumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      alert("otp sent")
      console.log("onSignInSubmit function running compilted")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      console.log("this is the captcha error "+error)
      // ...
    });
  }

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    setPhoneNumber(inputPhoneNumber)
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
    console.log("verifyCode function is running")
    e.preventDefault()
    console.log(otp)
    window.confirmationResult 
      .confirm(otp)
      .then(async (res) => {
        // User signed in successfully.
        // setUser(res.user)
        alert('Verification Done')
      })
      .catch((error) => {
          alert('Invalid OTP')
      });
  };

  //this is for the styles
  const iconStyle = {
    marginRight: '20px', // Adjust the amount of spacing as needed
  };
  
  return (

    <>
        <div className='flex justify-center font-montserrat font-semibold text-2xl mt-4 '>Personal Loan</div>
        <div className='flex justify-center mt-4'>
            <form className="rounded-lg flex md:flex-col space-x-4 font-montserrat">
                <div className="flex flex-col">
                  <p className="text-end text-gray-500 mt-4">First Name*</p>
                  <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="form-input mt-2 rounded-lg"
                      required
                      onChange={e => setFirstname(e.target.value)}
                  />
                  <p className="text-end text-gray-500 mt-4">Last Name*</p>
                  <input
                      type="text"
                      name="Last Name"
                      placeholder="Last Name"
                      className="form-input mt-2 rounded-lg"
                      required
                      onChange={e => setLastname(e.target.value)}
                  />
                  <p className="text-end text-gray-500 mt-4">Company Name</p>
                  <input
                      type="text"
                      name="comapnyname"
                      placeholder="Cred Polis"
                      className="form-input mt-2 rounded-lg"
                      required
                      onChange={e => setPincode(e.target.value)}
                  />
                  <p className="text-end text-gray-500 mt-4">Phone No.</p>
                    <input
                      type="number"
                      name="Phonenumber"
                      placeholder="9123456789"
                      className="form-input mt-2 rounded-lg"
                      required
                      value={phoneNumber}
                      onChange={(e) => {
                        handlePhoneNumberChange(e);
                        setPhonenumber(e.target.value);
                      }}
                    />
                    <div id='recaptchacontainer'></div>
                    <button className='flex text-gray-500 ' onClick={onSignInSubmit}>Send OTP</button>
                    {/* OTP field (conditionally rendered) */}
                    {showOTPField && (
                      <>
                        <p className="text-end text-gray-500 mt-4">OTP</p>
                        <input
                          type="number"
                          name="otp"
                          className=" mt-2 rounded-lg"
                          required
                          value={otp}
                          onChange={(e) => setOTP(e.target.value)}
                        />
                        <button className='flex text-gray-500 ' onClick={verifyCode} >Verify OTP</button>
                      </>
                    )}
                </div>
                
                <div className="flex flex-col md:mt-4">
                <p className="text-end text-gray-500 mt-4">Middle Name*</p>
                <input
                    type="text"
                    name="Middle name"
                    placeholder=""
                    className="form-input mt-2 rounded-lg"
                  
                    onChange={e => setMiddlename(e.target.value)}
                />
                <p className="text-end font-Montserrat text-gray-500 mt-4">Personal Email</p>
                <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="form-input mt-2 rounded-lg"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <p className="text-end text-gray-500 mt-4">Salary</p>
                <input
                    type="text"
                    name="Amount"
                    placeholder="100"
                    className="form-input mt-2 rounded-lg"
                    onChange={e => setSalary(e.target.value)}
                    required
                />
                {/* <select
                    name="Select property Type"
                    className="form-select mt-2 rounded-lg text-gray-400"
                    >
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    {/* Add more options as needed */}
                {/* </select> */} 

                <p className="text-end text-gray-500 mt-4">Loan Amount</p>
                <input
                    type="text"
                    name="Amount"
                    placeholder="100"
                    className="form-input mt-2 rounded-lg"
                    onChange={(e) => setLoanAmount(e.target.value)}
                    required
                />
              </div>
              
            </form>

        </div>
        <div className='flex justify-center font-montserrat text-sm p-10 w-auto mt-6 gap-4'>
        <button
          // className="w-[24px] h-[24px] justify-center border-1 bg-blue_gray-700"
          className="w-[24px] h-[24px] justify-center border-2 border-blue_gray-700"
          onClick={toggleCheckbox}
        >
          {isChecked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 5 16"
              fill="none"
            >
              <path
                d="M3.90008 10.2646C3.70314 10.2649 3.50807 10.2264 3.32608 10.1511C3.14408 10.0759 2.97875 9.9654 2.83958 9.82606L0.0430756 7.03006L0.750076 6.32256L3.54658 9.11906C3.64034 9.2128 3.76749 9.26545 3.90008 9.26545C4.03266 9.26545 4.15981 9.2128 4.25358 9.11906L11.2501 2.12256L11.9571 2.82956L4.96058 9.82606C4.8214 9.9654 4.65607 10.0759 4.47408 10.1511C4.29208 10.2264 4.09701 10.2649 3.90008 10.2646Z"
                fill="#1b424c"
              />
            </svg>
          )}
        </button>

          I hereby authorize CredPolis to analyse my case on the basis of above mentioned details. I also authorize to send notification on 
          Whatsapp, SMS and reach me on above mentioned contact details.
            
        </div>
        {isChecked && (
            <div className='flex justify-center mt-2 mb-[10px] h-[46px]'>
              <button 
              type="submit" 
              className='flex bg-newblue-100 text-white-A700_01 rounded-full  pt-[12px] pb-[12px] pr-[36px] pl-[36px]'
              onClick={handleSubmitdata}
              >
                Apply Now
              </button>
            </div>
        )}
        <div className='flex flex-col font-montserrat font-size-[18px] w-full h-auto bg-green-600 bg-opacity-50'>
          <h2 className='flex-1 font-semibold text-2xl justify-center items-center text-center font-montserrat text-blue_grey-700 py-4'>This is what you get when you apply with us</h2>
          
          <div className='flex flex-col px-[120px] text-size[18px] gap-4 mb-5'>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Easy qualification
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              For All your Need
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              No collateral required
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Minimal paperwork
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Financing up to Rs. 60 lakh...
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Rapid disbursal
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Attractive rates of interest
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Flexible tenors, that the repayment duration ranges up to 84 months
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Tax Benefits
            </p>
          </div>

        </div>
        
        <div className='flex flex-col w-full h-auto mt-4 bg-green-600 bg-opacity-50'>
          <h2 className='font-semibold text-2xl text-center font-montserrat text-blue_grey-700 py-4'> A QUICK TIP, JUST BEFORE YOU APPLY</h2>
          <div className='flex flex-col p-5 gap-[100px]'>
            <div className='flex flex-col px-[100px] text-size[18px] gap-4 mb-5'>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                Your Age should be 21 years to 60 years
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                Your Income should be at least 25,000.
              </p>
              
            </div>
          </div> 
        </div>
        <div className='flex flex-col w-full h-auto mt-4 bg-green-600 bg-opacity-50'>
          <h2 className='font-semibold text-2xl text-center font-montserrat text-blue_grey-700 py-4'>DOCUMENTS YOU WOULD NEED TO UPLOAD WHILE APPLYING</h2>
          <div className='flex flex-col p-5 gap-[100px]'>
            <div className='flex flex-col px-[100px] text-size[18px] gap-4 mb-5'>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                PAN Card Copy
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                AADHAAR Card Copy
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                Government Issued ID Card
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                3 Months Bank Account Statement
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                Income Documents
              </p>
            </div>
            
          </div> 
        </div>
        {/* <div className='flex flex-col items-center w-full h-[553px] mt-4 bg-green-600 bg-opacity-50  '>
          <h2 className='font-semibold text-2xl font-montserrat text-blue_grey-700 py-4'>Why Choose Us</h2>
          <div className='flex flex-row justify-center p-5 gap-[100px]'>
            <div className='flex justify-start'>
              <p>col1 'Button' is defined but never used  </p>
            </div>
            <div className='flex justify-end'>
              <p>col2 'Button' is defined but never used  </p>
            </div>
          </div>  
        </div> */}
        <div className='mt-7 bg-green-600 bg-opacity-50'> {/*this will be the FAQ section */}
          <div className="flex sm:flex-1 flex-col w-auto gap-3.5 items-start justify-start sm:w-full">
            <Text
              className="ml-10 sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700 text-center tracking-[0.50px] w-auto"
              size="txtRalewayRomanBold40"
            >
              FAQ's
            </Text>
            <div className="flex flex-col font-montserrat gap-[34px] items-start justify-start w-auto sm:w-full">
              <div className='flex flex-col p-5 gap-[100px]'>
              <div className='flex flex-col px-[100px] text-size[18px] gap-4 mb-5'>
                <p>
                  <FontAwesomeIcon icon={faQuestion} style={iconStyle} />
                  <a href='https://www.paisabazaar.com/personal-loan/transfer-personal-loan-one-bank-to-another'>How to Transfer Personal Loan from One Bank to Another?</a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faQuestion} style={iconStyle} />
                  <a href='https://www.paisabazaar.com/personal-loan/how-lenders-decide-personal-loan-eligibility/'>How Lenders Decide Personal Loan Eligibility?</a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faQuestion} style={iconStyle} />
                  <a href='https://www.paisabazaar.com/personal-loan/chances-getting-personal-loan-approval/'>What are My Chances of Getting Personal Loan Approval?</a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faQuestion} style={iconStyle} />
                  <a href='https://www.paisabazaar.com/personal-loan/how-do-lenders-decide-personal-loan-amount/'>How Do Lenders Decide Personal Loan Amount?</a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faQuestion} style={iconStyle} />
                  <a href='https://www.paisabazaar.com/personal-loan/how-track-status-personal-loan-application/'>How to Track the Status of your Personal Loan Application?</a>
                </p>
              </div>
              
            </div> 
            </div>
          </div>
        </div>
    </>
  )
}

export default Personalform
