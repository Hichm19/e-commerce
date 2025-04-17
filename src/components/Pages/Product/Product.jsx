import Card from "../../Card/Card.jsx";
import styles from "./Product.module.css"

function Product({addToCart}) {
  const produit = [
    { id: 1, product: "Casque Bluetooth", prix: 10.000, image: "src/assets/images/casque.png" },
    { id: 2, product: "Souris Gamer", prix: 10.000, image: "src/assets/images/souris.png" },
    { id: 3, product: "Clavier Mécanique", prix: 35000, image: "src/assets/images/pc.png" },
   
  ];

  const produitSecond= [
    { id: 4, product: "Appareil Photo", prix: 89.99, image: "src/assets/images/appareil_photo.png" },
    { id: 5, product: "PC Gamer", prix: 89.99, image: "src/assets/images/Pcportable.png" },
    { id: 6, product: "Smartphone Samsung", prix: 89.99, image: "src/assets/images/samsung.avif" },
  ]


  return (
    <div className={styles.container}>
      <h1>Nos Produits</h1>
      <div className={styles.produits}>
        <div style={{ display: "flex", gap: "20px", justifyContent: "space-evenly", flexWrap: "wrap" }}>
          {produit.map(({ id, product, prix, image }) => (
            <Card key={id} product={product} prix={prix} addToCart={addToCart} image={image} />
          ))}
        </div>
        <div style={{ display: "flex", gap: "20px", justifyContent: "space-evenly", flexWrap: "wrap", position:"relative", top:"30px" }}>
          {produitSecond.map(({ id, product, prix, image }) => (
            <Card key={id} product={product} prix={prix} addToCart={addToCart} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
