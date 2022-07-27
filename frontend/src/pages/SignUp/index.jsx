import employee from "@assets/employee.svg";
import { auth } from "@pages/firebase-config";
import { useRef } from "react";
import SSignUp from "./style";

export default function SignUp() {
  const registerEmail = useRef();
  const registerPassword = useRef();
  const registerRepPassword = useRef();
  const handleRegister = (evt) => {
    evt.preventDefault();
    try {
      auth.createUserWithEmailAndPassword(
        registerEmail.current.value,
        registerPassword.current.value,
        registerRepPassword.current.value
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <SSignUp>
      <div className="container">
        <img src={employee} alt="" />
        <div className="signup">
          <form
            className="registerForm"
            onSubmit={(evt) => handleRegister(evt)}
          >
            <h3>Adresse mail</h3>
            <input
              type="text"
              required
              placeholder="Adresse mail"
              ref={registerEmail}
            />
            <h3>Mot de passe</h3>
            <input
              type="password"
              required
              placeholder="Mot de passe"
              ref={registerPassword}
            />
            <h3> Confirmez le mot de passe</h3>
            <input
              type="password"
              required
              placeholder="Confirmez le mot de pass"
              ref={registerRepPassword}
            />
            <input type="submit" value="Inscription" />
          </form>
        </div>
      </div>
    </SSignUp>
  );
}
