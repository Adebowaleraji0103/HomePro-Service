import { NavLink } from "./NavLink";

export default function Desktop() {
  return (
    <div className="hidden lg:flex">
      {NavLink.map((card, index) => (
        <div key={index} className=" gap-7">
            <a href={card.href}>{card.label}</a>
        </div>
      ))}
    </div>
  );
}
