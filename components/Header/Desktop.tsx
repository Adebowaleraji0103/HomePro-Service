import { NavLink } from "./Navbar";
import { Logo } from "@/app/card";

export default function Desktop() {
  return (
    <section className="hidden lg:flex justify-between ">
      <div>
        {Logo.map((card, index) => (
          <div key={index} className="flex gap-4 items-center">
            <img src={card.image} alt="" className="object-contain size-8" />
            <h1> {card.name}</h1>
          </div>
        ))}
      </div>
      <div className="flex gap-10">
        {NavLink.map((card, index) => (
          <div key={index} className=" gap-7 flex ">
            <a href={card.href}>{card.label}</a>
          </div>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <p className="w-4 h-4 rounded-full bg-[#FF5E5E]"></p>
        <p>24 Hour Services</p>
      </div>
    </section>
  );
}
