import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './Navbar.css'


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(false);
  // Function to handle sign out

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("UserId");
    window.location.href = "/signIn";
  };

  useEffect(() => {
    const UserId = localStorage.getItem("UserId");
    const Role = localStorage.getItem("Role");
    // console.log(UserId,Role);
    setIsLoggedIn(!!UserId);
    setRole(Role === "true");
    // window.location.href("/signIn");
  });

  const cartLength = useSelector((state) => state.cart.cartLength);
  console.log(cartLength);

  const [showHamburger, setShowHamburger] = useState("slide-left")
  const handleHamBurger = () => {
    if (showHamburger === "slide-right") {
      setShowHamburger("slide-left")
    }
    else {
      setShowHamburger("slide-right")
    }
  }

  // const cartItems = useSelector((state) => state.cart.cart);  // when using redux
  return (
    <div className="flex overflow-x-hidden flex-wrap place-items-center xl:static md:static sticky top-0 z-50">
      <section className="relative mx-auto">
        <nav className="flex justify-between  bg-[#DBF1F8] text-[#525252] w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link to="/" className="text-3xl font-bold font-heading"> Fashion
              <span className="bg-clip-text ml-2 text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                Frenzy
              </span></Link>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><NavLink to={"/"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>Home</NavLink></li>
              <li><NavLink to={"/product"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>Shop</NavLink></li>
              {isLoggedIn && (
                <li>
                  <NavLink
                    to={role ? "/adminDashboard" : "/user"}
                    className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}
                  >
                    Profile
                  </NavLink>
                </li>
              )}
              <li><NavLink to={"/features"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>Features</NavLink></li>
              <li><NavLink to={"/contact"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>Contact Us</NavLink></li>
              <li>
                {isLoggedIn ? (
                  <button
                    className="text-gray-800 hover:text-blue-600 font-medium rounded-lg text-sm  border-0 mr-2 focus:outline-none"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                ) : (
                  <NavLink to={"/signIn"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>
                    Sign In
                  </NavLink>)}
              </li>
              {isLoggedIn &&
                <li><NavLink to={"/checkout"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-[23px] h-[23px]"
                  >
                    <path
                      fill="#00000"
                      d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    />
                  </svg>
                  <p className="absolute text-gray-900 text-xs -mt-8 ml-7">
                    {cartLength}
                  </p>
                </NavLink>
                </li>
              }
            </ul>
          </div>
          <div className="navbar-burger self-center mr-12 xl:hidden md:hidden" onClick={() => { handleHamBurger() }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </nav>
        {<div className={`xl:hiddn md:hidden block fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform  bg-[#DBF1F8] text-[#525252] shadow-lg ${showHamburger}`}>
          <div className=" py-4 flex flex-col h-full justify-between">
            <ul className="  flex flex-col px-6 mx-auto font-semibold font-heading space-x-12 gap-5 justify-start w-full">
              <li className='!m-0'><NavLink to={"/"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>Home</NavLink></li>
              <li className='!m-0'><NavLink to={"/product"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>Shop</NavLink></li>
              <li className='!m-0'>
                <NavLink
                  to={isLoggedIn ? (role ? "/adminDashboard" : "/user") : "/signIn"}
                  className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}
                >
                  Profile
                </NavLink>
              </li>
              <li className='!m-0'><NavLink to={"/features"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>Features</NavLink></li>
              <li className='!m-0'><NavLink to={"/contact"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>Contact Us</NavLink></li>
              {isLoggedIn ? (
                <li className='!m-0'>
                  <button
                    className="text-gray-800 hover:bg-gray-300 focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </li>
              ) : (
                <li className='!m-0'><NavLink to={"/signIn"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>Sign In</NavLink></li>
              )}
              {isLoggedIn &&
                <li className='!m-0'>
                  <NavLink to={"/checkout"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-600" : ""}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-[23px] h-[23px]"
                    >
                      <path
                        fill="#00000"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                      />
                    </svg>
                    <p className="absolute text-gray-900 text-xs -mt-8 ml-7">
                      {cartLength}
                    </p>
                  </NavLink>
                </li>
              }
            </ul>
            {/* <div className="bottom border-t-2 border-[#E0E0E0]  px-6 pt-4 flex  gap-4 items-center">
              <img src={ProfileIcon} alt="" />
              <div className="profile">
                <span>Name Here</span>
              </div>
            </div> */}
          </div>
        </div>}
      </section>
    </div>
  )
}