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

const Dot = styled.span`
  padding-right: 10px;
`;

function Index(props: { user: User }) {
  const { user } = props;
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <Layout>
        <Page title={"Configurações"}>
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
              <Card title="Conta"></Card>
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
