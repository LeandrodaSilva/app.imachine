import Link from "next/link";
import {BusinessTwoTone, HomeTwoTone, PersonTwoTone} from "@material-ui/icons";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  width: 100%;
  border-radius: 4px;
  padding: 10px 4px;
  color: #343952;

  &:hover {
    cursor: pointer;
    background-color: rgba(54, 59, 88, 0.1);
    color: black;
  }
`

const Icon = styled.div`
  margin-right: 5px;
`

function Menu() {
  return (
    <div>
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
    </div>
  )
}

export default Menu
