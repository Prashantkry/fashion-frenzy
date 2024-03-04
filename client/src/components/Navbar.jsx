import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Function to handle sign out

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("UserId");
  };

  useEffect(() => {
    const UserId = localStorage.getItem("UserId");
    // console.log(UserId);
    setIsLoggedIn(!!UserId);
    // window.location.href("/signIn");
  });
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-gray-950 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <div className="flex flex-shrink-0 items-center">
              <Link
                className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-xl lg:text-2xl tracking-wide"
                to="#"
              >
                Fashion
                <span className="bg-clip-text ml-2 text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                  Frenzy
                </span>
              </Link>
            </div>
          </Link>
          <div className="flex items-center lg:order-2">
            {isLoggedIn ? (
              <button
                className="text-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/signIn"
                className="text-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Sign In
              </Link>
            )}
            <Link to="/cart" className="text-white w-fit font-medium rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-[23px] h-[23px]"
              >
                <path
                  fill="#e3e3e3"
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                />
              </svg>
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-500" : "text-gray-500"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/product"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-500" : "text-gray-500"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/adminDashboard"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-500" : "text-gray-500"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Profile
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/github"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-500" : "text-gray-500"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Features
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-500" : "text-gray-500"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
