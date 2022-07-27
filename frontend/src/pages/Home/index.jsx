import CardPress from "@components/CardPres";
import CardHelp from "@components/CardHelp";
import Info from "@components/Info";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <div>
        <CardPress />
        <CardHelp />
        <Info />
      </div>
    </SHome>
  );
}
