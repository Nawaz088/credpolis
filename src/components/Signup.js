import './LoginSignupPopup/style.css'
import { Button, Img, Input, Text } from "components";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase_config";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  
  
  const register = () => {
    if (!name) alert("Please enter name");
      registerWithEmailAndPassword(name, email, password);
    };

  

  return (
        <div className="bg-transperent flex font-montserrat p-[100px] flex-col items-center justify-start mx-auto md:px-5 rounded-lg md:w-full">
          <div className="bg-white-A700  flex flex-col gap-[59px] items-center justify-start pb-[50px] md:px-5 mb-[2902px] w-2/5 rounded-lg md:w-full shadow-2xl">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="bg-white-A700 h-[71px] justify-center sm:mt-0 mt-[29px] pb-[11px] pt-[19px] sm:px-5 px-[35px] rounded-tl-lg rounded-tr-lg md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-[328px]"
                size="txtMontserratExtraBold32"
              >
                <span className="md:text-[22px] sm:text-xl text-gray-900 font-montserrat text-left text-2xl font-semibold leading-[normal]">
                  Login
                </span>
                <span className="text-gray-900 font-montserrat text-left font-extrabold">
                  {" "}
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-900 font-montserrat text-left text-2xl font-medium leading-[normal]">
                  or
                </span>
                <span className="text-gray-900 font-montserrat text-left font-extrabold">
                  {" "}
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-900 font-montserrat text-left text-2xl font-semibold leading-[normal]">
                  SignUp
                </span>
              </Text>
              <Button
                className="flex h-[51px] items-center justify-center mb-[49px] rounded-[25px] w-[51px]"
                color="white_A700"
                onClick={props.closeSignupPopup}
              >
              <Text>X</Text>
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-[69%] md:w-full">
              <Text
                className="text-gray-900 text-sm"
                size="txtMontserratRegular14"
              >
                Mobile Number*
              </Text>
              <div className="flex  flex-row gap-4 items-center justify-between  w-full">
                <Text
                  className="bg-white-A700_01 border-2 border-gray-600  mt-1.5 justify-center pb-[20px] pl-[5px] pr-[5px] pt-[20px] rounded-[20px] text-gray-900 text-sm w-[84px]"
                  size="txtMontserratSemiBold20"
                >
                  <span className="text-gray-900 font-montserrat text-left font-semibold">
                    +
                  </span>
                  <span className="text-gray-900 font-montserrat text-left font-medium">
                    91
                  </span>
                  <span className="text-gray-900 font-montserrat text-left font-semibold">
                    {" "}
                    🇮🇳
                  </span>
                </Text>
                <input
                  name="mobileNo"
                  placeholder="8884209113"
                  className="font-medium text-left text-sm w-full border-2 p-[20px] rounded-2xl"
                  wrapClassName="border border-gray-600 border-solid mt-2.5 w-full"
                  required
                ></input>
              </div>
              <Text
                className="mt-2 text-gray-900 text-sm"
                size="txtMontserratRegular14"

              >
                First Name*
              </Text>
              <input
                name='firstname'
                placeholder="Adnan"
                className="font-medium text-left text-sm w-full border-2 p-[20px] rounded-2xl"
                wrapClassName="border border-gray-600 border-solid mt-2.5 w-full"
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
              <Text
                className="mt-2 text-gray-900 text-sm"
                size="txtMontserratRegular14"
              >
                Last Name
              </Text>
              <input
                name="groupFour"
                placeholder="Sami"
                className="font-medium text-left text-sm w-full border-2 p-[20px] rounded-2xl"
                wrapClassName="border border-gray-600 border-solid mt-2.5 w-full"
                required
              ></input>
              <Text
                className="mt-2 text-gray-900 text-sm"
                size="txtMontserratRegular14"
              >
                Email ID
              </Text>
              <input
                name='email'
                placeholder=""
                className="font-medium text-left text-sm w-full border-2 p-[20px] rounded-2xl"
                wrapClassName="border border-gray-600 border-solid mt-2.5 w-full"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <Text
                className="mt-2 text-gray-900 text-sm"
                size="txtMontserratRegular14"
              >
                Password*
              </Text>
              <input
                name="password_One"
                placeholder="***"
                className="font-medium text-left text-sm w-full border-2 p-[20px] rounded-2xl"
                wrapClassName="border border-gray-600 border-solid mt-2.5 w-full"
                required
              ></input>
              <Text
                className="mt-2 md:ml-[0] text-gray-900 text-sm"
                size="txtMontserratRegular14"
              >
                Confirm Password*
              </Text>
              <input
                
                placeholder="***"
                value={password}
                className="font-medium text-left text-sm w-full border-2 p-[20px] rounded-2xl"
                wrapClassName="border border-gray-600 border-solid mt-2.5 w-full"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <Button
                className="cursor-pointer font-semibold leading-[normal] w-full sm:min-w-full mt-8 text-center text-xl uppercase"
                shape="round"
                color="blue_gray_700"
                onClick={register}
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
  );
};

export default Signup;