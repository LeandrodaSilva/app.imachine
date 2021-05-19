import styles from "./styles.module.scss";
import { FC } from "react";

const Column: FC = (props) => {
  const { children } = props;
  return (
    <div className={styles.component} {...props}>
      {children}
    </div>
  );
};

export default Column;
