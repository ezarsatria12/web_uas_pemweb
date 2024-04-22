import ReactDOM from "react-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "./component/nav";
import Footer from "./component/footer";
import {
  useState,
  link,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Slider,
  TextField,
  useEffect,
} from "react";
const allPorscheModels = {
  gt3rs: [
    {
      id: 1,
      name: "911 GT3 RS",
      href: "Models/911-gt3-rs",
      imageSrc: "/assets/img_product/gt3rs.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$241,300",
      topspeed: "296",
    },
    // More products...
  ],
  gt3: [
    {
      id: 1,
      name: "911 GT3",
      href: "Models/911-gt3",
      imageSrc: "/assets/img_product/gt3.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$182,900",
      topspeed: "296",
    },
    // More products...
  ],
  turbo: [
    {
      id: 1,
      name: "911 Turbo",
      href: "/Models/911-turbo",
      imageSrc: "/assets/img_product/turbo.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$197,200",
      topspeed: "296",
    },
    {
      id: 2,
      name: "911 Turbo Cabrioret",
      href: "/Models/911-turbo-cabrioret",
      imageSrc: "/assets/img_product/turbocabrioret.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$210,000",
      topspeed: "296",
    },
    {
      id: 3,
      name: "911 Turbo S",
      href: "/Models/911-turbo-s",
      imageSrc: "/assets/img_product/turbos.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$230,400",
      topspeed: "296",
    },
    // More products...
  ],
};

export default function Example() {
  const [index, setIndex] = useState(0);
  function handleclick() {
    alert("Sorry, button under construction");
  }
  function Name(props) {
    return <h2 className="text-3xl font-porsche font-semibold tracking-wide text-black">
            {props.model}
          </h2>;
  }
  useEffect(() => {
    document.title = "Models - Porsche By Ezar Satria P";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = "https://cdn.worldvectorlogo.com/logos/porsche-3.svg";
  }, []);
  return (
    <div className="bg-white max-w-screen-2xl">
      <Navbar />
      <div className="mx-10 my-10 md:mx-20 lg:mx-20 relative flex justify-between">
        <h1 className="font-porsche font-semibold text-4xl tracking-wide">
          Select your favorite Porsche
        </h1>
        <div className="">
          <form>
            <label>
              <input
                className="w-fit px-6 py-2 mx-3 hover:bg-gray-200 text-base font-porsche font-semibold border-black border-2 rounded-sm"
                placeholder="Insert model"
                type="text"
                name="name"
              />
            </label>
            <button
              onClick={handleclick}
              className="w-fit px-6 py-2.5  bg-black hover:bg-[#DA4B3B] text-base font-porsche font-semibold text-white rounded-sm"
              type="submit"
              value="Submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="mx-10 my-10 md:mx-20 lg:mx-20">
        {allPorscheModels.gt3rs == null ? (
          <h2 className="text-2xl font-bold tracking-tight text-black"></h2>
        ) : (
          <Name model="911 GT3 RS"/>
        )}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allPorscheModels.gt3rs.map((product) => (
            <div key={product.id} className="group relative hover:bg-gray-100">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-auto lg:w-auto"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-base font-porsche text-gray-700 font-bold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-base font-porsche text-gray-500">
                    {product.topspeed} kmh
                  </p>
                </div>
                <p className="text-sm font-medium font-porsche text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-10 my-10 md:mx-20 lg:mx-20">
        {allPorscheModels.gt3 == null ? (
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>
        ) : (
          <Name model="911 GT3 Models"/>
        )}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allPorscheModels.gt3.map((product) => (
            <div key={product.id} className="group relative hover:bg-gray-100">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-auto lg:w-auto"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-base font-porsche text-gray-700 font-bold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-base font-porsche text-gray-500">
                    {product.topspeed} kmh
                  </p>
                </div>
                <p className="text-sm font-medium font-porsche text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-10 my-10 md:mx-20 lg:mx-20">
        {allPorscheModels.turbo == null ? (
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>
        ) : (
          <Name model="911 Turbo Models"/>
        )}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allPorscheModels.turbo.map((product) => (
            <div key={product.id} className="group relative hover:bg-gray-100">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-auto lg:w-auto"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-base font-porsche text-gray-700 font-bold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-base font-porsche text-gray-500">
                    {product.topspeed} kmh
                  </p>
                </div>
                <p className="text-sm font-medium font-porsche text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
