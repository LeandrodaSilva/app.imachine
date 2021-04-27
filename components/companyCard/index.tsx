import Card from "../card";
import styled from "styled-components";
import {Factory} from "../../pages/api/factory/list";
import {Button} from "@material-ui/core";
import {Add, Delete, EditTwoTone} from "@material-ui/icons";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
  min-height: 200px;
  flex-wrap: wrap;
  border-right: 3px solid transparent;

  &:hover {
    border-right: 3px solid black;
    border-radius: 4px;
    
    button {
      opacity: 1;
      transition: opacity ease-in-out 0.3s;
    }
  }

  button {
    opacity: 0;
  }

  button:hover {
    opacity: 0.3;
  }
`

const ImageContainer = styled.div`
  flex: 2;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  padding-bottom: 8px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CardBody = styled.div`
  flex: 4;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  
  h3 {
    padding-left: 10px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: start;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`

function CompanyCard(props: Factory) {
  const {
    factory_id = undefined,
    factory_image = undefined,
    factory_name = undefined,
  } = props

  return (
    <>
      <Row>
        <Card>
          <Container>
            <ImageContainer>
              {factory_image && <img src={factory_image} alt="Imagem da fábrica" height="100" width="100"/>}
            </ImageContainer>
            <CardBody>
              <h3>{factory_name}</h3>
              <ButtonGroup>
                {/*<Button style={{backgroundColor: "#2d8d00", color: "white", marginBottom: "4px"}}><Add /></Button>*/}
                <Button style={{backgroundColor: "#272938", color: "white", marginBottom: "4px"}}><EditTwoTone/></Button>
                <Button style={{backgroundColor: "#a10000", color: "white", marginBottom: "4px"}}><Delete/></Button>
              </ButtonGroup>
            </CardBody>
          </Container>
        </Card>
      </Row>
    </>
  )
}

export default CompanyCard
