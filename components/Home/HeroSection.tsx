export default function HeroSection() {
  return (
    <section className="bg-primary-dark text-foreground">
      <div className="flex justify-between items-center py-5 px-5">
        <p>Maintenances</p>
        <p className="h-3 w-3 rounded-full bg-red-300"></p>
        <p>Repairs </p>
        <p>Improvements</p>
      </div>
    </section>
  );
}
