import { closeMenu } from "../../redux/actions/menuActions";
import { connect } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
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
      width: fit-content;

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

const Item = styled.li`
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
  position: absolute;
  top: 50px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 999;
`;

function Sidebar(props) {
  const { isOpen, children, closeMenu } = props;

  return (
    <>
      <Container className={isOpen ? "block" : ""}>
        <nav className="menu">
          <ol className="list">
            <Link href="/">
              <Item className="item">
                <Icon>
                  <HomeTwoTone />
                </Icon>{" "}
                <span>Dashboard</span>
              </Item>
            </Link>
            <Link href="/organizacao">
              <Item className="item">
                <Icon>
                  <BusinessTwoTone />
                </Icon>{" "}
                <span>Organização</span>
              </Item>
            </Link>
            <Link href="/usuarios">
              <Item className="item">
                <Icon>
                  <PersonTwoTone />
                </Icon>{" "}
                <span>Usuários</span>
              </Item>
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
