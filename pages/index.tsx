import Layout from "../components/layout";
import Page from "../components/page";
import styled from "styled-components";
import { setUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
import { User, Warning } from "../types";
import SidebarRight from "../components/sidebarRight";
import { openMenu } from "../redux/actions/sidebarRightActions";
import Card from "../components/card";
import { FiberManualRecordTwoTone, WarningTwoTone } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Imachine from "../services/imachine";
import Link from "next/link";
import Line from "../components/charts/line";
import Slide from "../components/slide";
import TableLoading from "../components/loadingTable";
import dayjs from "dayjs";
import Img from "next/image";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 40px;
`;

const Content = styled.div`
  height: auto;
  display: block;
`;

const WarningView = styled.div`
  padding: 0 5px;
`;

const WarningViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;

  h2,
  span {
    font-size: 28px;
    font-weight: lighter;
  }

  span {
    color: red;
  }
`;

const WarningViewBody = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
`;

const WarningViewBodySensor = styled.div`
  color: white;
  padding-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .body {
    height: auto;
    border-radius: 8px;
    background-color: #0a213a;
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
  }

  .footer {
    padding-top: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const Table = styled.table`
  width: 100%;
  padding-left: 10px;
  margin: 20px;
  min-height: 100px;

  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(189, 189, 189, 0.2);
    width: available;
    padding: 4px;

    &:hover {
      cursor: pointer;
      background-color: rgba(180, 180, 180, 0.2);
    }
  }
`;

const Dot = styled.span`
  padding-right: 10px;
`;

const UnidadeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Unidade = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;
  width: 150px;
  margin: 0 10px;
  border-radius: 5px;
  font-size: 8px;
  padding: 0 10px;

  .image {
    border-radius: 5px;
    width: 150px;
  }

  .info {
    margin-top: 5px;

    p.name {
      font-size: 16px;
    }

    p.status {
      font-size: 12px;
      color: grey;
    }

    div.alert {
      padding-top: 5px;

      p {
        font-size: 10px;
      }

      p.danger {
        color: red;
      }

      p.warning {
        color: orange;
      }
    }
  }
`;

function Index(props: { user: User; openMenu: Function }) {
  const { user, openMenu } = props;
  const [arrWarnings, setArrWarnings] = useState<Array<Warning> | []>([]);
  const [selectedWarning, setSelectedWarning] = useState<Warning | undefined>(
    undefined
  );
  const [mounted, setMounted] = useState(false);

  const renderWarningViewItem = () => {
    return (
      <WarningViewBodySensor>
        <div>
          <div className="header">
            <p>Mancal dianteiro motor</p>
            <span>80%</span>
          </div>

          <div className="body">{mounted && <Line />}</div>

          <div className="footer">
            <Link href="/sensor/1">
              <a>Ver mais</a>
            </Link>
          </div>
        </div>
      </WarningViewBodySensor>
    );
  };

  const renderWarningView = () => {
    return (
      <WarningView>
        <WarningViewHeader>
          <h2>{selectedWarning.name}</h2>
          <span>
            <WarningTwoTone color={"error"} /> 10%
          </span>
        </WarningViewHeader>
        <WarningViewBody>
          <Slide id={"slide-items-view"}>
            <div>
              {renderWarningViewItem()}
              {renderWarningViewItem()}
            </div>

            <div>
              {renderWarningViewItem()}
              {renderWarningViewItem()}
            </div>

            <div>
              {renderWarningViewItem()}
              {renderWarningViewItem()}
            </div>

            <div>
              {renderWarningViewItem()}
              {renderWarningViewItem()}
            </div>

            <div>
              {renderWarningViewItem()}
              {renderWarningViewItem()}
            </div>
          </Slide>
        </WarningViewBody>
      </WarningView>
    );
  };

  const renderWarnings = (warning: Warning, i: number) => {
    let color:
      | "inherit"
      | "primary"
      | "secondary"
      | "action"
      | "disabled"
      | "error";

    switch (warning.color) {
      case "amarelo":
        color = "error";
        break;
      case "azul":
        color = "primary";
        break;
      case "verde":
        color = "action";
        break;
      case "vermelho":
        color = "error";
        break;
    }

    return (
      <tr
        key={i}
        onClick={() => {
          setSelectedWarning(warning);
          openMenu();
        }}
      >
        <td>
          <Dot>
            <FiberManualRecordTwoTone color={color} fontSize={"inherit"} />
          </Dot>{" "}
          {warning.name}
        </td>
        <td>{warning.factory}</td>
        <td>{warning.sector}</td>
        <td>{dayjs(warning.timestamp).format("D/M/YYYY H:m:s")}</td>
      </tr>
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      Imachine.machine.warnings().then((value) => setArrWarnings(value));
    }
  }, [mounted]);

  return (
    <>
      <Layout>
        <Page title={user.company.company_name || "Dashboard"}>
          <Content>
            <Row>
              <Slide id={"slide-items"} itemWidth="150px">
                {/* <UnidadeContainer> */}
                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory.jpeg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert">
                      <p className="danger">4% máquinas em risco</p>
                      <p className="warning">4% máquinas em alerta</p>
                    </div>
                  </div>
                </Unidade>

                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory2.jpg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">São Paulo</p>
                    <p className="status">Em risco</p>
                    <div className="alert">
                      <p className="warning">4% máquinas em alerta</p>
                    </div>
                  </div>
                </Unidade>

                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory3.jpg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert"></div>
                  </div>
                </Unidade>

                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory.jpeg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert"></div>
                  </div>
                </Unidade>

                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory.jpeg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert"></div>
                  </div>
                </Unidade>

                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory.jpeg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert"></div>
                  </div>
                </Unidade>
                {/* </UnidadeContainer> */}

                {/* <UnidadeContainer> */}
                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory.jpeg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert"></div>
                  </div>
                </Unidade>

                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory.jpeg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert"></div>
                  </div>
                </Unidade>

                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory.jpeg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert"></div>
                  </div>
                </Unidade>

                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory.jpeg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert"></div>
                  </div>
                </Unidade>

                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory.jpeg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert"></div>
                  </div>
                </Unidade>

                <Unidade>
                  <Img
                    className="image"
                    src="/img/factory.jpeg"
                    objectFit={"cover"}
                    width="auto"
                    height={100}
                  />

                  <div className="info">
                    <p className="name">Campinas</p>
                    <p className="status">Em risco</p>
                    <div className="alert"></div>
                  </div>
                </Unidade>
                {/* </UnidadeContainer> */}
              </Slide>
            </Row>
          </Content>

          <Content>
            <Row>
              <Card title="Avisos">
                <Table>
                  <thead />
                  {arrWarnings.length ? (
                    <tbody>{arrWarnings.map(renderWarnings)}</tbody>
                  ) : (
                    <TableLoading />
                  )}
                </Table>
              </Card>
            </Row>
          </Content>
        </Page>
      </Layout>
      <SidebarRight>
        {mounted && selectedWarning && renderWarningView()}
      </SidebarRight>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.UserObject.user,
});

const mapDispatchToProps = {
  setUser,
  openMenu: openMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
