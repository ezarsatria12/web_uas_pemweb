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
    document.title = "SERVICES - Porsche By Ezar Satria P";
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
      <div className="relative flex flex-col h-100 my-10 px-10 gap-10 lg:px-20">
        <div className=" flex flex-col gap-y-6 font-porsche">
          <h1 className="max-w-screen-sm text-4xl font-porsche font-semibold tracking-wide">
            Porsche Scheduled Maintenance Plan
          </h1>
          <p>
            The Porsche Scheduled Maintenance Plan (PSMP) is a prepaid service
            plan to maintain your Porsche at its best, and maintain your
            peace-of-mind.Simply choose a plan tailored to your requirements,
            then focus on enjoying the drive. Meanwhile, your maintenance costs
            are fixed for the duration of the plan. You can choose any
            participating authorized Porsche dealership to carry out the
            scheduled services. And the regular recommended servicing – by
            skilled Porsche technicians using Porsche Genuine Parts – will help
            to maintain your Porsche’s retail value.
          </p>
        </div>
        <div className=" flex flex-col gap-y-6 font-porsche">
          <h1 className="max-w-screen-sm text-4xl font-porsche font-semibold tracking-wide">
            Making ownership easier
          </h1>
          <p>
            The world of Porsche is your world, and My Porsche is your digital
            gateway. Wherever you are, you can subscribe, configure and manage
            your Porsche Connect services, manage your personal data, organize
            service appointments, and stay up-to-date, informed and in
            touch.With My Porsche, you can receive service reminders, safety
            updates – even notifications of Porsche events in your area. My
            Porsche is also the easy way to stay in contact with your Porsche
            Center, anywhere, any time. Accessible via your smartphone, My
            Porsche makes it even easier to own and enjoy your Porsche.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
