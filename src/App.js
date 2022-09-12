import { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageUpload from "./components/ImageUpload";
import PhotoFrame from "./components/PhotoFrame";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  const [file, setFile] = useState(null);

  return (
    <BrowserRouter>
      {/* NavBar */}
      <NavBar setFile={setFile} />
      <Routes>
        {/* Upload Image */}
        <Route
          path='/'
          element={<ImageUpload file={file} setFile={setFile} />}
        />
        {/* Add Frame to the image */}
        <Route path='/frame' element={<PhotoFrame file={file} />} />

        {/* Add Download Button */}

        {/* PrivacyPolicy Page */}
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
