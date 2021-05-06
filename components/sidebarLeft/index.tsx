import { closeMenu } from "../../redux/actions/menuActions";
import { connect } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BusinessTwoTone,
  HomeTwoTone,
  PersonTwoTone,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 50px;
  width: 240px;
  height: 100%;
  background-color: #081b2f;
  z-index: 1050;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    width: 0;

    &.block {
      width: 240px;

      .menu {
        display: block;
        left: 0;
        top: 0;
        position: absolute;
      }
    }

    .open {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      color: black;
      width: 280px;
      max-width: 280px;
      min-width: 280px;
      height: 100%;
      padding: 15px 15px 55px;
      transition: width ease 0.1s;
      z-index: 998;
    }

    .close {
      .menu {
        .list {
          .item {
            justify-content: center;

            svg {
              margin-right: 0;
              width: 100%;
            }

            span {
              display: none;
            }
          }
        }
      }
    }
  }

  .children {
    overflow-y: scroll;
    width: 100%;
  }

  .menu {
    width: 100%;

    .list {
      list-style: none;
      width: 100%;
      padding-left: 0;
    }
  }
`;

const BorderGradient = styled.div`
  background: ${(props) =>
    props.active
      ? "linear-gradient(to right,#4bbef8,#081b2f,#081b2f,#081b2f,#081b2f)"
      : "#081b2f"};
  padding: 0px 0px 0px 3px;
  border-radius: 4px;
  transition: background ease-out 0.5s;

  &:hover {
    background: linear-gradient(
      to right,
      #08a9fa,
      #081b2f,
      #081b2f,
      #081b2f,
      #081b2f,
      #081b2f,
      #081b2f,
      #081b2f
    );
  }
`;

const Item = styled.li`
  background-color: #081b2f;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  justify-content: flex-start;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.65) !important;
  transition: background-color ease-out 0.5s;
  padding: 0 30px;
  color: #343952;
  height: 40px;

  svg {
    margin-right: 15px;
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(184, 187, 205, 0.1);
  }
`;

const Icon = styled.div`
  margin-right: 5px;
`;

const Dimmer = styled.div`
  width: 100vw;
  height: 100%;
  display: block;
  position: fixed;
  top: 50px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 999;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

function Sidebar(props) {
  const router = useRouter();
  const { isOpen, children, closeMenu } = props;

  return (
    <>
      <Container className={isOpen ? "block" : ""}>
        <nav className="menu">
          <ol className="list">
            <Link href="/">
              <BorderGradient active={router.pathname === "/"}>
                <Item className="item" active={router.pathname === "/"}>
                  <Icon>
                    <HomeTwoTone />
                  </Icon>{" "}
                  <span>Dashboard</span>
                </Item>
              </BorderGradient>
            </Link>

            <Link href="/organizacao">
              <BorderGradient active={router.pathname === "/organizacao"}>
                <Item className="item">
                  <Icon>
                    <BusinessTwoTone />
                  </Icon>{" "}
                  <span>Organização</span>
                </Item>
              </BorderGradient>
            </Link>

            <Link href="/usuarios">
              <BorderGradient active={router.pathname === "/usuarios"}>
                <Item className="item">
                  <Icon>
                    <PersonTwoTone />
                  </Icon>{" "}
                  <span>Usuários</span>
                </Item>
              </BorderGradient>
            </Link>
          </ol>
        </nav>
      </Container>
      {isOpen && <Dimmer onClick={closeMenu} />}
      <div className="children">{children}</div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.SidebarLeftComponent.isOpen,
});

const mapDispatchToProps = {
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
