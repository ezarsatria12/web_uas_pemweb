import ReactDOM from "react-dom";
import "../index";
import Navbar from "./component/nav";
import Footer from "./component/footer";
import {
  useState,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Slider,
} from "react";
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
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
            className="w-fit px-6 py-2 outline outline-offset-2 outline-2 text-base font-porsche font-semibold"
            type="button"
          >
            The 911. Starting at $90,900
          </button>
        </div>
      </div>
      <div className="relative isolate px-10 lg:px-20">
        <div className="cardcontainer flex justify-between gap-4 sm:gap-8 py-4 sm:py-8">
          <div className="relative sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden h-auto">
            <img
              className="object-cover w-full"
              src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
              alt="Porsche 911 Le Mans"
            />
            <h3 className="absolute bottom-0 left-0 px-4 py-2 sm:px-6 sm:py-4 bg-black text-white">
              Porsche 911 Le Mans
            </h3>
          </div>
          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden">
            <img
              className="object-cover w-full"
              src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
              alt="Porsche 911 Le Mans"
            />
            <h3 className="absolute bottom-0 left-0 px-4 py-2 sm:px-6 sm:py-4 bg-black text-white">
              Porsche 911 Le Mans
            </h3>
          </div>
          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden">
            <img
              className="object-cover w-full"
              src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
              alt="Porsche 911 Le Mans"
            />
            <h3 className="absolute bottom-0 left-0 px-4 py-2 sm:px-6 sm:py-4 bg-black text-white">
              Porsche 911 Le Mans
            </h3>
          </div>
        </div>
        <div className="flex justify-between bg-black rounded-md">
          <div className="textbox flex flex-col px-16 justify-center">
            <h3 className="text-xl font-porsche text-white">
              Find Your Porsche Center
            </h3>
            <p className="font-porsche text-white">
              A Porsche Center, and your dream Porsche vehicle, may be closer
              than you think. Search our Porsche Center network for the location
              closest to you.
            </p>
            <button
              className="w-fit px-6 py-2 my-6 bg-white text-base font-porsche font-semibold"
              type="button"
            >
              Search now
            </button>
          </div>
          <img
            className=""
            src={process.env.PUBLIC_URL + "/assets/img/infodealercenter2.png"}
          />
        </div>
        <div className="flex flex-col my-40">
          <h2 className="text-center text-xl font-porsche font-semibold">
            Discover
          </h2>
          <div className="cardcontainer flex gap-12 py-8 ">
            <a href="/" className="relative overflow-hidden h-auto">
              <img
                className="object-cover"
                src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
              />
              <h3 className="absolute top-0 left-0 px-6 py-4">
                Porsche 911 Le Mans
              </h3>
            </a>
            <a href="/" className="relative overflow-hidden">
              <img
                className="object-cover"
                src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
              />
              <h3 className="absolute top-0 left-0 px-6 py-4">
                Porsche 911 Le Mans
              </h3>
            </a>
            <a href="/" className="relative overflow-hidden">
              <img
                className="object-cover"
                src={process.env.PUBLIC_URL + "/assets/img/news1.jpg"}
              />
              <h3 className="absolute top-0 left-0 px-6 py-4">
                Porsche 911 Le Mans
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
