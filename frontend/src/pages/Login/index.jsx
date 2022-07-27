import SLogin from "./style";

export default function Login() {
  return (
    <SLogin>
      <div className="container">
        <img src="" alt="" />
        <div className="login">
          <form className="registerForm">
            <label className="containerName" htmlFor="Adresse mail">
              <h3>Adresse mail</h3>
              <input
                className="inputForm"
                type="text"
                name="email"
                placeholder="Adresse mail"
              />
            </label>
            <label className="containerName" htmlFor="Mot de passe">
              <h3>Mot de passe</h3>
              <input
                className="inputForm"
                type="password"
                id="pass"
                name="password"
                placeholder="Mot de passe"
              />
            </label>
            <button type="submit" className="button">
              validez
            </button>
          </form>
        </div>
      </div>
    </SLogin>
  );
}
