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
import ContactPage from "./Pages/ContactPage";
import SignUpPage from "./Pages/SignUpPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
