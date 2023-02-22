import { Proyect as _Proyect } from "../types.d.ts";
import Proyect from "./Proyect.tsx";

interface Props {
  proyects: _Proyect[];
}

const ProyectList = ({ proyects }: Props) => {
  return (
    <article class="mt-8 max-w-4xl bg-[#B4CDED] bg-opacity-40 rounded p-4 mx-auto mb-2">
      <h2 class="text-2xl font-bold text-center">Proyectos</h2>
      <div class="flex justify-center gap-2 flex-wrap px-2 mt-4 ">
        {proyects.map((proyect) => <Proyect proyect={proyect} />)}
      </div>
    </article>
  );
};

export default ProyectList;
