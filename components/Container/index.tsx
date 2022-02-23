import { FC } from "react";
import styles from "./container.module.css";

interface PropsContainer {
  children: JSX.Element[];
}

const Container: FC<PropsContainer> = ({ children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.childrenBox}>{children}</div>
    </div>
  );
};

export default Container;
