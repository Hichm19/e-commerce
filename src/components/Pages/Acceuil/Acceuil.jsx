import styles from "./Acceuil.module.css"
import { Navbar } from "../../Navbar/Navbar.jsx"

function Acceuil({ NbrArticle , togglePanier }) {
  return (
    <div>
            
            <div >
                <Navbar  NbrArticle={NbrArticle} togglePanier={togglePanier}/>
                <div className={styles.container}>
                    <div className= {styles.text}>
                        <h1>Electronic System</h1>
                        <p>Découvrez nos derniers produits et achetez en toute sécurité</p>
                        <button>Voir nos produits</button>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.image}>
                            <img src="src/assets/images/casque.png" alt="Produit" className={styles.images} />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Acceuil ;