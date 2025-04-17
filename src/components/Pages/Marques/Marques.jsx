
import styles from "./Marques.module.css";

function Marques() {
  return (
    <div>
        <div className={styles.logos}>
          <div className={styles.LogoSlide}>
            <img src="src/assets/images/logo-1.png" alt="Logo 1" />
            <img src="src/assets/images/logo2.png" alt="Logo 2" />
            <img src="src/assets/images/logo3.png" alt="Logo 3" />
            <img src="src/assets/images/logo_4.png" alt="Logo 4" />
            <img src="src/assets/images/logo_5.png" alt="Logo 5" />
          </div>
          <div className={styles.LogoSlide}>
            <img src="src/assets/images/logo-1.png" alt="Logo 1" />
            <img src="src/assets/images/logo2.png" alt="Logo 2" />
            <img src="src/assets/images/logo3.png" alt="Logo 3" />
            <img src="src/assets/images/logo_4.png" alt="Logo 4" />
            <img src="src/assets/images/logo_5.png" alt="Logo 5" />
          </div>
        </div>
    </div>
  )
}

export default Marques;