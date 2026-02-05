import { NavLink } from "./Navbar";
import { Logo } from "@/app/card";

export default function Desktop() {
  return (
    <section className="hidden lg:flex justify-between items-center">
      <div>
        {Logo.map((card, index) => (
          <div key={index} className="flex gap-4 items-center">
            <img src={card.image} alt="" className="object-contain size-6" />
            <h2> {card.name}</h2>
          </div>
        ))}
      </div>
      <div className="flex gap-10">
        {NavLink.map((card, index) => (
          <div key={index}>
            <a href={card.href}>{card.label}</a>
          </div>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <p className="w-4 h-4 rounded-full bg-system-red"></p>
        <p>24 Hour Services</p>
      </div>
    </section>
  );
}
