import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    > span {
      visibility: visible;
    }
  }
`;

const Body = styled.span`
  visibility: hidden;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  padding: 5px;
  border-radius: 6px;

  position: absolute;
  z-index: 1;

  width: 120px;
  top: 100%;
  left: 50%;
  margin-left: -90px;

  &:after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: 25px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
`;

function Tooltip(props: { title?: any; children?: any }) {
  const { title, children } = props;

  return (
    <>
      <Container>
        {title}
        <Body>{children}</Body>
      </Container>
    </>
  );
}

export default Tooltip;
