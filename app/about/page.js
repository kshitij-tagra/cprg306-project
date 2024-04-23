"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
import { useState } from "react";

export default function About({ handleSubmit }) {
  const [query, setQuery] = useState("");

  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      <Navbar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />

      <section className="p-8 flex flex-col items-center flex-grow mt-28">
        <h1 className="text-3xl font-bold mb-4">About Cinema Vault</h1>
        <p className="text-lg mb-8 text-center w-3/4">
          Welcome to Cinema Vault! We are dedicated to providing movie
          enthusiasts with a comprehensive platform for discovering the latest
          trends, exploring in-depth reviews, and utilizing a powerful search
          system. Our goal is to create an engaging and informative experience
          for all cinema lovers.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-lg w-3/4 mb-8">
          <li>Easy-to-use search functionality for discovering movies.</li>
          <li>Detailed information on recent blockbusters and hidden gems.</li>
          <li>Curated trending movies to keep you updated.</li>
          <li>A user-friendly platform accessible to everyone.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg text-center w-3/4">
          Cinema Vault is powered by a passionate team of film lovers who are
          dedicated to sharing the magic of cinema. Our team works hard to bring
          you the best content, including movie reviews and industry insights.
        </p>

        <div className="flex justify-center items-center mt-8">
          <Link href="/contact">
            <button className="bg-blue-900 text-white font-bold px-4 py-2 rounded-md mt-10 hover:hover:text-gray-400">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
