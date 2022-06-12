import Logo from "../assets/graphql-logo.png";

function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={Logo} alt="logo" className="mr-2" />
            <div>MERN - GraphQL</div>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
