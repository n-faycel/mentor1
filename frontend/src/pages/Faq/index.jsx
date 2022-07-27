import SFaq from "./style";

export default function Faq() {
  const datas = [
    {
      id: 1,
      title: "Pourquoi un mentor ?",
      text1:
        "Partagez leur expérience afin de vous guider dans votre carrière ou à travers un problème technique que vous rencontrez.",
      text2: "Partager avec vous des méthodologies pour arriver à progresser.",
    },
    {
      id: 2,
      title: "Le service est il payant?",
      text1:
        "Les mentors qui s'inscrivent acceptent de le faire de manière bénévole, le concept est de créer un service entièrement gratuit de partage de connaissance entre les mentors et les mentorés moins expérimentés afin de favoriser l'entraide de la communauté.",
      text2: "Le mentorat devrait être et quelques soit les moyens financiers.",
    },
    {
      id: 3,
      title: "C'est quoi un mentor?",
      text1:
        "Un mentor est une personne assez expérimentés sur divers sujets et souhaite partager ses connaissances, pour aider les autres moins expérimentés. Attention le mentor n'est pas un formateur à part entière.",
      text2: " ",
    },
    {
      id: 4,
      title: "Comment devenir Mentor?",
      text1:
        "Inscrivez-vous sur le site puis cliquez sur la section 'Devenir mentor', renseignez quelques réseaux ainsi qu'une chouette photo de profil.",
      text2:
        "Tout le monde peut être mentor, si vous vous sentez capable d'apporter à d'autres n'hésitez pas.",
    },
    {
      id: 5,
      title: "Quel est le rôle de Mentor-moi ?",
      text1:
        "Mentor-moi a été créé pour faciliter le mentorat entre développeurs expérimentés (mentors) et juniors (mentorés). ",
      text2:
        "Il permet aux mentorés de poser des questions, de demander des conseils ou de l'aide pour développer leurs compétences et leurs connaissances en développement Web et de mieux poursuivre leurs carrières",
    },
    {
      id: 6,
      title: "Comment se déroule la recherche de mentor?",
      text1:
        "Contacter le mentor sur l'un de ses réseaux qu'il aura renseigné, vous devez définir des attentes réalistes dès le départ. ",
      text2:
        "Pensez au temps que vous pouvez consacrer chaque jour ou semaine à la communication. Choisissez une plateforme pour communiquer.",
    },
    {
      id: 7,
      title: "C'est quoi un mentoré ?",
      text1:
        "Un mentoré est une personne qui aspire à développer ses compétences dans un ou plusieurs domaines et qui a besoin de conseils, d'assistance, de soutien et / ou d'orientation.",
      text2: "",
    },
    {
      id: 8,
      title: "Comment mettre fin au mentorat ?",
      text1:
        "Simplement contacter le mentor pour lui notifier votre décision, le mentorat n'est pas un contrat établi précisez lui juste les raisons de ce choix.",
      text2: "",
    },
  ];

  return (
    <SFaq>
      <h1>Foire Aux Questions</h1>
      <p>
        Les questions les plus courantes sur le fonctionnement du service
        Mentor-moi.
      </p>
      <div className="container">
        {datas.map((data) => (
          <div className="block">
            <div className="title" key={data.id}>
              {data.title}
            </div>
            <div className="text">
              {data.text1}
              {data.text2}
            </div>
          </div>
        ))}
      </div>
    </SFaq>
  );
}
