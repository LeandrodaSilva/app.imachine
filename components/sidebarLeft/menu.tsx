import Link from "next/link";
import {BusinessTwoTone, HomeTwoTone, PersonTwoTone} from "@material-ui/icons";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  justify-content: flex-start;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  color: hsla(0, 0%, 100%, .65) !important;
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
`

const Icon = styled.div`
  margin-right: 5px;
`

function Menu() {
  return (
    <nav className="menu">
      <ol className="list">
        <Link href="/">
          <Item className="item"><Icon><HomeTwoTone/></Icon> <span>Dashboard</span></Item>
        </Link>
        <Link href="/organizacao">
          <Item className="item"><Icon><BusinessTwoTone/></Icon> <span>Organização</span></Item>
        </Link>
        <Link href="/usuarios">
          <Item className="item"><Icon><PersonTwoTone/></Icon> <span>Usuários</span></Item>
        </Link>
      </ol>
    </nav>
  )
}

export default Menu
