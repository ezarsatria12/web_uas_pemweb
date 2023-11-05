import { useState } from "react";
const navigation = [
  { name: 'Home', href: '/Product' },
  { name: "Models", href: "/Feature" },
  { name: "Services", href: "#" },
  { name: "About", href: "#" },
];
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="">
      <nav
        className="flex items-center justify-between p-10 lg:px-20"
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
            <a
              key={item.name}
              href={item.href}
              className="text-base font-porsche font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
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