import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ElementType, FC, ReactNode, useEffect, useState } from "react";

const Container = styled.div`
  width: calc(100% - 50px);
  display: flex;
  align-items: center;
  justify-content: stretch;
  height: 100%;
`;

const Items = styled.div`
  height: 100%;
  flex: 4;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  color: black;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  flex: none;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  pointer-events: none;

  img {
    width: 300px;
    height: auto;
    object-fit: cover;
  }
`;

const ArrowButton = styled.button`
  flex: 1;
  height: 50px;
  width: 30px;
  background-color: rgba(0, 0, 0, 0.64);
  border: 1px solid rgba(255, 255, 255, 0.13);
  transition: opacity ease-in-out 0.3s;
  color: white;
  margin: 3px;

  &:focus {
    background-color: #272b41;
  }

  opacity: 0;

  &.active {
    opacity: 1;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;

const ArrowLeft = styled(ArrowButton)`
  border-radius: 100%;
  height: 40px;
  width: 40px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowRight = styled(ArrowButton)`
  border-radius: 100%;
  height: 40px;
  width: 40px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slide: FC<{
  id: string;
  children: Array<ReactNode>;
  itemWidth?: string;
}> = (props) => {
  const { children, id, itemWidth } = props;
  const [count, setCount] = useState(children.length);

  const handleScroll = (evt) => {
    if (evt.deltaY > 0) {
      console.log("up");
      evt.target.scrollBy(width(), 0);
      if (count < children.length) setCount(count + 1);
    } else {
      console.log("down");
      evt.target.scrollBy(-width(), 0);
      if (count > 0) setCount(count - 1);
    }
  };

  const width = () => document.getElementById(id).offsetWidth;

  const handleClickLeft = (evt) => {
    document.getElementById(id)?.scrollBy(-width(), 0);
    if (count > 0) setCount(count - 1);
  };

  const handleClickRight = (evt) => {
    document.getElementById(id)?.scrollBy(width(), 0);
    if (count < children.length) setCount(count + 1);
  };

  return (
    <>
      <Container>
        <div>
          <ArrowLeft
            className={count > 0 ? "active" : ""}
            type="button"
            onClick={handleClickLeft}
          >
            <ArrowBackIos />
          </ArrowLeft>
        </div>

        <Items id={id} onWheel={handleScroll}>
          {children.map((row, i) => (
            <Item key={i} style={{ width: itemWidth || "100%" }}>
              {row}
            </Item>
          ))}
        </Items>

        <div>
          <ArrowRight
            className={count < children.length ? "active" : ""}
            type="button"
            onClick={handleClickRight}
          >
            <ArrowForwardIos />
          </ArrowRight>
        </div>
      </Container>
    </>
  );
};

export default Slide;
