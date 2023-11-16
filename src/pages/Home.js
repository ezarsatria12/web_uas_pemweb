import { ReactDOM, NavLink } from "react-dom";
import "../index";
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
  useEffect,
} from "react";
import { LinkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  useEffect(() => {
    document.title = "Home - Porsche By Ezar Satria P";
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
      <div className="hero relative isolate min-h-screen">
        <Navbar />
        <div
          className="absolute bottom-0 left-0 overflow-hidden mix-blend-normal"
          aria-hidden="true"
        >
          <img
            className="absolute h-72 w-auto  inset-x-0 top-35 object-cover opacity-5 -z-10"
            src={process.env.PUBLIC_URL + "/assets/img/logo2.png"}
            alt=""
          />
          <img
            className="w-screen object-cover -z-40"
            src={process.env.PUBLIC_URL + "/assets/img/bghero3.png"}
            alt=""
          />
        </div>
        <div className="relative h-100 flex flex-col justify-center  gap-y-6  px-10 lg:px-20">
          <h1 className="max-w-screen-sm text-xxl font-porsche font-semibold tracking-wide">
            The Thrill of Driving Perfection
          </h1>
          <button
            className="w-fit px-6 py-2 outline outline-offset-2 outline-2 text-base font-porsche font-semibold hover:bg-gray-200 rounded-sm"
            type="button"
          >
            The 911. Starting at $90,900
          </button>
        </div>
      </div>
      <div className="relative isolate px-10 md:px-20 lg:px-20">
        <div className="cardcontainer flex flex-col lg:flex-row  justify-between py-8 sm:py-40 lg:px-16">
          <a
            href="#"
            className="relative rounded-lg w-full lg:w-96 overflow-hidden h-auto hover:drop-shadow-3xl"
          >
            <img
              className="object-cover w-full"
              src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
              alt="Porsche 911 Le Mans"
            />
            <h3 className="absolute font-porsche font-semibold bottom-0 left-0 px-4 py-2 sm:px-6 sm:py-4   text-white">
              Porsche 911 Le Mans
            </h3>
          </a>
          <a
            href="#"
            className="relative rounded-lg w-full lg:w-96 overflow-hidden hover:drop-shadow-3xl"
          >
            <img
              className="object-cover w-full"
              src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
              alt="Porsche 911 Le Mans"
            />
            <h3 className="absolute font-porsche font-semibold bottom-0 left-0 px-4 py-2 sm:px-6 sm:py-4  text-white">
              Porsche 911 Le Mans
            </h3>
          </a>
          <a
            href="#"
            className="relative rounded-lg w-full lg:w-96 overflow-hidden hover:drop-shadow-3xl"
          >
            <img
              className="object-cover w-full"
              src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
              alt="Porsche 911 Le Mans"
            />
            <h3 className="absolute font-porsche font-semibold bottom-0 left-0 px-4 py-2 sm:px-6 sm:py-4 text-white">
              Porsche 911 Le Mans
            </h3>
          </a>
        </div>
        <div className="flex justify-between flex-col-reverse lg:flex-row bg-black rounded-lg">
          <div className="textbox flex flex-col px-16 justify-center">
            <h3 className="text-xl font-porsche font-semibold text-white tracking-wide">
              Find Your Porsche Center
            </h3>
            <p className="font-porsche text-white">
              A Porsche Center, and your dream Porsche vehicle, may be closer
              than you think. Search our Porsche Center network for the location
              closest to you.
            </p>
            <button
              className="w-fit px-6 py-2 my-6 bg-white hover:bg-gray-200 text-base font-porsche font-semibold rounded-sm"
              type="button"
            >
              Search now
            </button>
          </div>
          <img
            className="object-cover w-full"
            src={process.env.PUBLIC_URL + "/assets/img/infodealercenter2.png"}
          />
        </div>
        <div className="flex flex-col my-40">
          <h2 className="text-center text-5xl font-porsche font-semibold tracking-wide">
            Discover
          </h2>
          <div className="cardcontainer flex flex-col lg:flex-row  justify-between py-8 sm:py-16 lg:px-16">
            <div className="relative rounded-lg w-full lg:w-96 overflow-hidden h-auto">
              <img
                className="object-cover w-full"
                src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
                alt="Porsche 911 Le Mans"
              />
              <h3 className="absolute font-porsche font-semibold bottom-0 left-0 px-4 py-2 sm:px-6 sm:py-4  text-white">
                Porsche 911 Le Mans
              </h3>
            </div>
            <div className="relative rounded-lg w-full lg:w-96 overflow-hidden">
              <img
                className="object-cover w-full"
                src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
                alt="Porsche 911 Le Mans"
              />
              <h3 className="absolute font-porsche font-semibold bottom-0 left-0 px-4 py-2 sm:px-6 sm:py-4  text-white">
                Porsche 911 Le Mans
              </h3>
            </div>
            <div className="relative rounded-lg w-full lg:w-96 overflow-hidden">
              <img
                className="object-cover w-full"
                src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
                alt="Porsche 911 Le Mans"
              />
              <h3 className="absolute font-porsche font-semibold bottom-0 left-0 px-4 py-2 sm:px-6 sm:py-4 text-white">
                Porsche 911 Le Mans
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
