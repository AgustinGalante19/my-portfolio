const Navbar = () => {
  interface Props {
    title: string;
    link: string;
  }
  const NavLink = ({ title, link }: Props) => {
    return (
      <a
        href={link}
        class="font-semibold p-2 text-[#fff] hover:text-[#F5B700] transition flex flex-col"
      >
        {title}
      </a>
    );
  };

  return (
    <nav class="flex bg-[#00171F] p-2 ">
      <div class="max-w-2xl mx-auto flex flex-row justify-between flex-wrap flex-1">
        <NavLink link="#" title="Inicio" />
        <NavLink link="#" title="Proyectos" />
        <NavLink link="#" title="Contacto" />
      </div>
    </nav>
  );
};

export default Navbar;
