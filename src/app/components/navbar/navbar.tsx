import Logo from "./logo";

type NavbarProps = {
  calendar: JSX.Element
}

export const Navbar = () => {
  return (
    <nav className="justify-center relative top-0 h-20 flex items-center bg-cyan-500">
      <Logo/>
    </nav>
  );
};

export default Navbar;