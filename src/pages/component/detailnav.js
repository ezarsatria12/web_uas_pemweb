import { NavLink } from "react-router-dom";
import { useState } from "react";
const navigation = [
  { name: "Concept", href: "/" },
  { name: "Details", href: "/Models" },
  { name: "Build", href: "/Services" },
];
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="">
      <nav
        className="flex sticky top-0 z-50 bg-white w-full items-center justify-between p-8 lg:px-20"
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
          <a
            href="#"
            className="text-base font-porsche leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
