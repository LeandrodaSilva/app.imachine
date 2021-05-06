import styled from "styled-components";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";

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
  transition: opacity ease-in-out 0.5s;
  color: white;
  margin: 3px;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &:focus {
    background-color: #272b41;
  }
`

const ArrowLeft = styled(ArrowButton)`
  border-radius: 100% 0 0 100%;
`

const ArrowRight = styled(ArrowButton)`
  border-radius: 0 100% 100% 0;
`

interface SlideProps {
  id: string
  children: Array<any>;
}

function Slide(props: SlideProps) {
  const { children, id } = props;

  const handleScroll = (evt) => {
    if (evt.deltaY > 0) {
      console.log("up");
      evt.target.scrollBy(300, 0);
    } else {
      console.log("down");
      evt.target.scrollBy(-300, 0);
    }
  };

  const handleClickLeft = evt => {
    document.getElementById(id)?.scrollBy(-300, 0);
  }

  const handleClickRight = evt => {
    document.getElementById(id)?.scrollBy(300, 0);
  }

  return (
    <>
      <Container>
        <div>
          <ArrowLeft type="button" onClick={handleClickLeft}>
            <ArrowBackIos/>
          </ArrowLeft>
        </div>
        <Items id={id} onWheel={handleScroll}>
          {children.map((row) => (
            <Item>{row}</Item>
          ))}
        </Items>
        <div>
          <ArrowRight type="button" onClick={handleClickRight}>
            <ArrowForwardIos/>
          </ArrowRight>
        </div>
      </Container>
    </>
  );
}

export default Slide;
