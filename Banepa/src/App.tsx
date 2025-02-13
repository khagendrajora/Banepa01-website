import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout/Layout";
import { LandingPage } from "./Pages/LandingPage";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
