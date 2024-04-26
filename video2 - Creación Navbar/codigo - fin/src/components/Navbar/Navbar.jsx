import Button from "../Button/Button";
import Menu from iconoi

const NavbarLink = ({ children }) => (
  <li className="mr-5 hover:cursor-pointer font-semibold hover:border-b-white hover:border-b-2 transition-all h-full py-4">
    {children}
  </li>
);

const NavBar = () => (
  <nav className="bg-neutral-900 h-[60px] flex flex-row items-center justify-between px-4">
    <ul className="flex flex-row items-center">
      <NavbarLink>Inicio</NavbarLink>
      <NavbarLink>Sobre Nosotros</NavbarLink>
    </ul>
    <div>
      <Button className="mt-0 mx-3">Registrarse</Button>
      <Button className="mt-0">Login</Button>

    </div>
  </nav>
);

export default NavBar;
