import React from "react";

import { Button, Img, Input, Text } from "components";
import Navbar from "components/Navbar";

const FrameThirtySixPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto pb-[1190px] w-full">
        <Navbar />
        
        <div className="flex flex-col items-start mt-9 md:px-10 sm:px-5 px-[92px] w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.50px]"
            size="txtMontserratRomanSemiBold32"
          >
            Instant Loan
          </Text>
        </div>
        <div className="bg-white-A700_01 flex flex-col items-center justify-start max-w-[1296px] mt-[67px] mx-auto p-5 md:px-5 w-full">
          <div className="flex flex-col justify-start mb-[50px] mt-[23px] w-[97%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row sm:gap-10 gap-[329px] items-center justify-start w-[66%] md:w-full">
                  <Text
                    className="text-base text-gray-600_02"
                    size="txtMontserratRegular16"
                  >
                    First Name*
                  </Text>
                  <Text
                    className="text-base text-gray-600_02"
                    size="txtMontserratRegular16"
                  >
                    Middle Name
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[300px] items-center justify-start mt-[9px] w-full">
                  <Input
                    name="groupSeven"
                    placeholder="John"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-600_02 border-solid sm:flex-1 sm:w-full"
                    shape="round"
                    size="xs"
                  ></Input>
                  <Input
                    name="groupFour"
                    placeholder="Doe"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-600_02 border-solid sm:flex-1 sm:w-full"
                    shape="round"
                    size="xs"
                  ></Input>
                </div>
                <div className="flex flex-row sm:gap-10 gap-[337px] items-center justify-start mt-[25px] w-[67%] md:w-full">
                  <Text
                    className="text-base text-gray-600_02"
                    size="txtMontserratRegular16"
                  >
                    Last Name
                  </Text>
                  <Text
                    className="text-base text-gray-600_02"
                    size="txtMontserratRegular16"
                  >
                    Personal Email
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between mt-[9px] w-full">
                  <Input
                    name="groupSix"
                    placeholder="Doe"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-600_02 border-solid sm:flex-1 sm:w-full"
                    shape="round"
                    size="xs"
                  ></Input>
                  <Input
                    name="email"
                    placeholder="johndoe@gmail.com"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left underline w-full"
                    wrapClassName="border border-gray-600_02 border-solid sm:flex-1 sm:w-full"
                    type="email"
                    shape="round"
                    size="xs"
                  ></Input>
                </div>
                <div className="flex flex-row sm:gap-10 gap-[313px] items-center justify-start mt-[25px] w-[68%] md:w-full">
                  <Text
                    className="text-base text-gray-600_02"
                    size="txtMontserratRegular16"
                  >
                    Loan Amount
                  </Text>
                  <Text
                    className="text-base text-gray-600_02"
                    size="txtMontserratRegular16"
                  >
                    Mobile Number
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between mt-[9px] w-full">
                  <Input
                    name="groupThree"
                    placeholder="10,00,000"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-600_02 border-solid sm:flex-1 sm:w-full"
                    shape="round"
                    size="xs"
                  ></Input>
                  <Input
                    name="mobileNo"
                    placeholder="8967889890"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-600_02 border-solid sm:flex-1 sm:w-full"
                    type="number"
                    shape="round"
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start ml-1.5 md:ml-[0] mt-12 w-full">
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
              <Text
                className="sm:flex-1 leading-[24.00px] text-black-900 text-xl tracking-[0.50px] w-[98%] sm:w-full"
                size="txtMontserratRomanLight20"
              >
                I hereby authorize Finance Buddha and its Affiliates to retrieve
                my Credit Report. I also authorize to send notifications on
                WhatsApp, SMS, RCS and other platforms to verify my device
                location through my mobile operator.
              </Text>
            </div>
            <Button
              className="border border-blue_gray-700 border-solid cursor-pointer min-w-[141px] md:ml-[0] ml-[528px] mr-[537px] mt-[72px] text-center text-xl tracking-[0.50px]"
              shape="round"
            >
              APPLY{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameThirtySixPage;
