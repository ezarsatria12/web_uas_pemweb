import { ReactDOM, NavLink } from "react-dom";
import "../../index";
import Navbar from "../component/detailnav";
import Footer from "../component/footer";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
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
  Video,
  useEffect,
  table,
} from "react";
import { Accordion } from "flowbite-react";
import { LinkIcon } from "@heroicons/react/24/outline";
import allPorscheModels from "../Product";
const motors = [
  {
    id: 1,
    bore: "102.0 mm",
    Stroke: "81.5 mm",
    Displacement: "3,996 cc",
    Maxpoweatrpm: "8,500 rpm",
    Maxenginespeed: "9,000 rpm",
    Maxtorque: "342 lb-ft",
    Maxtorqueatrpm: "6,300 rpm",
  },
];
const performance = [
  {
    id: 1,
    Toptrackspeed: "184 mph",
    milewithSportChronoPackage: "10.9 s",
  },
];
const body = [
  {
    id: 1,
    Length: "180.0 in",
    Widthwmirrorsfolded: "74.8 in",
    Width: "79.8 in",
    Height: "52.1 in",
    Wheelbase: "96.7 in",
    Turningcirclediameter: "34.5 ft",
    Curbweight: "	3,268 lb",
    GrossVehicleWeightRating: "	3,957 lb",
    Maximumload: "	689 lb",
  },
];
const Capacities = [
  {
    id: 1,
    Fueltank: "16.9 gal",
  },
];
export default function Example() {
  const [index, setIndex] = useState(0);
  function handleclick() {
    setIndex(index + 1);
  }
  useEffect(() => {
    document.title = " Detail GT3 RS - Porsche By Ezar Satria P";
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
      <div className="hero relative isolate min-h-screen">
        <div
          className="bottom-0 left-0 overflow-hidden mix-blend-normal"
          aria-hidden="true"
        >
          <img
            className="absolute h-full w-screen object-cover"
            src={process.env.PUBLIC_URL + "/assets/img/detailbg.jpg"}
            alt=""
          />
        </div>
        <div className="relative h-100 w-full flex flex-col justify-center gap-y-2 px-10 my-10 lg:px-20 snap-center">
          <h1 className=" text-6xl  font-porsche font-semibold tracking-wide text-white mx-auto">
            911 GT3
          </h1>
          <div className="h-96">
            <img
              className="w-100 h-auto mx-auto"
              src={process.env.PUBLIC_URL + "/assets/img_product/detailgt3.png"}
              alt=""
            />
          </div>

          <div className="mt-16 grid grid-cols-3 gap-x-40 text-base font-porsche font-normal tracking-wide text-white mx-auto justify-items-center">
            <p>$182,900</p>
            <p>502 hp</p>
            <p>198 mph</p>
          </div>
        </div>
      </div>
      <div className="relative flex items-end  h-screen overflow-hidden">
        <div class="relative z-30 p-5 text-5xl font-semibold text-white mx-20 my-48 w-1/2">
          <h1>Carpe secundum.</h1>
          <p className="text-base font-normal my-8">
            Carpe diem, they say – seize the day. But we are Porsche. And so our
            motto for the new 911 GT3 models is: carpe secundum – get the most
            out of every second. We know that your time is precious. And every
            minute in the cockpit is valuable. So, we have once again
            intensified everything that makes a sports car: performance, tuning,
            aerodynamics. Time flies. This is your time. Hop in.
          </p>
        </div>
        <video
          autoPlay
          muted
          loop
          class="absolute z-10 h-screen w-screen object-cover"
        >
          <source
            src={process.env.PUBLIC_URL + "/assets/video/porsche-video21.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative flex items-end  h-screen overflow-hidden">
        <div class="relative z-30 p-5 text-5xl font-semibold text-white mx-20 my-48 w-1/2">
          <h1>A new swan-neck mounted rear wing for additional downforce.</h1>
        </div>
        <video
          autoPlay
          muted
          loop
          class="absolute z-10 h-screen w-screen object-cover"
        >
          <source
            src={process.env.PUBLIC_URL + "/assets/video/porsche-video22.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative flex items-end  h-screen overflow-hidden">
        <div class="relative z-30 p-5 text-5xl font-semibold text-white mx-20 my-48 w-1/2">
          <h1>
            Front fascia with extended openings for optimized brake cooling.
          </h1>
        </div>
        <video
          autoPlay
          muted
          loop
          class="absolute z-10 h-screen w-screen object-cover"
        >
          <source
            src={process.env.PUBLIC_URL + "/assets/video/porsche-video23.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative flex items-end  h-screen overflow-hidden">
        <div class="relative z-30 p-5 text-5xl font-semibold text-white mx-20 my-48 w-1/2">
          <h1>
            Inspired by motorsport: carbon fiber hood with integrated air
            outlets.
          </h1>
        </div>
        <video
          autoPlay
          muted
          loop
          class="absolute z-10 h-screen w-screen object-cover"
        >
          <source
            src={process.env.PUBLIC_URL + "/assets/video/porsche-video24.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative flex flex-col min-h-screen mx-20 py-16 gap-2">
        <h1 className="font-porsche font-semibold text-5xl tracking-wide">
          The 911 GT3.
        </h1>
          <div className="grid grid-cols-3 gap-x-20 w-fit text-base font-porsche font-normal ">
            <p>$197,200</p>
            <p>518 hp</p>
            <p>296 kmh</p>
          </div>
         <div className="my-8 grid grid-cols-2 justify-between">
          <div className="">
            <h1 className="font-porsche font-semibold text-4xl tracking-wide my-5">
              Technical Specs
            </h1>
            <Accordion className="w-full border-none">
              <Accordion.Panel>
                <Accordion.Title className="font-porsche font-semibold text-2xl">
                  Motor
                </Accordion.Title>
                <Accordion.Content>
                  <table className="table-auto my-2 font-porsche font-semibold text-base">
                    {motors.map((product) => (
                      <tbody>
                        <tr className="border-b-2 py-2">
                          <th className="text-left">Bore</th>
                          <th className="text-left px-20">{product.bore}</th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Stroke</th>
                          <th className="text-left px-20">{product.Stroke}</th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Displacement</th>
                          <th className="text-left px-20">
                            {product.Displacement}
                          </th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Max. power at rpm</th>
                          <th className="text-left px-20">
                            {product.Maxpoweatrpm}
                          </th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Max. engine speed</th>
                          <th className="text-left px-20">
                            {product.Maxenginespeed}
                          </th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Max. torque</th>
                          <th className="text-left px-20">
                            {product.Maxtorque}
                          </th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Max. torque at rpm</th>
                          <th className="text-left px-20">
                            {product.Maxtorqueatrpm}
                          </th>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-porsche font-semibold text-2xl">
                  Performance
                </Accordion.Title>
                <Accordion.Content>
                  <table className="table-auto my-2 font-porsche font-semibold text-base">
                    {performance.map((product) => (
                      <tbody>
                        <tr className="border-b-2 py-2">
                          <th className="text-left">
                            Top track speed (with summer tires)
                          </th>
                          <th className="text-left px-20">
                            {product.Toptrackspeed}
                          </th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">
                            1/4 mile with Sport Chrono Package
                          </th>
                          <th className="text-left px-20">
                            {product.milewithSportChronoPackage}
                          </th>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-porsche font-semibold text-2xl">
                  Body
                </Accordion.Title>
                <Accordion.Content>
                  <table className="table-auto my-2 font-porsche font-semibold text-base">
                    {body.map((product) => (
                      <tbody>
                        <tr className="border-b-2 py-2">
                          <th className="text-left">Length</th>
                          <th className="text-left px-20">{product.Length}</th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Width w/ mirrors folded</th>
                          <th className="text-left px-20">
                            {product.Widthwmirrorsfolded}
                          </th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Width</th>
                          <th className="text-left px-20">{product.Width}</th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Height</th>
                          <th className="text-left px-20">{product.Height}</th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Wheelbase</th>
                          <th className="text-left px-20">
                            {product.Wheelbase}
                          </th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Turning circle diameter</th>
                          <th className="text-left px-20">
                            {product.Turningcirclediameter}
                          </th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Curb weight</th>
                          <th className="text-left px-20">
                            {product.Curbweight}
                          </th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">
                            Gross Vehicle Weight Rating (GVWR)
                          </th>
                          <th className="text-left px-20">
                            {product.GrossVehicleWeightRating}
                          </th>
                        </tr>
                        <tr className="border-b-2">
                          <th className="text-left">Maximum load</th>
                          <th className="text-left px-20">
                            {product.Maximumload}
                          </th>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-porsche font-semibold text-2xl">
                  Capacities
                </Accordion.Title>
                <Accordion.Content>
                  <table className="table-auto my-2 font-porsche font-semibold text-base">
                    {Capacities.map((product) => (
                      <tbody>
                        <tr className="border-b-2 py-2">
                          <th className="text-left">Fuel tank</th>
                          <th className="text-left px-20">
                            {product.Fueltank}
                          </th>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <div className="flex my-4 gap-7">
              <button
                className="w-fit px-6 py-2 my-6 bg-black text-white hover:bg-gray-200 text-base font-porsche font-semibold rounded-sm"
                type="button"
              >
                Build Your Porsche
              </button>
              <button 
                onClick={handleclick} className="w-fit px-6 py-2 my-6 text-white bg-gray-400  hover:bg-gray-200 text-base font-porsche font-semibold rounded-sm"
                type="button"
              >
                Test Drive
              </button>
              <h2>({index + 1})</h2>
            </div>
            <div className="flex my-4 gap-2">
              <FacebookShareButton
                url={"https://www.example.com"}
                quote={"Dummy text!"}
                hashtag="#muo"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.example.com"}
                quote={"Dummy text!"}
                hashtag="#muo"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </div>
          <div className="">
            <img
              className="w-full rotate-90 px-20 place-items-center"
              src={process.env.PUBLIC_URL + "/assets/img_product/gt3.svg"}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
