import React,{useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import { Button, Img, Input, Line, Text } from "components";
import SignupPopup from "./SignupPopup";
import LoginSignupPopup from "./LoginSignupPopup";
import Dashboard from "./Dashboard";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase_config";
import { useAuthState } from "react-firebase-hooks/auth";


const Login = (props) => {
  // const [showLoginPopup, setShowLoginPopup] = useState(false); // State to manage the login popup

  // const handlelogin = (e) => {
  //   e.preventdefault()
  //   props.toggleLoginPopup();
  //   setShowLoginPopup(!showLoginPopup);
  // };
  // const [showSignupPopup, setSignupPopup] = useState(false);

  // const toggleSignupPopup = () => {
  //   setSignupPopup(!showSignupPopup);

  // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      console.log("loading................")
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <>
      <div className="bg-transparent flex flex-col font-montserrat items-center justify-start mx-auto p-[100px] md:px-10 sm:px-5 w-full ">
        <div className="bg-white-A700 flex flex-col gap-[59px] items-center justify-start mb-[2902px] pb-[20px] md:px-5 rounded-lg w-3/5 md:w-full shadow-2xl">
          <div className="bg-white-A700 flex flex-row sm:gap-10 items-start justify-between rounded-tl-lg rounded-tr-lg w-full">
            <Text
              className="bg-white-A700 h-[71px] justify-center sm:mt-0 mt-[29px] pb-[11px] pt-[19px] sm:px-5 px-[35px] rounded-tl-lg rounded-tr-lg md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-[327px]"
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
            <button className="flex h-[51px] items-center justify-center mb-[49px] rounded-[25px] w-[51px]" 
              onClick={props.closePopup} >
              {/* <Img
                className="h-6"
                src="images/img_firscrosssmall.svg"
                alt="firscrosssmall"
              /> */}
              <Text className=" font-montserrat"> X </Text>
            </button>
          </div>
          <div className="flex flex-col items-start justify-start w-[68%] md:w-full">
            <Text
              className="text-gray-900 text-sm"
              size="txtMontserratRegular14"
            >
              Email ID / Mobile Number
            </Text>
            <input
              name="emailid"
              placeholder="johndoe@gmail.com"
              className=" placeholder:text-gray-900 text-left text-sm w-full border-2 p-[20px] rounded-2xl"
              wrapClassName="border border-gray-600 border-solid mt-2.5 w-full"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <Text
              className="text-gray-900 text-sm"
              size="txtMontserratRegular14"
            >
              Password
            </Text>
            <input
              name="passwordid"
              placeholder="*******"
              className=" placeholder:text-gray-900 text-left text-sm w-full border-2 p-[20px] rounded-2xl"
              wrapClassName="border border-gray-600 border-solid mt-2.5 w-full"
              type="pass"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <Text
              className="leading-[20.00px] mt-3.5 text-gray-900 text-sm"
              size="txtMontserratRegular14"
            >
              <span className="text-gray-900 font-montserrat text-left font-normal">
                By Continuing, I agree to the{" "}
              </span>
              <span className="text-blue_gray-800 font-montserrat uppercase text-left font-semibold">
                Terms of Use
              </span>
              <span className="text-gray-900 font-montserrat text-left font-normal">
                {" "}
              </span>
              <span className="text-gray-900 font-montserrat text-left font-normal">
                and
              </span>
              <span className="text-gray-900 font-montserrat text-left font-normal">
                {" "}
              </span>
              <span className="text-blue_gray-800 font-montserrat uppercase text-left font-semibold">
                <>
                  Privacy
                  <br />
                  Policy
                </>
              </span>
            </Text>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[420px] sm:min-w-full mt-[18px] text-center text-xl uppercase"
              shape="round"
              color="blue_gray_700"
              onClick={() => logInWithEmailAndPassword(email, password)}
              >
              Login
            </Button>
            <Line className="bg-white-A700 h-px mt-6 w-full" />
            <button
              className="!text-gray-900 border border-solid border-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[417px] sm:min-w-full md:ml-[0] ml-[3px] mt-[23px] text-base text-center uppercase rounded-2xl"
              size="txtMontserratExtraBold32"
              color="white_A700 "
              
            >
                <button onClick={props.toggleSignupPopup} >Create a New Account</button>              
            
            </button>
            <div className="bg-white-A700 border border-solid border-white-A700 h-[42px] md:ml-[0] ml-[3px] mt-4 rounded w-full"></div>
          </div>
        </div>
      </div>



    </>
  );
};

export default Login;