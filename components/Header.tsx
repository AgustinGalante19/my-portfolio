import { asset } from "$fresh/runtime.ts";
const Header = () => {
  return (
    <main class="p-2 mx-auto max-w-2xl flex-wrap bg-[#ACF39D] mt-8 rounded-md flex bg-opacity-60 justify-center gap-8">
      <div className="flex-col max-w-sm my-auto p-2">
        <h1 class="font-bold text-4xl mb-2">Agustin Galante Portfolio</h1>
        <p class="text-[#00171F]">
          Hola, tengo 20 años y soy de Argentina. Mi
          principal orientacion es el desarrollo web basado en{" "}
          <strong class="text-[#F5B700]">React</strong>.
        </p>
      </div>
      <div className="flex-col">
        <img
          src={asset("/logo.svg")}
          alt="my profile pic"
          width={200}
          height="auto"
        />
      </div>
    </main>
  );
};

export default Header;
