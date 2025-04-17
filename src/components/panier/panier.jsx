import styles from "./Panier.module.css";
import PropTypes from "prop-types";

function Panier({ cart, removeFromCart, clearCart, onClose  }) {
  return (
    <div className={styles.panier}>
      <h2>Mon Panier</h2>
      <button className="close-btn" onClick={onClose}>×</button>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          <table  >
            <thead>
              <tr>
                <th>Produit</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item,index)=>(
                <tr key={index}>
                  <td> {item.product} </td>
                  <td display="flex" align="center"> {item.quantity} </td>
                  <td> {item.prix} X {item.quantity} </td>
                  <td>
                    <button onClick={()=>removeFromCart(index)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total: {cart.reduce((total, item) => total + item.prix * item.quantity, 0)}  FCFA</p>
          <button onClick={clearCart}>Vider le panier</button>
        </>
      )}
    </div>
  );
}

Panier.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string.isRequired,
      prix: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired, // Ajout de la validation de `quantity`
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default Panier;
