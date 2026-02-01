const NavLink = [
  {
    about: "About Us",
    service: "Sevices",
    blog: "Our Blog",
    contact: "Contact",
  },
];
export default function Desktop() {
  return (
    <div>
      {NavLink.map((card, index) => (
        <ul key={index}>
          <li>{card.about}</li>
          <li>{card.service}</li>
          <li>{card.blog}</li>
          <li>{card.contact}</li>
        </ul>
      ))}
    </div>
  );
  
}
