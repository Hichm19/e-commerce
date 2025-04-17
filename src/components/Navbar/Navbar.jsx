import { useState, useEffect } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = ({ NbrArticle = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("accueil");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Détermine le lien actif en fonction du chemin
        const path = location.pathname;
        if (path === '/') setActiveLink("accueil");
        else if (path === '/products') setActiveLink("produit");
        else if (path === '/about') setActiveLink("a-propos");
        else if (path === '/contact') setActiveLink("contact");
        else if (path === '/panier') setActiveLink("panier");
    }, [location]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (section) => {
        setActiveLink(section);
        setIsOpen(false);
        if (section === "panier") {
            navigate('/panier');
        } else {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <header>
            <div className={styles.container}>
                <nav>
                    <div className={styles.logo}>
                        <h2>Electronic System</h2>
                    </div>
                    <ul className={`${styles.NavLink} ${isOpen ? styles.active : ""}`}>
                        <li><button 
                            className={activeLink === "accueil" ? styles.active : ""} 
                            onClick={() => handleNavClick("accueil")}
                        >Home</button></li>
                        <li><button 
                            className={activeLink === "produit" ? styles.active : ""} 
                            onClick={() => handleNavClick("produit")}
                        >Products</button></li>
                        <li><button 
                            className={activeLink === "a-propos" ? styles.active : ""} 
                            onClick={() => handleNavClick("a-propos")}
                        >About</button></li>
                        <li><button 
                            className={activeLink === "contact" ? styles.active : ""} 
                            onClick={() => handleNavClick("contact")}
                        >Contact</button></li>
                        <li><button 
                            className={activeLink === "panier" ? styles.active : ""} 
                            onClick={() => handleNavClick("panier")}
                            data-count={NbrArticle > 0 ? NbrArticle : ""}
                        ><FaShoppingCart /></button></li>
                    </ul>
                    <div className={styles.icon} onClick={toggleMenu}>
                        <FaBars />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;