import home from "@assets/home.jpg";
import { Link } from "react-router-dom";
import SCardPress from "./style";

export default function CardPress() {
  return (
    <SCardPress>
      <div className="container">
        <h1>Boostez votre carrière avec un Mentor.</h1>
        <p>
          Mentor Moi est une plateforme gratuite qui vise à connecter les
          développeurs moins expérimentés avec des mentors.
        </p>
        <p>
          Tout le monde peut s'inscrire en tant que mentors, vous n’avez pas
          besoin d’être un expert pour devenir mentor, juste avoir la volonté de
          partager vos connaissances.
        </p>
        <Link to="/mentors" className="link">
          Voir les mentors
        </Link>
      </div>
      <div>
        <img src={home} alt="photohome" />
      </div>
    </SCardPress>
  );
}
