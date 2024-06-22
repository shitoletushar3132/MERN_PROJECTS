import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Destinations from "./components/Destinations/Destinations.jsx";
import Plan from "./components/Plan/Plan.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Detail from "./components/Detail/Details.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />}></Route>
      <Route path="/planYourTrip" element={<Plan />}></Route>
      <Route path="/gallary" element={<Gallery />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/:name/:id" element={<Detail />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
