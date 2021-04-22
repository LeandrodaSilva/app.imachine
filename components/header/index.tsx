import Link from "next/link";

function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <Link href="/" >
          <a className="navbar-brand">
            <img src="/img/logo-imachine.png" width="auto" height="30"
                 className="d-inline-block align-top" alt="" />
          </a>
        </Link>
        <form className="d-flex">
          <img src="/img/logo-techplus.png" width="auto" height="30"
               className="d-inline-block align-top" alt="" />
        </form>
      </nav>
    </>
  )
}

export default Header
