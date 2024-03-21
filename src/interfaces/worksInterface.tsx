
export interface WorkItem {
    id: number;
    status: string;
    title: string;
    image1: string;
    image2: string;
    description: string;
    link: string;
  }
  
  export const worksData: WorkItem[] = [
    {
      id: 1,
      status: "In Progress",
      title: "Fresh Shop",
      image1: "test.jpg",
      image2: "vertical.jpg",
      description: "Fresh Shop est un projet eShop qui visait à consolidé mes aquis en React, Tailwind CSS et typescript. Bien que le projet est encore en production l'achèvement de celui-ci est tout proche !",
      link: "#",
    },
    {
        id: 2,
        status: "Online",
        title: "Poddle Clicker",
        image1: "test.jpg",
        image2: "vertical.jpg",
        description: "Poodle Clicker est un petit Cookie Clicker. Réalisé en colaboration avec Ema et Eva, c'est notre premier projet. Réalisé à l'aide de HTML, CSS, Javascript.",
        link: "https://harbingar.github.io/cookie-clicker/",
    },
    {
        id: 3,
        status: "Offline",
        title: "Social Media",
        image1: "test.jpg",
        image2: "vertical.jpg",
        description: "Ce projet reprend l'idée d'un réseau social avec une interface/expérience utilisateur fluide avec un style minimaliste.",
        link: "#",
    },
  ];
  