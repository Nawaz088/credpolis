import React from 'react'
import styled from 'styled-components';
import { Img, Button, Text } from 'components'
import { useNavigate } from 'react-router-dom';
const StyledButton = styled(Button)`
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color:rgb(27 66 76 / var(--tw-text-opacity));
    color: white;
  }
`;
const Servises = () => {

  const navigate = useNavigate();
  return (
    <div className="flex flex-col font-raleway md:gap-10 items-center justify-start mt-[152px] w-full">
          <div className="bg-gradient  flex flex-col items-center justify-end p-5 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-2.5 md:px-5 w-[100%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700 text-center tracking-[0.50px]"
                size="txtRalewayRomanBold40"
              >
                Our Services
              </Text>
              <div className="flex md:flex-col flex-row md:gap-12 items-center justify-between gap-8 mt-[54px] w-full">
                <div className="bg-blue_gray-50_33 border-none flex md:flex-1 flex-col items-center justify-center md:mt-0 my-[5px] p-[18px] rounded-[39px] shadow-bs w-[400px] h-[400px] md:w-full">
                  <Img
                    className="h-[95px] mt-2.5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="mt-[9px] sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-900 tracking-[0.50px]"
                    size="txtRalewayRomanMedium33"
                  >
                    Personal loan
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[11px] text-center text-gray-700 text-lg tracking-[0.50px]"
                    size="txtPoppinsRegular18"
                  >
                    <>
                      Personal loans offer financial flexibility, catering to various needs with straightforward application and approval procedures
                    </>
                  </Text>
                  <StyledButton
                    className="cursor-pointer font-dmsans font-medium mb-2.5 mt-[17px] rounded-[20px] text-center text-lg tracking-[0.50px] w-[123px]"
                    color="blue_gray_700_7c"
                    size="xs"
                    variant="outline"
                    style={{
                      transition: 'background-color 0.3s, color 0.3s',
                      ':hover': {
                        backgroundColor: 'green',
                        color: 'white',
                      },
                    }}
                    onClick={() => navigate("/personalloan")}
                  >
                    Apply now
                  </StyledButton>
                </div>
                <div className="bg-blue_gray-50_33 border-none flex md:flex-1 flex-col items-center justify-center md:mt-0 my-[5px] p-[18px] rounded-[39px] shadow-bs w-[400px] h-[400px] md:w-full">
                  <Img
                    className="h-[95px] mt-2.5"
                    src="images/Instantloan.svg"
                    alt="car"
                  />
                  <Text
                    className="mt-[9px] sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-900 tracking-[0.50px]"
                    size="txtRalewayRomanMedium33Black900"
                  >
                    Instant loan
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[19px] text-center text-gray-600 text-lg tracking-[0.50px]"
                    size="txtPoppinsRegular18Gray600"
                  >
                    <>
                      Instant loans offer speedy access to funds for urgent financial requirements, featuring rapid approval and disbursement.
                    </>
                  </Text>
                  <div className="flex flex-col items-center justify-center mt-[17px]">
                    <StyledButton
                      className="cursor-pointer font-dmsans font-medium mb-2.5 rounded-[20px] text-center text-lg tracking-[0.50px] w-[123px]"
                      color="blue_gray_700_7c"
                      size="xs"
                      variant="outline"
                      style={{
                        transition: 'background-color 0.3s, color 0.3s',
                        ':hover': {
                          backgroundColor: '#00000',
                          color: 'white',
                        },
                      }}
                      onClick={() => navigate('/instantLoan')}
                    >
                      Apply now
                    </StyledButton>
                  </div>
                </div>
                <div className="bg-blue_gray-50_33 border-none flex md:flex-1 flex-col items-center justify-center md:mt-0 my-[5px] p-[18px] rounded-[39px] shadow-bs w-[400px] h-[400px] md:w-full">
                  <Img
                    className="h-[95px] mt-2.5"
                    src="images/Homeloan.svg"
                    alt="car"
                  />
                  <Text
                    className="mt-[9px] sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-900 tracking-[0.50px]"
                    size="txtRalewayRomanMedium33Black900"
                  >
                    Home loan
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[19px] text-center text-gray-600 text-lg tracking-[0.50px]"
                    size="txtPoppinsRegular18Gray600"
                  >
                    <>
                      Home loans make homeownership achievable with financial support and manageable repayments.
                    </>
                  </Text>
                
                  <div className="flex flex-col items-center justify-center mt-[17px]">
                    <StyledButton
                      className="cursor-pointer font-dmsans font-medium mb-2.5 rounded-[20px] text-center text-lg tracking-[0.50px] w-[123px]"
                      color="blue_gray_700_7c"
                      size="xs"
                      variant="outline"
                      onClick={() => navigate('/homelaon')}
                    >
                      Apply now
                    </StyledButton>
                  </div>
                </div>
                

              </div>
              
            </div>
          </div>
          
        </div>
  )
}

export default Servises
