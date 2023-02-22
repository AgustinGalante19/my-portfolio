import { Proyect } from "../types.d.ts";

const proyects: Proyect[] = [
  {
    title: "Cuaderno GPA",
    description:
      "Visualizador de archivos KMZ interactivo con funcionalidades extras.",
    githubUrl: "https://github.com/AgustinGalante19",
    deployUrl: "",
    img: "gpa-cuaderno.png",
  },
  {
    title: "Team-Notes",
    description:
      "Aplicacion para movil que muestra notas internas de la empresa",
    githubUrl: "https://github.com/AgustinGalante19",
    deployUrl: undefined,
    img: "teamnotes.png",
  },
  /*  {
    title: "Stock master",
    description: "Pagina web para llevar a cabo el stock de un negocio",
    githubUrl: "https://github.com/AgustinGalante19",
    deployUrl: "",
    img: undefined,
  }, */

  {
    title: "Rick & Morty",
    description: "Pagina web sobre los personajes de Rick & Morty",
    githubUrl: "https://github.com/AgustinGalante19/rickandmorty-ts",
    deployUrl: "https://rickandmorty-ts.vercel.app/characters",
    img: "rickandmorty.png",
  },
];

export default proyects;
