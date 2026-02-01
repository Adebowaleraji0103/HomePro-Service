export default function Mobile() {
  return (
      <section className="bg-primary-dark text-neutral-white flex justify-between items-center py-5 px-7 w-full ">
        <div className="flex gap-4 items-center">
          <img src="header-logo.PNG" alt="" className="object-contain size-8" />
          <h1 className="">HomePro</h1>
        </div>
        <img
          src="menu.PNG"
          alt=""
          className="object-contain size-8 lg:hidden"
        />
      </section>
  );
}
