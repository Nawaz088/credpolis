import React from 'react'
import {Text, Img} from "components"

const Hero = () => {
  return (
    <div className="flex md:flex-col flex-row font-montserrat gap-8 items-center justify-between max-w-[1440px] mt-[100px] md:px-10 sm:px-5 px-[98px] w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[612px] md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="leading-[76.00px] max-w-[612px] md:max-w-full md:text-5xl text-[68px] text-blue_gray-700 tracking-[0.50px]"
                size="txtMontserratRomanBold68"
              >
                Quick and Easy Loans for Your Financial Needs.
              </Text>
              <Text
                className="max-w-[592px] md:max-w-full text-gray-800_01 text-lg tracking-[0.50px]"
                size="txtMontserratRomanRegular18"
              >
                Our loan services offer a hassle-free and streamlined borrowing
                experience, providing you with the funds you need in a timely
                manner to meet your financial requirements.
              </Text>
            </div>
          </div>
          <Img
            className="md:flex-1 h-[500px] sm:h-auto object-cover w-[562px] md:w-full border-none"
            src="images/img_rectangle18.png"
            alt="rectangleEighteen"
          />
    </div>
  )
}

export default Hero
