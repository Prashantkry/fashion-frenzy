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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="adminDashboard/" element={<AdminDashboard />}/>
      <Route path="contact" element={<Contact />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <RouterProvider router={router} />
  // </React.StrictMode>

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
