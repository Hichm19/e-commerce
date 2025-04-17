import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from "./components/Pages/Acceuil/Acceuil";
import Product from "./components/Pages/Product/Product.jsx";
import Marques from "./components/Pages/Marques/Marques.jsx";
import Propos from "./components/Pages/Propos/Propos.jsx";
import Contact from "./components/Pages/Contact/Contact.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Pages/FooterPage/Footer.jsx";
import Pagepanier from "./components/Pages/Page panier/Pagepanier.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [NbrArticle, setNbrArticle] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setNbrArticle((prev) => prev + product.quantity);
  };

  const removeFromCart = (index) => {
    setNbrArticle((prev) => prev - cart[index].quantity);
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
    setNbrArticle(0);
  };

  return (
    <Router>
      <Navbar NbrArticle={NbrArticle} />
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route 
          path="/" 
          element={
            <>
              <div id="accueil"><Acceuil /></div>
              <div id="produit"><Product addToCart={addToCart} /></div>
              <div id="marque"> <Marques/> </div>
              <div id="a-propos"><Propos /></div>
              <div id="contact"><Contact /></div>
              <div id="footer"><Footer/></div>
            </>
          } 
        />
       
        {/* Route pour la page panier */}
        <Route 
          path="/panier" 
          element={
            <Pagepanier
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;