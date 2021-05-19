import styles from "./styles.module.scss";
import { FC } from "react";

const Content: FC = (props) => {
  const { children } = props;
  return (
    <div className={styles.component} {...props}>
      {children}
    </div>
  );
};

export default Content;
