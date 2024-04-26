import Button from "../Button/Button";
import { Menu, SoccerBall } from "iconoir-react";
import { useRef } from "react";

const NavbarLink = ({ children }) => (
  <a className="lg:mr-5 hover:cursor-pointer font-semibold hover:border-b-white hover:border-b-2 transition-all h-full py-4">
    {children}
  </a>
);

const NavBar = () => {
  const menuRef = useRef();
  const showMenu = () => {
    menuRef.current.classList.toggle("-top-[220px]");
    menuRef.current.classList.toggle("top-[60px]");
  };

  return (
    <nav className="bg-neutral-900 h-[60px] fixed left-0 top-0 w-screen">
      <div className="flex flex-row items-center justify-between bg-neutral-900 px-4 h-full">
        <div className="flex flex-row">
          <SoccerBall className="translate-y-1"></SoccerBall>
          <p className="ml-3 font-bold text-lg">Fulvo</p>
        </div>
        <div
          className="flex absolute w-full left-0 transition-all lg:static -top-[220px] lg:ml-auto lg:top-0 lg:flex-row flex-col justify-center lg:justify-end items-center lg:items-center bg-neutral-900"
          ref={menuRef}
        >
          <NavbarLink>Inicio</NavbarLink>
          <NavbarLink>Sobre Nosotros</NavbarLink>
          <div className="flex flex-col lg:flex-row items-center h-full">
            <Button className="my-4 lg:my-0 !mt-0 lg:mx-3">Registrarse</Button>
            <Button className="my-4 lg:my-0 !mt-0">Login</Button>
          </div>
        </div>
        <Menu className="lg:hidden" onClick={showMenu} />
      </div>
    </nav>
  );
};

export default NavBar;
