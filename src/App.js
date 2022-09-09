import { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageUpload from "./components/ImageUpload";
import PhotoFrame from "./components/PhotoFrame";

const App = () => {
  const [file, setFile] = useState(null);

  return (
    <BrowserRouter>
      {/* NavBar */}
      <NavBar />
      <Routes>
        {/* Upload Image */}
        <Route
          path='/'
          element={<ImageUpload file={file} setFile={setFile} />}
        />
        {/* Add Frame to the image */}
        <Route path='/frame' element={<PhotoFrame file={file} />} />
        {/* Add Download Button */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
