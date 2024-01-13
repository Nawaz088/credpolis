import React from 'react'
import {Img, Text, Button} from 'components'
import "./joinus_Styles.css"

const JoinUs = () => {
  const handleJoinUsClick = () => {
    const phoneNumber = '+918549030923';
    const message = 'Hello, I would like to join!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = url;
  };
  return (
    <div className="flex flex-col md:px-5 relative w-full">
            <div className="flex flex-col mx-auto w-full">
              <div className="flex flex-col mx-auto w-full">
                <div className="flex flex-col mx-auto w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-center max-w-[1440px] mx-auto md:px-10 sm:px-5 px-[125px] w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700 text-center tracking-[0.50px] w-auto mt-10"
                      size="txtRalewayRomanBold40"
                    >
                     Join Us
                    </Text>
                    {/* <Text
                      className="text-center text-gray-800_01 text-lg tracking-[0.50px] w-auto"
                      size="txtDMSansRegular18"
                    >
                      This is a process, how you can get loan for your self.
                    </Text> */}
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[190px] h-[350px] md:h-auto items-center justify-start max-w-[1440px] mt-[-10.45px] mx-auto md:px-10 sm:px-5 px-[142px] w-full z-[1]">
                    <Img
                      className="h-[350px] mt-10 md:h-auto object-cover w-[350px]"
                      src={require("./joinasAssociate.png")}
                      alt="confirmedbroOne"
                    />
                    <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-[546px] sm:w-full">
                      <Text
                        className="sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-700 tracking-[0.50px] w-auto"
                        size="txtRalewayRomanBold33"
                      >
                        Join as an Associate
                      </Text>
                      <Text
                        className="max-w-[546px] md:max-w-full text-gray-800_01 text-lg tracking-[0.50px]"
                        size="txtDMSansRegular18"
                      >
                        Join as an associate for a lucrative earnings, comprehensive traning and a client-centric
                        approach. Thrive with cutting-edge tech, diverse products and continual growth. Make an impact and 
                        build a legacy in finance.
                        
                      </Text>
                      <a className='w-20 h-15 p-3 rounded-xl bg-blue_gray-700  text-white-A700 transition duration-300 ease-in-out transform joinbutton'
                        href='tel:+918549030923'
                        >
                        Join Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col-reverse flex-row md:gap-10 gap-[10px] h-[400px] md:h-auto items-center justify-start max-w-[1440px] mt-[-35px] mx-auto md:px-10 py-20 sm:px-5 px-[158px] w-full z-[1]">
                  <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-[546px] sm:w-full">
                    <Text
                      className="sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-700 tracking-[0.50px] w-auto"
                      size="txtRalewayRomanBold33"
                    >
                      Bank Partnerships
                    </Text>
                    <Text
                      className="max-w-[546px] md:max-w-full text-gray-800_01 text-lg tracking-[0.50px]"
                      size="txtDMSansRegular18"
                    >
                      As a leading loan advisory firm, our partnership with multiple banks sets us apart.
                         Register with us today to benefit from an extensive network of financial institutions, 
                         allowing us to find the perfect loan options tailored to your needs. Our strong
                          relationships with these banks enable us to negotiate competitive interest rates, 
                          flexible repayment terms, and expedited loan approvals.
                    </Text>
                  </div>
                  <Img
                    className="sm:flex-1 h-[400px] md:h-auto object-cover w-[400px] sm:w-full"
                    src={require("./bank_partner.jpg")}
                    alt="paperworkhelpOne"
                  />
                </div>
              </div>
              <div className="hwrap">
                <div className="hmove">
                  <img
                    className="hitem w-5 h-20"
                    src={require('./Banks/HDFC-Bank-Logo.png')}
                    alt="HDFC Bank Logo"
                  />
                  <img
                    className="hitem w-5 h-20"
                    src={require('./Banks/icici-bank.png')}
                    alt="HDFC Bank Logo"
                  />
                  <img
                    className="hitem w-0 h-20"
                    src={require('./Banks/kotak-Bank.png')}
                    alt="HDFC Bank Logo"
                  />
                  <img
                    className="hitem w-0 h-20"
                    src={require('./Banks/Tata_Capital_Logo.jpg')}
                    alt="HDFC Bank Logo"
                  />
                  <img
                    className="hitem w-0 h-20"
                    src={require('./Banks/idfc-first-bank.png')}
                    alt="HDFC Bank Logo"
                  />
                  <img
                    className="hitem w-0 h-20"
                    src={require('./Banks/Bajaj-Finserv.png')}
                    alt="HDFC Bank Logo"
                  />
                  <img
                    className="hitem w-0 h-20"
                    src={require('./Banks/yes-bank.png')}
                    alt="HDFC Bank Logo"
                  />
                  <img
                    className="hitem w-0 h-20"
                    src={require('./Banks/Tata_Capital_Logo.jpg')}
                    alt="HDFC Bank Logo"
                  />
                  <img
                    className="hitem w-0 h-20"
                    src={require('./Banks/Birla-Bank.png')}
                    alt="HDFC Bank Logo"
                  />
                  <img
                    className="hitem w-0 h-20"
                    src={require('./Banks/standard-chartered-bank.png')}
                    alt="HDFC Bank Logo"
                  />
                  <img
                    className="hitem w-0 h-20"
                    src={require('./Banks/sriram-bank.png')}
                    alt="HDFC Bank Logo"
                  />
                  {/* <div className="hitem">Aliquam consequat varius consequat.</div>
                  <div className="hitem">Fusce dapibus turpis vel nisi malesuada sollicitudin.</div>
                  <div className="hitem">Pellentesque auctor molestie orci ut blandit.</div> */}
                </div>
              </div>
            </div>
            
        </div>
  )
}

export default JoinUs
