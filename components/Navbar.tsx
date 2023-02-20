const Navbar = () => {
  interface Props {
    title: string;
    link: string;
  }
  const NavLink = ({ title, link }: Props) => {
    return (
      <a
        href={link}
        class="font-semibold p-2 text-[#00171F] hover:bg-[#ACF39D] hover:bg-opacity-40 hover:rounded-md transition flex flex-col"
      >
        {title}
      </a>
    );
  };

  return (
    <nav class="flex bg-[#52EC76] p-2 ">
      <div class="max-w-2xl mx-auto flex flex-row justify-between flex-wrap flex-1">
        <NavLink link="#" title="Inicio" />
        <NavLink link="#" title="Proyectos" />
        <NavLink link="#" title="Contacto" />
      </div>
    </nav>
  );
};

export default Navbar;
