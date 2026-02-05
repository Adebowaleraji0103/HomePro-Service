export default function HeroSection() {
  return (
    <section className="bg-primary-dark text-foreground text-center px-5">
      <div className="flex justify-between items-center text-neutral-grey-2 ">
        <p>Maintenances</p>
        <p className="h-1 w-1 rounded-full bg-neutral-grey-2 border-none"></p>
        <p>Repairs </p>
        <p className="h-1 w-1 rounded-full bg-neutral-grey-2 border-none"></p>
        <p>Improvements</p>
      </div>
      <h1>Need improvement or repair your home? we can help!</h1>
    </section>
  );
}
