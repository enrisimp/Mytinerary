import Anchor from "./Anchor";

export default function NavBar() {
    let data = [
      { href: "#", title: "Home" },
      { href: "about.html", title: "About" },
      { href: "randp.html", title: "R&P" },
      { href: "game.html", title: "Game" },
      { href: "registration.html", title: "Registration" },
      { href: "contact.html", title: "Contact" }
    ];
  return (
    <header className="flex">
      <div className="Nav w-[354px] h-16 justify-center items-center gap-8 inline-flex">
        <div className="Home text-zinc-900 text-2xl font-bold">Home</div>
        <div className="Cities text-zinc-900 text-2xl font-bold">Cities</div>
        <div className="Login px-8 py-4 bg-indigo-600 rounded-[10px] justify-center items-center gap-2.5 flex">
          <div className="HeroiconsOutlineUser w-[21px] h-5 relative" />
          <div className="Login text-white text-2xl font-bold">Login</div>
        </div>
      </div>
    </header>
  );
}
