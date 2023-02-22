import { asset } from "$fresh/runtime.ts";
import { Proyect } from "../types.d.ts";

interface Props {
  proyect: Proyect;
}
const PREFIX_PATH = "\\projects\\";
const Proyect = ({ proyect }: Props) => {
  return (
    <div class="w-[250px] h-full flex flex-col rounded-b-md">
      <div class="overflow-hidden">
        <div class=" hover:scale-[1.4] transition">
          <img
            src={proyect.img
              ? asset(PREFIX_PATH + proyect.img)
              : "https://avatars.githubusercontent.com/u/73099311?v=4"}
            alt={`${proyect.title} proyect image`}
            id="ctn-img"
          />
        </div>
      </div>
      <div class="bg-[#00171F] bg-opacity-90 rounded-b-md">
        <div class="p-2 h-[100px]">
          <h3 class="font-bold text-xl text-white">{proyect.title}</h3>
          <p class="text-[.8em] text-white">{proyect.description}</p>
        </div>
        <footer class="flex justify-between px-2">
          <a
            href={proyect.deployUrl}
            class="flex flex-col text-[.9em] text-blue-400 font-bold p-2 hover:text-[#F5B700] transition-colors"
          >
            <div class="flex align-middle">
              <img
                src={asset("/link.svg")}
                width={20}
                height="auto"
                alt="url logo"
                class="rounded-t-2xl mr-2"
              />
              <span>Link</span>
            </div>
          </a>
          <a
            href={proyect.githubUrl}
            class="flex flex-col text-[.9em] text-blue-400 font-bold p-2 hover:text-[#F5B700] transition-colors"
          >
            <div class="flex">
              <img
                src={asset("/tech/github.svg")}
                width={20}
                height="auto"
                alt="github logo"
                class="rounded-t-2xl mr-2"
              />
              <span>Repositorio</span>
            </div>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Proyect;
