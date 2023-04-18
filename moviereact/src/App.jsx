import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";

function App() {
  return (
    <div className="App">
      <div>

        <Navbar />
        <Login />
        <Carousel />
        <Card />
        <Footer />
        {/* <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
