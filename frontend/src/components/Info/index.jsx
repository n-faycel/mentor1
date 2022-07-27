import video from "@assets/video-call.svg";
import employee from "@assets/employee.svg";
import employees from "@assets/employes.svg";
import career from "@assets/career.svg";
import DigitalBusiness from "@components/DigitalBusiness";
import SInfo from "./style";

export default function Info() {
  return (
    <SInfo>
      <h1>Les avantages du mentorat</h1>
      <div className="contenair">
        <div>
          <img src={video} alt="imgvideo" />
          <p>
            Si vous êtes coincé entre deux choix de carrière, les mentors
            peuvent vous aider à décider ce qui convient le mieux à votre
            personnalité, vos connaissances ou vos intérêts.
          </p>
        </div>
        <div>
          <img src={employee} alt="imgemployee" />
          <p>
            Si vous devez vous préparer à des entretiens, les mentors peuvent
            vous guider à travers un ensemble de défis appropriés et vous
            conseiller sur les stratégies pour aborder les questions les plus
            difficiles.
          </p>
        </div>
        <div>
          <img src={employees} alt="imgemployees" />
          <p>
            Lorsque vous êtes coincé sur un problème en particulier, les mentors
            peuvent vous aider à le résoudre.
          </p>
        </div>
        <div>
          <img src={career} alt="imgcareer" />
          <p>
            Si vous sentez que vous stagnez à atteindre vos objectifs, les
            mentors peuvent vous aider à accélérer votre apprentissage, en vous
            donnant les bons conseils.
          </p>
        </div>
      </div>
      <DigitalBusiness />
    </SInfo>
  );
}
