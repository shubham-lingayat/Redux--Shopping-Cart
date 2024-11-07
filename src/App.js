import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Componenets/Navbar";

function App() {
  return (
    <div>
      <nav>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/cart" element={<Cart/>}>Cart</Route>
        </Routes>
      </nav>
    </div>
  );
}

export default App;
