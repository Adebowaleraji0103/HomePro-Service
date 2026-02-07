export default function HeroSection() {
  return (
    <section className="flex flex-col gap- bg-primary-dark text-neutral-white text-center px-6 pb-7">
      <div className="flex justify-between items-center text-neutral-grey-2 ">
        <p>Maintenances</p>
        <p className="h-1 w-1 rounded-full bg-neutral-grey-2 border-none"></p>
        <p>Repairs </p>
        <p className="h-1 w-1 rounded-full bg-neutral-grey-2 border-none"></p>
        <p>Improvements</p>
      </div>
      <h1 className="leading-10 font-semibold">Need improvement or repair your home? we can help!</h1>
    </section>
  );
}
