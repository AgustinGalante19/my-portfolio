import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";
import Header from "../components/Header.tsx";
import AboutMe from "../components/AboutMe.tsx";
import TechList from "../components/TechList.tsx";
import Proyects from "../utils/proyects.ts";
export default function Home() {
  interface _Proyect {
    title: string;
    description: string;
    githubUrl: string;
    img: string;
  }

  interface Props {
    proyect: _Proyect;
  }

  interface LIST {
    proyects: _Proyect[];
  }

  const Proyect = ({ proyect }: Props) => {
    return (
      <div class="max-w-xl bg-white flex flex-col h-full">
        <div class="bg-blue-300 flex-row">
          <div class="">
            <img
              src={proyect.img}
              alt={`${proyect.title} proyect image`}
              width="100%"
            />
          </div>
          <div>
            <div class="p-2 flex flex-col">
              <h3 class="font-bold text-xl">{proyect.title}</h3>
              <p>{proyect.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProyectList = ({ proyects }: LIST) => {
    return (
      <article class="mt-8 max-w-2xl bg-opacity-40 rounded p-4 mx-auto">
        <h2 class="text-2xl font-bold">Proyectos</h2>
        <div class="flex gap-2 max-w-xl">
          {proyects.map((proyect) => <Proyect proyect={proyect} />)}
        </div>
      </article>
    );
  };

  return (
    <div class="flex flex-col h-screen">
      <div class="flex-1 bg-[#B4CDED] bg-opacity-30">
        <Head>
          <title>Portfolio</title>
        </Head>
        <Navbar />
        <Header />
        <AboutMe />
        <TechList />
        <ProyectList proyects={Proyects} />
      </div>
    </div>
  );
}
