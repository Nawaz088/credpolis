import React from 'react'
import Navbar from 'components/Navbar'
import Form from 'components/Form'
import Footer from 'components/Footer'
import { Button } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const iconStyle = {
  marginRight: '20px', // Adjust the amount of spacing as needed
};

const InstantLoan = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center mt-4 mb-4 font-montserrat font-semibold text-2xl'>
        <h1>Instant Loan</h1>
      </div>
      <Form />
      {/* <div className='flex justify-center font-montserrat p-8'>
        <input type="checkbox" name="scales" />
        <label for="scales">I hereby authorize CredPolis and its Affiliates to retrieve my Credit Report. 
        I also authorize to send notifications on WhatsApp, SMS, RCS and other platforms to verify my device 
        location through my mobile operator.</label>
      </div>
      remove this next time
      <div className="flex justify-center gap-10 p-4 ">
        <Button >Apply</Button>
      </div> */}

        <div className='flex flex-col font-montserrat font-size-[18px] w-full h-auto bg-green-600 bg-opacity-50'>
          <h2 className='flex-1 font-semibold text-2xl justify-center items-center text-center font-montserrat text-blue_grey-700 py-4'>This is what you get when you apply with us</h2>
          <div className='flex flex-col px-[120px] text-size[18px] gap-4 mb-5'>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Fast Process:
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Minimum Documents	
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Small amounts:
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Flexible duration:
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              Quick disbursal
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              No physical visits
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
        <div className='flex flex-col px-[120px] text-size[18px] gap-4 mb-5'>
          <p>
            <FontAwesomeIcon icon={faCheck} style={iconStyle} />
            Your Age should be 21 years to 60 years
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} style={iconStyle} />
            Your Income should be at least 15,000.
          </p>
        </div>
      </div>
      <div className='flex flex-col w-full h-auto mt-4 bg-green-600 bg-opacity-50'>
          <h2 className='font-semibold text-2xl text-center font-montserrat text-blue_grey-700 py-4'>DOCUMENTS YOU WOULD NEED TO UPLOAD WHILE APPLYING</h2>
          <div className='flex flex-col px-[120px] text-size[18px] gap-4 mb-5'>
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
    
      <Footer />
    </div>
  )
}

export default InstantLoan
