import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/dashboard">
        <div>People App</div>
      </Link>
    </nav>
  );
}

export default Header;
