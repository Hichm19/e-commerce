import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import styles from "./Footer.module.css"
function Footer() {
     
        const scrollToSection = (id) => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" }); 
            }
        };
  return (
    <div className={styles.container}>
        <div className={styles.container1}>
                <div className={styles.text}>
                    <h2>Electronic System</h2>
                    <p>Lorem ipsum dolor sit amet <br />
                        consectetur adipisicing elit. <br />
                        Impedit quasi perferendis sapiente <br />
                        cum eveniet. 
                    </p>
                </div>
                <div>
                    <div className={styles.navigation}>
                        <h2>Navigation</h2>
                        <nav>
                            <ul className={styles.NavLink}>
                                <li><a className={styles.active} onClick={() => scrollToSection("accueil")}>Home</a></li>
                                <li><a onClick={() => scrollToSection("produit")}>Products</a></li>
                                <li><a onClick={() => scrollToSection("a-propos")}>About</a></li>
                                <li><a onClick={() => scrollToSection("contact")}>Contact</a></li>
                            </ul>      
                        </nav>
                    </div>
                </div>
                <div className={styles.information}>
                    <h2>Information</h2>
                    <ul>
                        <li><span><FaMagnifyingGlassLocation /></span> Adresse : Carrefour Toyota, Cotonou, Bénin</li>
                        <li><span><BsFillTelephoneFill /></span> Téléphone : +229 97 12 34 56</li>
                        <li><span><MdAccessTimeFilled /></span> Horaires : Lundi - Samedi | 9h - 19h</li>
                    </ul>
                    
                </div>
                
        </div>
        <div className={styles.container2}>
            <p>copyright © 2025 tous droits réservés | Réalisé par <span>Hicham GABA</span> </p>
            <div>
                <ul>
                    <li> <a href="https://m.facebook.com/login/?locale=fr_FR"> <FaFacebook /> </a> </li>
                    <li> <a href="https://wa.me/qr/ZA252GIDVVJJH1"> <IoLogoWhatsapp /> </a> </li>
                    <li> <a href="https://twitter.com/"> <FaSquareXTwitter /> </a> </li>
                    <li> <a href="https://www.instagram.com/"> <FaInstagramSquare /> </a> </li>
                </ul>
            </div>
        </div>
        
    </div>

  )
}

export default Footer