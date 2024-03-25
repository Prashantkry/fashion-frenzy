import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import NotFound from "./components/NotFound.jsx";
import SignIn from "./components/SignIn.jsx";
import Product from "./components/Product/Product.jsx";
import AdminDashboard from "./admin/AdminDashboard";
import SignUp from "./components/SignUp.jsx";

import { Provider } from "react-redux";
import Store from "./redux/Store.js";
import CheckOut from "./components/CheckOut.jsx";
import User from "./user/UserDashboard.jsx";

const role = localStorage.getItem("Role") === "true"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/product" element={<Product />} />
      {/* <Route path="adminDashboard/" element={<AdminDashboard />} />
      <Route path="user" element={<User />} /> */}
      <Route path="contact" element={<Contact />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="checkout" element={<CheckOut />} />
      {role ? (
        <Route path="/adminDashboard" element={<AdminDashboard />} />
      ) : (
        <Route path="/user" element={<User />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// const renderRoutes = () => {
//   if (role) {
//     return (
//       <Route path="/adminDashboard" element={<AdminDashboard />} />
//     );
//   } else {
//     return (
//       <Route path="/user" element={<User />} />
//     );
//   }
// };
// <React.StrictMode>
//   {/* <App /> */}
//   <RouterProvider router={router} />
// </React.StrictMode>

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router} >
      {/* {renderRoutes()} */}
    </RouterProvider>
  </Provider>
);
