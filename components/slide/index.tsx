import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ElementType, FC, ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.scss";
interface SlideProps {
  id: string;
  children: Array<ReactNode>;
  itemWidth?: string;
}

const Slide: FC<SlideProps> = (props) => {
  const { children, id, itemWidth } = props;
  const [count, setCount] = useState(0);

  const handleScroll = (evt) => {
    if (evt.deltaY > 0) {
      if (count < children.length - 1) {
        evt.target.scrollBy(width(), 0);
        setCount(count + 1);
      }
    } else {
      if (count > 0) {
        evt.target.scrollBy(-width(), 0);
        setCount(count - 1);
      }
    }
  };

  const width = () => {
    let element = document.getElementById(id);
    return element.offsetWidth;
  };

  const handleClickLeft = (evt) => {
    if (count > 0) {
      document.getElementById(id)?.scrollBy(-width(), 0);
      setCount(count - 1);
    }
  };

  const handleClickRight = (evt) => {
    if (count < children.length - 1) {
      document.getElementById(id)?.scrollBy(width(), 0);
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <button
            className={
              count > 0
                ? `${styles.arrowButton} ${styles.active}`
                : styles.arrowButton
            }
            type="button"
            onClick={handleClickLeft}
          >
            <ArrowBackIos />
          </button>
        </div>

        <ul className={styles.items} id={id} onWheel={handleScroll}>
          {children.map((row, i) => (
            <li
              className={styles.item}
              key={i}
              style={{ width: itemWidth || "100%" }}
            >
              {row}
            </li>
          ))}
        </ul>

        <div>
          <button
            className={
              count < children.length - 1
                ? `${styles.arrowButton} ${styles.active}`
                : styles.arrowButton
            }
            type="button"
            onClick={handleClickRight}
          >
            <ArrowForwardIos />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slide;
