import React from "react";
import MainLayout from "./Layouts/MainLayout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import EcoTipsPage from "./Pages/EcoTipsPage";
import ContactPage from "./Pages/ContactPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/eco-tips" element={<EcoTipsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
