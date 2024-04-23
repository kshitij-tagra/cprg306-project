"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function ContactUs({ handleSubmit }) {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <div className="container mx-auto my-36 px-5">
        <h1 className="text-3xl font-bold mb-5 text-center">Contact Us</h1>

        <div className="flex flex-row justify-around space-x-10 mt-20">
          <div className="flex flex-col items-center">
            <Image
              src="/kshitij.jpg"
              alt="Kshitij Profile Picture"
              width={250}
              height={250}
              className="rounded-full border-4 border-gray-300 hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            <h2 className="text-2xl font-semibold mt-5">Kshitij Tagra</h2>
            <p className="mt-10">
              <Link
                href="https://github.com/kshitij-tagra/"
                className="text-blue-900 underline"
              >
                GitHub Profile
              </Link>
            </p>
            <p className="mt-1">
              <Link
                href="https://www.linkedin.com/in/kshitij-tagra-a1ba95261/"
                className="text-blue-900 underline"
              >
                LinkedIn Profile
              </Link>
            </p>
            <p className="mt-1">
              <Link
                href="mailto:kshitij20112003@gmail.com"
                className="text-blue-900 underline"
              >
                Email ID
              </Link>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/jaskaran.jpg"
              alt="Jaskaran Profile Picture"
              width={250}
              height={250}
              className="rounded-full border-4 border-gray-300 hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            <h2 className="text-2xl font-semibold mt-5">Jaskaran Singh</h2>
            <p className="mt-10">
              <Link
                href="https://github.com/Jaskaran-singh1/"
                className="text-blue-900 underline"
              >
                GitHub Profile
              </Link>
            </p>
            <p className="mt-1">
              <Link
                href="https://www.linkedin.com/in/jaskaran-singh-1228b3264/"
                className="text-blue-900 underline"
              >
                LinkedIn Profile
              </Link>
            </p>
            <p className="mt-1">
              <Link
                href="mailto:jaskaran2503.jpr@gmail.com"
                className="text-blue-900 underline"
              >
                Email ID
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
