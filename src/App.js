// Importing necessary modules and components

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
       {/* Wrapping the entire application with ShopContextProvider to provide API data to components */}
      <ShopContextProvider>
        {/* Setting up React Router for navigation */}
        <Router>
          {/* Rendering the Navbar component */}
          <Navbar />
          <Routes>
            {/* Defining routes for different pages */}
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
