import {
  Button as ButtonMaterialUI,
  ButtonBaseTypeMap,
} from "@material-ui/core";
import styles from "./styles.module.css";

function Button(props) {
  return (
    <>
      <ButtonMaterialUI className={styles.button} {...props}>
        {props.children}
      </ButtonMaterialUI>
    </>
  );
}

export default Button;
