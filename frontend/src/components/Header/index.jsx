import logo from "@assets/logo.svg";
import { Link } from "react-router-dom";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <div>
        <ul>
          <li>
            <img src={logo} alt="logo" />
          </li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Accueil</li>
          </Link>
          <Link to="/mentors" style={{ textDecoration: "none" }}>
            <li>Liste des mentors</li>
          </Link>
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <li>F.A.Q</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Test techniques</li>
          </Link>
          <Link to="/inscription" style={{ textDecoration: "none" }}>
            <li>Se connecter</li>
          </Link>
        </ul>
      </div>
    </SHeader>
  );
}
