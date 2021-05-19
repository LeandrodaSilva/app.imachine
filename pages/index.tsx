import Layout from "../components/layout";
import Page from "../components/page";
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
import Content from "../components/content";
import Column from "../components/column";
import styles from "../styles/index.module.scss";

function Index(props: { user: User; openMenu: Function }) {
  const { user, openMenu } = props;
  const [arrWarnings, setArrWarnings] = useState<Array<Warning> | []>([]);
  const [selectedWarning, setSelectedWarning] = useState<Warning | undefined>(
    undefined
  );
  const [mounted, setMounted] = useState(false);

  const renderWarningViewItem = () => {
    return (
      <div className={styles.warningViewBodySensor}>
        <div>
          <div className={styles.header}>
            <p>Mancal dianteiro motor</p>
            <span>80%</span>
          </div>

          <div className={styles.body}>{mounted && <Line />}</div>

          <div className={styles.footer}>
            <Link href="/sensor/1">
              <a>Ver mais</a>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const renderWarningView = () => {
    return (
      <div className={styles.warningView}>
        <div className={styles.warningViewHeader}>
          <h2>{selectedWarning.name}</h2>
          <span>
            <WarningTwoTone color={"error"} /> 10%
          </span>
        </div>
        <div className={styles.warningViewBody}>
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
        </div>
      </div>
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
          <span className={styles.dot}>
            <FiberManualRecordTwoTone color={color} fontSize={"inherit"} />
          </span>{" "}
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
            <Column>
              <Slide id={"slide-items"}>
                <div className={styles.unidadeContainer}>
                  <div className={styles.unidade}>
                    <div className={styles.image}>
                      <Img
                        className={styles.photo}
                        src="/img/factory.jpeg"
                        objectFit={"fill"}
                        width="auto"
                        height="auto"
                        loading="lazy"
                      />
                    </div>

                    <div className={styles.info}>
                      <p className={styles.name}>Campinas</p>
                      <p className={styles.status}>Em risco</p>
                      <div className={styles.alert}>
                        <p className="danger">4% máquinas em risco</p>
                        <p className={styles.warning}>4% máquinas em alerta</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.unidade}>
                    <div className={styles.image}>
                      <Img
                        className={styles.photo}
                        src="/img/factory2.jpg"
                        objectFit={"cover"}
                        width="auto"
                        height="auto"
                      />
                    </div>

                    <div className={styles.info}>
                      <p className={styles.name}>São Paulo</p>
                      <p className={styles.status}>Em risco</p>
                      <div className={styles.alert}>
                        <p className={styles.warning}>4% máquinas em alerta</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.unidade}>
                    <div className={styles.image}>
                      <Img
                        className={styles.photo}
                        src="/img/factory3.jpg"
                        objectFit={"cover"}
                        width="auto"
                        height="auto"
                      />
                    </div>

                    <div className={styles.info}>
                      <p className={styles.name}>Campinas</p>
                      <p className={styles.status}>Em risco</p>
                      <div className={styles.alert}></div>
                    </div>
                  </div>

                  <div className={styles.unidade}>
                    <div className={styles.image}>
                      <Img
                        className={styles.photo}
                        src="/img/factory2.jpg"
                        objectFit={"cover"}
                        width="auto"
                        height="auto"
                      />
                    </div>

                    <div className={styles.info}>
                      <p className={styles.name}>Campinas</p>
                      <p className={styles.status}>Em risco</p>
                      <div className={styles.alert}></div>
                    </div>
                  </div>
                </div>

                <div className={styles.unidadeContainer}>
                  <div className={styles.unidade}>
                    <div className={styles.image}>
                      <Img
                        className={styles.photo}
                        src="/img/factory.jpeg"
                        objectFit={"cover"}
                        width="auto"
                        height="auto"
                      />
                    </div>

                    <div className={styles.info}>
                      <p className={styles.name}>Campinas</p>
                      <p className={styles.status}>Em risco</p>
                      <div className={styles.alert}>
                        <p className="danger">4% máquinas em risco</p>
                        <p className={styles.warning}>4% máquinas em alerta</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.unidade}>
                    <div className={styles.image}>
                      <Img
                        className={styles.photo}
                        src="/img/factory2.jpg"
                        objectFit={"cover"}
                        width="auto"
                        height="auto"
                      />
                    </div>

                    <div className={styles.info}>
                      <p className={styles.name}>São Paulo</p>
                      <p className={styles.status}>Em risco</p>
                      <div className={styles.alert}>
                        <p className={styles.warning}>4% máquinas em alerta</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.unidade}>
                    <div className={styles.image}>
                      <Img
                        className={styles.photo}
                        src="/img/factory3.jpg"
                        objectFit={"cover"}
                        width="auto"
                        height="auto"
                      />
                    </div>

                    <div className={styles.info}>
                      <p className={styles.name}>Campinas</p>
                      <p className={styles.status}>Em risco</p>
                      <div className={styles.alert}></div>
                    </div>
                  </div>

                  <div className={styles.unidade}>
                    <div className={styles.image}>
                      <Img
                        className={styles.photo}
                        src="/img/factory2.jpg"
                        objectFit={"cover"}
                        width="auto"
                        height="auto"
                      />
                    </div>

                    <div className={styles.info}>
                      <p className={styles.name}>Campinas</p>
                      <p className={styles.status}>Em risco</p>
                      <div className={styles.alert}></div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Column>
          </Content>

          <Content>
            <Column>
              <Card title="Avisos">
                <table className={styles.table}>
                  <thead />
                  {arrWarnings.length ? (
                    <tbody>{arrWarnings.map(renderWarnings)}</tbody>
                  ) : (
                    <TableLoading />
                  )}
                </table>
              </Card>
            </Column>
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
