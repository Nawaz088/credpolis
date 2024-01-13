import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import Otpverification from "./Otpverification";
import { db } from './firebase_config'
import { addDoc, collection } from "firebase/firestore";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [firstname, setFirstname] = useState('')
  const [middlename, setMiddlename] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmitdata = (e) => {
    e.preventDefault()
    if(firstname === '' || lastname === '' || email === '' || loanAmount === ''  ) {
      alert("Please Fill all the field")
      return;
    }
    const dataCollRef = collection(db, 'InstantLoan') 
    addDoc(dataCollRef, { firstname, middlename, lastname, email, phonenumber, loanAmount })
    .then( response => {
      alert("APPLIED SUCCESSFULLY!!")
      console.log(response)
    }).catch(error => {
      console.log(error.message)
    })
  }

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
  });

  const updatenumber = (newphonenumber) => {
    setPhonenumber(newphonenumber)
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform form submission or other actions here.
    console.log("Form data:", formData);
  };

  return (
    <>
    <div className="flex justify-center items-center mt-4">
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
            placeholder="Middle Name"
            className="form-input mt-2 rounded-lg"
            required
            onChange={e => setLastname(e.target.value)}
          />
          {/* <p className="text-end text-gray-500 mt-4">Phone No.</p>
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            className="form-input mt-2 rounded-lg"
            required
            onChange={e => setPhonenumber(e.target.value)}
          /> */}
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
    <div>
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
            <div className='flex justify-center mt-[20px] mb-[10px] h-[46px]'>
              <button 
              type="submit" 
              className='flex bg-newblue-100 text-white-A700_01 rounded-full  pt-[12px] pb-[12px] pr-[36px] pl-[36px]'
              onClick={handleSubmitdata}
              >
                Apply Now
              </button>
            </div>
        )}
    </div>
    </>
  );
};

export default Form;
