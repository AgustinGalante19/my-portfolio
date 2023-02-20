interface Proyect {
  title: string;
  description: string;
  githubUrl: string;
  img: string;
}

const proyects: Proyect[] = [
  {
    title: "Team-Notes",
    description:
      "Aplicacion para movil que muestra notas internas de la empresa",
    githubUrl: "https://github.com/AgustinGalante19",
    img: "https://avatars.githubusercontent.com/u/73099311?s=96&v=4",
  },
  {
    title: "Stock master",
    description: "Pagina web para llevar a cabo el stock de un negocio",
    githubUrl: "https://github.com/AgustinGalante19",
    img: "https://avatars.githubusercontent.com/u/73099311?s=96&v=4",
  },
  {
    title: "Cuaderno GPA",
    description:
      "Aplicacion web para cargar un archivo KMZ y verlo reflejado en el mapa, para luego poder enlazarlo con los terrenos de la base de datos",
    githubUrl: "https://github.com/AgustinGalante19",
    img: "https://avatars.githubusercontent.com/u/73099311?s=96&v=4",
  },
];

export default proyects;
