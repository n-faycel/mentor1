import SDigitalBusiness from "./style";

export default function DigitalBusiness() {
  const datas = [
    {
      id: 1,
      key: "logo",
      desktop: "../../../src/assets/career.svg",
      alt: "WEBDESIGNER",
    },
    {
      id: 2,
      key: "image1",
      desktop: "../../../src/assets/employee.svg",
      alt: "DEVELOPPEUR FRONT-END",
    },
    {
      id: 3,
      key: "image2",
      desktop: "../../../src/assets/employes.svg",
      alt: "DEVELOPPEUR BACK-END",
    },
    {
      id: 4,
      key: "image3",
      desktop: "../../../src/assets/video-call.svg",
      alt: "DEVELOPPEUR MOBILE",
    },
    {
      id: 5,
      key: "image3",
      desktop: "../../../src/assets/video-call.svg",
      alt: "DEVOPS",
    },
    {
      id: 6,
      key: "image3",
      desktop: "../../../src/assets/video-call.svg",
      alt: "CHEF DE PROJET WEB",
    },
    {
      id: 7,
      key: "image3",
      desktop: "../../../src/assets/video-call.svg",
      alt: "DATA ANALYST",
    },
    {
      id: 8,
      key: "image3",
      desktop: "../../../src/assets/video-call.svg",
      alt: "DATA SCIENTIST",
    },
    {
      id: 9,
      key: "image3",
      desktop: "../../../src/assets/video-call.svg",
      alt: "UX DESIGNER",
    },
  ];

  return (
    <SDigitalBusiness>
      <h2>Quelques métiers du numérique</h2>
      <div className="container">
        {datas.map((data) => (
          <div className="card" key={data.id}>
            <img src={data.desktop} alt={data.alt} />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
        ))}
      </div>
    </SDigitalBusiness>
  );
}
