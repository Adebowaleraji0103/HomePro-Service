import Desktop from "./Desktop";
import Mobile from "./Mobile";


export default function Navbar() {
  return (
    <header className="bg-primary-dark text-neutral-white w-full py-5 px-7">
      <Mobile />
      <Desktop />
    </header>
  );
}
