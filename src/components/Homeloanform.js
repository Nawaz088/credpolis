import React, { useState } from 'react';
import { db } from './firebase_config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { addDoc, collection } from 'firebase/firestore';
import Otpverification from './Otpverification';

const Homeloanform = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [loanAmount, setLoanAmount] = useState('');

  const handleSubmitdata = (e) => {
    e.preventDefault();
    if (
      firstname === '' ||
     
      lastname === '' ||
      email === '' ||
      pincode === '' ||
      propertyType === '' ||
      phonenumber === ''
    ) {
      alert('Please Fill all the fields');
      return;
    } else {
      const dataCollRef = collection(db, 'HomeLoan');
      addDoc(dataCollRef, {
        firstname,
        middlename,
        lastname,
        email,
        pincode,
        propertyType,
        phonenumber,
        loanAmount,
      })
        .then((response) => {
          alert("Applied Succefully!!")
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const updatenumber = (newphonenumber) => {
    setPhonenumber(newphonenumber)
  }
  
  const iconStyle = {
    marginRight: '20px', // Adjust the amount of spacing as needed
  };

  return (

    <>
        <div className='flex justify-center font-montserrat font-semibold text-2xl mt-[30px] mb-[30px]'>Home Loan</div>
        <div className='flex justify-center'>
            <form className="rounded-lg flex md:flex-col space-x-4 font-montserrat" >
                <div className="flex flex-col">
                <p className="text-end text-gray-500 mt-4">First Name*</p>
                {/* <p className="flex-col text-sm  text-red-500">Please Enter Name</p> */}
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-input mt-2 rounded-lg"
                    onChange={e => setFirstname(e.target.value)}
                    required
                    
                />
                <p className="text-end text-gray-500 mt-4">Last Name*</p>
                <input
                    type="text"
                    name="Last Name"
                    placeholder="Middle Name"
                    className="form-input mt-2 rounded-lg"
                    onChange={e => setLastname(e.target.value)}
                    required
                    
                />
                {/* <p className="text-end text-gray-500 mt-4">Phone No.</p>
                <input
                    type="text"
                    name="middleName"
                    placeholder="Middle Name"
                    className="form-input mt-2 rounded-lg"
                    onChange={e => setPhonenumber(e.target.value)}
                    required
                    
                /> */}
                
                <p className="text-end text-gray-500 mt-4">Pincode</p>
                <input
                    type="text"
                    name="middleName"
                    placeholder="Middle Name"
                    className="form-input mt-2 rounded-lg"
                    onChange={e => setPincode(e.target.value)}
                    required
                    
                />
                <Otpverification phonenumber={phonenumber} updatenumber={updatenumber}/>
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
                    placeholder="100"
                    className="form-input mt-2 rounded-lg"
                    onChange={e => setEmail(e.target.value)}
                />
                <p className="text-end text-gray-500 mt-4">Property Type</p>
                  <input
                      type="email"
                      name="email"
                      placeholder="100"
                      className="form-input mt-2 rounded-lg"
                      onChange={e => setPropertyType(e.target.value)}
                  />
                {/* <select
                    name="Select property Type"
                    className="form-select mt-2 rounded-lg text-gray-400"
                    >
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    Add more options as needed
                </select> */}

                <p className="text-end text-gray-500 mt-4">Loan Amount</p>
                <input
                    type="text"
                    name="Amount"
                    placeholder="100"
                    className="form-input mt-2 rounded-lg"
                    onChange={e => setLoanAmount(e.target.value)}
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
          <div className='flex justify-center mt-[75px] h-[46px]'>
            <button 
              type="submit" 
              className='flex bg-newblue-100 text-white-A700_01 rounded-full  pt-[12px] pb-[12px] pr-[36px] pl-[36px]'
              onClick={handleSubmitdata}>
              Apply Now
            </button>
          </div>
        )}
        <div className='flex flex-col font-montserrat font-size-[18px] w-full h-auto bg-green-600 bg-opacity-50'>
          <h2 className='flex-1 font-semibold text-2xl justify-center items-center text-center font-montserrat text-blue_grey-700 py-4'>This is what you get when you apply with us</h2>
          
          <div className='flex flex-col px-[120px] text-size[18px] gap-4 mb-5'>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Loan of Rs 15 Crore
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Low Interest Rate
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Approval in 2Days
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Tenure Upto 40yrs
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Hassle free process 
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Door step Visit to assist you about the best in market
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Additional Payment Benefits (Partial payment and foreclosure Benefits without any cost)
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
                Your Income should be at least 20,000.
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
                Khata
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                Property Documents
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                Project Plan
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                6 Months Bank Account Statement
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                Income Proof
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} style={iconStyle} />
                Key Documents
              </p>
            </div>
            
          </div> 
        </div>
    </>
  )
}

export default Homeloanform;
