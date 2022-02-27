import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ImageDetails from "./components/ImageDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:imageId" element={<ImageDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
