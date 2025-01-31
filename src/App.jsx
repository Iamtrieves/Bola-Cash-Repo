import React from "react";
import { AuthProvider } from "./Components/auth";
import { PopUpProvider } from "./Components/PopUpContext";
import { LoadingProvider } from "./assets/context/LoadingAnimationContext";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <PopUpProvider>
        <LoadingProvider>
          <RouterProvider router={router} />
        </LoadingProvider>
      </PopUpProvider>
    </AuthProvider>
  );
};

export default App;
