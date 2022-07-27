import description from "@assets/description.png";
import SCardHelp from "./style";

export default function CardHelp() {
  return (
    <SCardHelp>
      <div>
        <ul>
          <li>
            <h2>Vous voulez aider ?</h2>
          </li>
          <li>Inscrivez-vous</li>
          <li>Dans le menu selectionnez "Devenir mentor"</li>
          <li>Mettez vos disponibilités</li>
          <li>Commencez à aider un juniors à booster sa carrière</li>
        </ul>
      </div>
      <img src={description} alt="logo" />
    </SCardHelp>
  );
}
