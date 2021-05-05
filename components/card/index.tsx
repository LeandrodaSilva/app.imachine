import styled from "styled-components";

interface CardProps {
  title?: string,
  children?: any
}

const Container = styled.div`
  display: inline-grid;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  //box-shadow: 0 1px 1px rgba(0,0,0,0.10), 0 1px 1px rgba(0,0,0,0.12);

  //&:hover {
  //  box-shadow: 0 5px 5px rgba(0,0,0,0.30), 0 5px 5px rgba(0,0,0,0.22);
  //}

  .body {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: auto;
  }
`

const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  font-size: 16px;
`

const Body = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: auto;
`

function Card(props: CardProps) {
  const {
    children,
    title
  } = props;

  return (
    <>
      <Container>
        {
          title &&
          <Header>
            <span>{title}</span>
          </Header>
        }
        <Body>
          {children}
        </Body>
      </Container>
    </>
  )
}

export default Card
