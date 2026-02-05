import Desktop from "./Desktop";
import Mobile from "./Mobile";

export const NavLink = [
  { href: "/about", label: "About US" },
  { href: "/service", label: "Services" },
  { href: "/blog", label: "Our Blog" },
  { href: "/contact", label: "Our Contact" },
];

export default function Navbar() {
  return (
    <header className="bg-primary-dark text-neutral-white w-full py-5 px-7">
      <Mobile />
      <Desktop />
    </header>
  );
}
