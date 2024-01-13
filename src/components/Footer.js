import React from 'react'
import { Img, Text, Input, Line , Button} from 'components'
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase_config'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const StyledButton = styled(Button)`
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color:#003f4f;
    color: white;
  }
`;
const Footer = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmitdata = (e) => {
    e.preventDefault()
    if(name === '' && phone === '' && email === '') {
      alert("Please Fill all the field")
      return;
    }
    const dataCollRef = collection(db, 'Contact Us') 
    addDoc(dataCollRef, { name, phone, email })
    .then( response => {
      // console.log(response)
      alert("Submited Successfully")
    }).catch(error => {
      console.log(error.message)
    })
  }

  const navigate = useNavigate();
  return (
    <div>
      <footer className="flex font-montserrat items-center justify-center mt-[25px] md:w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-gradient  flex md:flex-col flex-row gap-3.5 items-center justify-between max-w-full md:px-10 sm:px-5 px-[125px] py-[90px] w-full">
              <div className="flex sm:flex-1 flex-col w-auto gap-3.5 items-start justify-start sm:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700 text-center tracking-[0.50px] w-auto"
                  size="txtRalewayRomanBold40"
                >
                  Unable To Decide?
                </Text>
                <div className="flex flex-col font-montserrat gap-[34px] items-start justify-start w-auto sm:w-full">
                  <Img
                    className="h-[450px] md:h-auto object-cover w-[450px] sm:w-full"
                    src="images/img_query1.png"
                    alt="queryOne"
                  />
                  <Text
                    className="max-w-[455px] md:max-w-full text-gray-800_02 text-xl tracking-[0.15px]"
                    size="txtDMSansRegular20"
                  >
                    QuickFunds- Your trusted financial partner for loans. Quick
                    approvals, competitive rates, and personalized solutions to
                    meet your unique needs. Empowering you to achieve your
                    financial goals. Apply online today!
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex mt-[200px] sm:flex-1 flex-col gap-7 items-center justify-end md:px-10 sm:px-5 px-[47px] py-[45px] rounded-[21px] w-[489px] sm:w-full">
                <div className="flex flex-col font-montserrat gap-[7px] items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 text-center tracking-[0.50px] w-auto"
                    size="txtRalewayRomanRegular16"
                  >
                    {" "}
                    Your Name
                  </Text>
                  <input
                    name="frameThirtyOne"
                    placeholder=""
                    className="p-[20px] w-full border-2 rounded-2xl"
                    wrapClassName="flex h-[46px] rounded-[20px] w-full"
                    color="gray_600_01"
                    variant="outline"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col font-montserrat gap-[7px] items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 text-center tracking-[0.50px] w-auto"
                    size="txtRalewayRomanRegular16"
                  >
                    Phone number
                  </Text>
                  <input
                    name="frameThirtyOne_One"
                    placeholder=""
                    className="w-full rounded-2xl border-2 p-[20px]"
                    wrapClassName="flex h-[46px]  w-full"
                    color="gray_600_01"
                    variant="outline"
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col font-montserrat gap-[7px] items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 text-center tracking-[0.50px] w-auto"
                    size="txtRalewayRomanRegular16"
                  >
                    Email address
                  </Text>
                  <input
                    name="frameThirtyOne_Two"
                    placeholder=""
                    className="w-full border-2 p-[20px] rounded-2xl"
                    wrapClassName="flex h-[46px] rounded-[20px] w-full"
                    color="gray_600_01"
                    variant="outline"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <StyledButton
                  className="border border-blue_gray-700 border-solid cursor-pointer font-montserrat min-w-[132px] text-center text-xl tracking-[0.50px]"
                  shape="round"
                  onClick={handleSubmitdata}
                >
                  SEND
                </StyledButton>
              </div>
            </div>
            <div className="bg-gray-900 flex md:flex-col flex-row font-montserrat gap-3.5 h-[492px] md:h-auto items-center justify-between max-w-full md:px-10  p-10 w-full">
              <div className="flex flex-col gap-6 items-start justify-between w-auto">
              <Img className="flex h-[150px] w-[147px] sm:h-[150px] sm:w-[147px]"
                src="images/main_logo_credpolis.svg"
                alt='logo'/>
              
                <Text
                  className="leading-[24.00px] text-lg text-white-A700 tracking-[0.15px] sm:flex "
                  size="txtRalewayRomanRegular18"
                >
                  <>
                    Our mission is to empower individuals and <br />
                    businesses by providing them with the
                    <br />
                    financial resources they
                    <br />
                    need to achieve their goals.
                  </>
                </Text>
                
                {/* adding icons here */}
                <div className='flex flex-row justify-between gap-5'> 
                  <Img src='images/instagram.svg' alt='instagram image' onClick={() => window.location.href = 'https://instagram.com/credpolis_?igshid=MzRlODBiNWFlZA=='} />

                  <Img src='images/facebook.svg' alt='facebook image' onClick={() => window.location.href = 'https://instagram.com/credpolis_?igshid=MzRlODBiNWFlZA=='}/>
                  <a href="https://api.whatsapp.com/send?phone=9113211725">
                    <Img src="images/whatsapp.svg" alt="whatsapp image" />
                  </a>

                  
                  
                </div>
              </div>
              {/* <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-[126px] items-center justify-between w-auto sm:w-full"> */}
                <div className='flex gap-4 mt-2 w-auto justify-center'>
                  <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-col font-montserrat gap-2 items-start justify-start">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[0.15px] w-auto"
                            size="txtDMSansBold22"
                          >
                            OUR SERVICES
                          </Text>
                          <Line className="bg-white-A700 h-px w-[44%]" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate('/personalloan')}
                        className="text-lg text-white-A700 tracking-[1.15px]"
                      >
                        <Text size="txtRalewayRomanMedium18">Personal loan</Text>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate('/instantLoan')}
                        className="text-lg text-white-A700 tracking-[1.15px]"
                      >
                        <Text size="txtRalewayRomanMedium18">Instant loan</Text>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate('/homelaon')}
                        className="text-lg text-white-A700 tracking-[1.15px]"
                      >
                        <Text size="txtRalewayRomanMedium18">Home loan</Text>
                      </button>
                      
                      
                      
                    </li>
                    <li>
                      <button
                        onClick={() => navigate('#')}
                        className="text-lg text-white-A700 tracking-[1.15px]"
                        >
                        <Text size="txtRalewayRomanMedium18">Business Loan</Text>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate('#')}
                        className="text-lg text-white-A700 tracking-[1.15px]"
                        >
                        <Text size="txtRalewayRomanMedium18">Insurance Assistance</Text>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate('#')}
                        className="text-lg text-white-A700 tracking-[1.15px]"
                        >
                        <Text size="txtRalewayRomanMedium18">
                          <Link to={'/footer'}>Credit Card</Link>
                          </Text>
                      </button>
                    </li>
                  </ul>
                </div>
                <ul className="flex flex-col gap-4 items-end justify-start w-100% md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <a
                          href="javascript:" 
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[0.15px] w-auto"
                        >
                          <Text size="txtDMSansBold22">CONTACT US</Text>
                        </a>
                        <Line className="bg-white-A700 h-px w-2/5" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918549030923">
                      <div className="flex flex-row font-montserrat gap-[18px] items-center justify-start">
                        <Img
                          className="h-5 w-[19px]"
                          src="images/img_speechbubble.svg"
                          alt="speechbubble"
                        />
                        <Text
                          className="text-lg text-white-A700 font-montserrat tracking-[1.15px] w-auto"
                          size="txtRalewayRomanMedium18"
                          color="grey">
                          +91 85490 30923
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:credpolis@credpolis.com">
                      <div className="flex flex-row font-montserrat gap-[18px] items-center justify-start">
                        <Img
                          className="h-5 w-[19px]"
                          src="images/img_speechbubble_white_a700.svg"
                          alt="speechbubble_One"
                        />
                        <Text
                          className="text-lg text-white-A700 tracking-[1.15px] w-auto"
                          size="txtRalewayRomanMedium18"
                        >
                          credpolis@credpolis.com
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/@12.8695123,77.5759249,3a,75y,147.67h,95.35t/data=!3m7!1e1!3m5!1s-oPSXv7tOUx4UdFnAiNbPA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D-oPSXv7tOUx4UdFnAiNbPA%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D112.66045%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu">
                      <div className="flex flex-row font-montserrat gap-[10px] items-start justify-start">
                        <Img
                          className="h-5 w-[19px] mt-2"
                          src="images/img_speechbubble_white_a700_20x19.svg"
                          alt="speechbubble_Two"
                        />
                        <Text
                          className="text-lg text-white-A700 tracking-[1.15px]"
                          size="txtRalewayRomanMedium18"
                        >
                          <>
                            CredPolis Financial Services<br/>
                            NO,52,2nd Floor,80 Feet Road,<br/>
                            Near RV Engineering College <br />
                            J.P.Nagar 8th Phase,<br />
                            Bengaluru,560078 <br />
                          </>
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
              {/* </div> */}
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
