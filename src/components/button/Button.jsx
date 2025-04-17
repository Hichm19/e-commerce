import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ Nombutton }) => {
    return (
        <button className={styles.button}>{Nombutton}</button>
    );
};

Button.propTypes = {
    Nombutton: PropTypes.string.isRequired, // La prop doit être une chaîne et obligatoire
};

export default Button;
