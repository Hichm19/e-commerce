import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import styles from "./Quantité.module.css"
import PropTypes from "prop-types";

function Quantité({ajouté,diminué,quantity}){

    
  return (
    <div>
        <div>
            <h3>Quantité</h3>
            <div className= {styles.increment}>
                 <div className={styles.moins} onClick={diminué}><GrSubtractCircle /></div>
                 <span className="valeur">{quantity}</span>
                 <div className={styles.plus} onClick={ajouté}><IoIosAddCircleOutline /></div>
            </div>
        </div>
    </div>
  )
}

Quantité.propTypes = {
  quantity: PropTypes.number.isRequired,
  ajouté: PropTypes.func.isRequired,
  diminué: PropTypes.func.isRequired,
};

export default Quantité
