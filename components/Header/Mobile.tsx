export default function Mobile() {
  return (
      <section className="flex justify-between items-center  lg:hidden">
        <div className="flex gap-4 items-center">
          <img src="header-logo.PNG" alt="" className="object-contain size-8" />
          <h1>HomePro</h1>
        </div>
        <img
          src="menu.PNG"
          alt=""
          className="object-contain size-8 lg:hidden"
        />
      </section>
  );
}
