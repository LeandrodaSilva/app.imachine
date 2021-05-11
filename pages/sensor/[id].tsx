import Layout from "../../components/layout";
import Page from "../../components/page";
import styled from "styled-components";
import { setUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import { User, Warning } from "../../types";
import SidebarRight from "../../components/sidebarRight";
import { openMenu } from "../../redux/actions/sidebarRightActions";
import Card from "../../components/card";
import { FiberManualRecordTwoTone, WarningTwoTone } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Imachine from "../../services/imachine";
import Link from "next/link";
import Line from "../../components/charts/line";
import Slide from "../../components/slide";
import TableLoading from "../../components/loadingTable";
import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps } from "next";

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

async function getListOfSensors() {
  return [
    {
      params: {
        id: "1",
      },
    },
  ];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getListOfSensors();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      sensorId: params.id,
    },
  };
};

function Index(props: { user: User; openMenu: Function; sensorId: number }) {
  const { user, openMenu, sensorId } = props;
  const [arrWarnings, setArrWarnings] = useState<Array<Warning> | []>([]);
  const [selectedWarning, setSelectedWarning] = useState<Warning | undefined>(
    undefined
  );
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <Layout>
        <Page title={"Sensor"}>
          {/*<Content>*/}
          {/*  <Row>*/}
          {/*    <Card title="Slider">*/}
          {/*      <Slide id={"slide-items"}>*/}
          {/*        {renderWarningViewItem()}*/}
          {/*        {renderWarningViewItem()}*/}
          {/*      </Slide>*/}
          {/*    </Card>*/}
          {/*  </Row>*/}
          {/*</Content>*/}

          <Content>
            <Row>
              <Card title="Estatísticas"></Card>
            </Row>
          </Content>
        </Page>
      </Layout>
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
