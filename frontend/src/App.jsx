import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Header from "@components/Header";
import Mentors from "@pages/Mentors";
import Faq from "@pages/Faq";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";

import Styled from "./AppStyle";

function App() {
  return (
    <div className="App">
      <Styled>
        <Header />
        <main>
          <Routes>
            <Route path="*" element={<Home />} />;
            <Route path="/" element={<Home />} />;
            <Route path="/mentors" element={<Mentors />} />;
            <Route path="/faq" element={<Faq />} />;
            <Route path="/connexion" element={<Login />} />;
            <Route path="/inscription" element={<SignUp />} />;
          </Routes>
        </main>
      </Styled>
    </div>
  );
}

export default App;
