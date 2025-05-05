"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [selectedProperty, setSelectedProperty] = useState("");

  return (
    <section className="hero">
      <div className="absolute inset-0">
        <Image
          src="https://www.joeyshostel.com/img/slide-1.jpg"
          alt="Joey's Hostel"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <h2 className="mb-3 text-2xl font-semibold uppercase tracking-wider md:text-3xl">
            Joey's Hostel Delhi
          </h2>
          <h1 className="mb-6 text-3xl font-bold md:text-5xl lg:text-6xl">
            Launch Your Travels From
          </h1>
          <h1 className="mb-8 text-3xl font-bold md:text-5xl lg:text-6xl">
            The Heart of Delhi's Backpacking Scene
          </h1>

          <Link href="/destinations/delhi" className="mb-12 inline-block">
            <button className="btn-primary rounded bg-[#27adec] px-8 py-3 font-medium uppercase tracking-wide">
              Rooms & Suites
            </button>
          </Link>

          <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center rounded-md bg-white bg-opacity-90 p-2 text-black sm:flex-row">
            <select
              value={selectedProperty}
              onChange={(e) => setSelectedProperty(e.target.value)}
              className="mb-2 w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 text-gray-700 sm:mb-0 sm:mr-2 sm:w-auto sm:flex-grow"
            >
              <option value="">- Select a property -</option>
              <option value="delhi">Delhi</option>
              <option value="agra">Agra</option>
              <option value="rishikesh">Rishikesh</option>
              <option value="homestay">Homestay</option>
              <option value="by-the-ganges">By the Ganges</option>
            </select>
            <Link
              href={
                selectedProperty
                  ? `/destinations/${selectedProperty}`
                  : "#"
              }
              className={`w-full sm:w-auto ${
                !selectedProperty ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <button
                disabled={!selectedProperty}
                className="w-full whitespace-nowrap rounded bg-[#27adec] px-6 py-2 font-medium text-white hover:bg-opacity-90 sm:w-auto"
              >
                CHECK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
