export default function HeroSection() {
  return (
    <section className="bg-primary-dark text-foreground">
      <div className="flex justify-between items-center px-5">
        <p>Maintenances</p>
        <p className="h-1 w-1 rounded-full bg-red-300 border-none"></p>
        <p>Repairs </p>
        <p className="h-1 w-1 rounded-full bg-red-300 border-none"></p>
        <p>Improvements</p>
      </div>
    </section>
  );
}
