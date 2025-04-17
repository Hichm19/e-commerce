import { useState } from "react";
import Quantité from "../Quantité/Quantité";
import styles from "./Card.module.css";

function Card({ product, prix, addToCart , image }) {
  // ✅ Chaque carte gère son propre état de quantité
  const [quantity, setQuantity] = useState(1);

  // ✅ Fonction pour augmenter la quantité
  const ajouté = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // ✅ Fonction pour diminuer la quantité
  const diminué = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const popup = () =>{
    alert("Vous avez ajouter un produit à votre panier")
    console.log("ajout")
  }

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="Produit" className={styles.images} />
      </div>
      <div className={styles.content}>
        <h2>{product}</h2>
        <p>Description rapide du produit.</p>
        <p className={styles.price}>Prix: {prix}€</p>
        
        {/*  Passe la quantité et les fonctions en props */}
        <Quantité quantity={quantity} ajouté={ajouté} diminué={diminué} />

        <button onClick={() => {
          console.log("Ajout au panier:", product, prix, "Quantité:", quantity);
          addToCart({ product, prix, quantity });  
          popup();
        }}>
          Ajouter au Panier
        </button>
      </div>
    </div>
  );
}

export default Card;
