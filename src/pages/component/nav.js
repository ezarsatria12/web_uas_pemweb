import { NavLink } from "react-router-dom";
import { useState } from "react";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Models", href: "/Models" },
  { name: "Services", href: "/Services" },
  { name: "About", href: "/About" },
];
export default function Example() {
  const [index, setIndex] = useState(0);
  function handleclick() {
    setIndex(index + 1);
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="">
      <nav
        className="flex items-center justify-between p-8 lg:px-20"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src={process.env.PUBLIC_URL + "/assets/img/logo2.png"}
              alt=""
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-black text-base  font-porsche font-semibold leading-6 tracking-wide"
                  : "text-base  font-porsche font-semibold leading-6 text-gray-400 hover:text-black tracking-wide"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a className="" href="/profile">
          <img
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
            />
            </a>
        </div>
      </nav>
    </header>
  );
}
