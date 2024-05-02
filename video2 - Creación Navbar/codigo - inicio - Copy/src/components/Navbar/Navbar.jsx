import { useRef } from "react";
import { SoccerBall, Menu } from "iconoir-react";
import Button from "../Button/Button";

const NavbarLink = ({ classname, children }) => (
  <a
    className={`hover:cursor-pointer hover:font-semibold lg:mr-4 ${classname}`}
  >
    {children}
  </a>
);

const Navbar = () => {
  const menuRef = useRef();

  const toggleNavbar = () => {
    menuRef.current.classList.toggle("-top-[260px]");
    menuRef.current.classList.toggle("top-[60px]");
  };

  return (
    <nav className="fixed left-0 top-0 flex h-[60px] w-full items-center justify-between bg-neutral-900 px-4 transition-all lg:flex-row">
      <div className="z-50 flex flex-row items-center">
        <SoccerBall className="mr-2" color="#dc2626" />
        <h1 className="text-xl font-semibold">Fulvo</h1>
      </div>
      <div
        className="absolute left-0 top-[60px] flex w-screen flex-col items-center bg-neutral-900 py-4 transition-all lg:static lg:flex-row lg:justify-end lg:p-0"
        ref={menuRef}
      >
        <NavbarLink classname="mb-4 lg:mb-0">Inicio</NavbarLink>
        <NavbarLink>Sobre Nosotros</NavbarLink>
        <Button className="bg-red-600 transition-all hover:bg-red-700 lg:mr-4 lg:mt-0">
          Inicia Sesión
        </Button>
        <Button className="bg-red-600 transition-all hover:bg-red-700 lg:mt-0">
          Regístrate
        </Button>
      </div>
      <Menu className="z-50 lg:hidden" onClick={toggleNavbar} />
    </nav>
  );
};

export default Navbar;
