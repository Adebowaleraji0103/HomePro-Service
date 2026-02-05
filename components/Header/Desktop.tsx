import { NavLink } from "./Navbar";
import { Logo } from "@/app/card";

export default function Desktop() {
  return (
    <section className="hidden lg:flex">
      <div>
        {Logo.map((card, index) => (
          <div key={index} className="flex gap-4 items-center">
            <img src={card.image} alt="" className="object-contain size-8" />
            <h1> {card.name}</h1>
          </div>
        ))}
      </div>
      <div>
        {NavLink.map((card, index) => (
          <div key={index} className=" gap-7">
            <a href={card.href}>{card.label}</a>
          </div>
        ))}
      </div>
      <div>
        <p className="w-5 h-5 rounded-full bg-[#FF5E5E]"></p>
        <p>24 Hour Services</p>
      </div>
    </section>
  );
}
