import Panier from '../../panier/panier';
import Navbar from '../../Navbar/Navbar';

function PagePanier({ cart, removeFromCart, clearCart }) {
  return (
    
    <div>
     <p>Bonjour</p>
      <Navbar NbrArticle={cart.reduce((total, item) => total + item.quantity, 0)} />
      <Panier 
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}

export default PagePanier;