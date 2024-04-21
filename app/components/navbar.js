"use client";

import Link from "next/link";

export default function Navbar({ query, setQuery, handleSubmit }) {
  return (
    <nav className="bg-blue-900 p-4 flex justify-between items-center fixed w-full top-0 z-10">
      <div className="flex items-center">
        <Link href="/">
          <p
            className="text-white text-2xl font-bold mr-4"
          >
            Cinema Vault
          </p>
        </Link>
      </div>
      <div className="flex-grow text-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={query}
            className="bg-white text-black px-4 py-2 rounded-lg w-3/4"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-white text-black font-bold px-4 py-2 ml-2 rounded-lg hover:bg-gray-400 hover:text-white">
            Search
          </button>
        </form>
      </div>
      <div className="flex items-center">
        <Link href="/">
          <p className="text-white mr-4 hover:text-gray-400 w-24">Home</p>
        </Link>
        <Link href="/about">
          <p className="text-white hover:text-gray-400 w-24">About</p>
        </Link>
      </div>
    </nav>
  );
}
