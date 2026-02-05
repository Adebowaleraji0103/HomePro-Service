import { Logo } from "@/app/card";

export default function Mobile() {
  return (
    <section className="flex justify-between items-center  lg:hidden">
      {Logo.map((card, index) => (
        <div key={index} className="flex gap-4 items-center">
          <img src={card.image} alt="" />
          <h1> {card.name}</h1>
        </div>
      ))}
      <img src="menu.PNG" alt="" className="object-contain size-8 lg:hidden" />
    </section>
  );
}
