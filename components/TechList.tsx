import TECHNOLOGIES from "../utils/technologies.ts";
import Tech from "./Tech.tsx";

const TechList = () => {
  return (
    <article class="mt-8 max-w-4xl rounded p-4 mx-auto">
      <h2 class="text-xl font-bold text-center">Tecnologias</h2>
      <section id="slide-track">
        <ul class="flex flex-row flex-1 justify-center mt-2 gap-4 flex-wrap">
          {TECHNOLOGIES.map((tech) => {
            return <Tech techName={tech} />;
          })}
        </ul>
      </section>
    </article>
  );
};

export default TechList;
