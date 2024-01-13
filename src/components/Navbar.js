import { useState ,useEffect} from "react"
import "../styles/navbar.css"
import { Link } from "react-router-dom";
import { Img, Text } from "components";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import LoginSignupPopup from "./LoginSignupPopup";
import SignupPopup from "./SignupPopup";
import { auth, signInWithEmailAndPassword, signInWithGoogle, logout } from "./firebase_config";
import { useAuthState } from "react-firebase-hooks/auth";
import Dashboard from "./Dashboard";
import { db } from "./firebase_config";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false); // Add state for Signup popup
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("")
  const navigate = useNavigate();

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  }

  const fetchUserName = async () => {
    console.log("the fetchUserName just got fired");
    try {
      const q = query(collection(db, "Users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      if(data.name && !error) {


        setName(data.name);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    if (loading) return;
    if (user) {
      fetchUserName();
    }
  }, [user,loading]);

  // useEffect(() => {
  //   if (loading) return;
  
  //   const fetchData = async () => {
  //     if (user) {
  //       await fetchUserName();
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  const isAdmin = user && user.email === 'credpolis@credpolis.com';
  

  const toggleSignupPopup = () => {
    setShowSignupPopup(!showSignupPopup);
    setShowLoginPopup(false); // Close LoginPopup when opening SignupPopup
  };


  

  return (
    <nav className="navigation sticky top-0 z-10">
      <a href="/" className="brand-name flex justify-between px-0">
        <Img className="flex h-[30px] w-[27px] sm:h-[20px]"
            src="images/credpolissym.svg"
            alt='logo'/>
        <Img className="flex h-[30px] sm:h-[20px]"
            src="images/Credpolisname2.svg"
            alt='logo'/>
      </a>


      
      <div className="user">
        <Text className=" sm:block sm:px-[100px] hidden">{name}</Text>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          {/* hamburger svg code... */}
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="90" height="10" rx="5" ry="5" fill="#39c15f"></rect> {/* Rounded corners */}
            <rect y="20" width="80" height="10" rx="5" ry="5" fill="#39c15f"></rect> {/* Rounded corners */}
            <rect y="40" width="70" height="10" rx="5" ry="5" fill="#39c15f"></rect> {/* Rounded corners */}
          </svg>
        </button>
      </div>
      
      
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
        {isAdmin && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to={"/emicalculator"}>EMI Calculator</Link>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
        
          <li>{(user && name!="" && !error) ? 
              <div className= 'user flex  sm:block gap-10 sm:bg-white-A700_01'>
               
                  <Text className="sm:hidden ">{name}</Text>
                  <li className="navigation-menu">
                    <span onClick={logout}>Logout</span>
                  </li>
                
              </div>
              :
              
              <li>
                <a className="text-#fdfdfd "href="#" onClick={toggleLoginPopup}>
                  Login
                </a>
              </li>
          }</li>
  
            
        </ul>
      </div>
      {showLoginPopup && (
        <LoginSignupPopup
          text="Login Popup"
           toggleSignupPopup={toggleSignupPopup} 
          closePopup={() => {
            setShowLoginPopup(false);
          }
          
        }
        >
          {/* Render your Login component inside the Popup */}
        </LoginSignupPopup>
      )}
         {showSignupPopup &&
          <SignupPopup closeSignupPopup={() => setShowSignupPopup(false)} />}
    </nav>
  );
}