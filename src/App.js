import "./App.css";

import Header from "./components/header.js";
import Home from "./components/Home.js";
import Footer from "./components/footer.js";
import Praktisch from "./components/Praktisch.js";
import Overons from "./components/OverOns.js";
import Contact from "./components/Contact.js";
import Producties from "./components/Producties.js";
import Reservaties from "./components/Reservaties.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col h-screen">
        <Header />
        <div className="Content flex-grow">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-sky-700"
              }
            ></Route>
            <Route path="Praktisch" element={<Praktisch />}></Route>
            <Route path="OverOns" element={<Overons />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="Producties" element={<Producties />}></Route>
            <Route path="Reservaties" element={<Reservaties />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
