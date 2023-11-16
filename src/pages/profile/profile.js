import { ReactDOM, NavLink } from "react-dom";
import "../../index";
import Navbar from "../component/nav";
import Footer from "../component/footer";
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
      <Navbar />
      <div className="relative min-h-screen h-100 flex flex-row gap-y-6 my-20 px-10 lg:px-20">
        <div class="p-16 font-porsche">
          <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">
              <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div>
                  <p class="font-bold text-gray-700 text-xl">22</p>
                  <p class="text-gray-400">Friends</p>
                </div>
                <div>
                  <p class="font-bold text-gray-700 text-xl">10</p>
                  <p class="text-gray-400">Photos</p>
                </div>
                <div>
                  <p class="font-bold text-gray-700 text-xl">89</p>
                  <p class="text-gray-400">Comments</p>
                </div>
              </div>
              <div class="relative">
                <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img
                    className="inline-block rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button class="text-white py-1 px-4 uppercase rounded bg-black hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Edit
                </button>
              </div>
            </div>

            <div class="mt-20 text-center border-b pb-12">
              <h1 class="text-4xl font-medium text-gray-700">
                Ezar Satria Pramana{" "}
                <span class="font-light text-gray-500">19</span>
              </h1>
              <p class="font-light text-gray-600 mt-3">
                Purwokerto, Jawa Tengah
              </p>

              <p class="mt-8 text-gray-500">2203040104</p>
              <p class="mt-2 text-gray-500">Teknik Informatika</p>
            </div>

            <div class="mt-12 flex flex-col justify-center">
              <p class="text-gray-600 text-center font-light lg:px-16">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <button class="text-indigo-500 py-2 px-4  font-medium mt-4">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
