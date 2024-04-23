"use client";

import Footer from "./components/footer";
import { useState } from "react";
import Navbar from "./components/navbar";
import Trending from "./components/trending-page";

export default function Page() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query.trim()) {
      return;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
          query
        )}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDA1NWZkMzBkMjZkM2VhNjY4Nzc0MWE3MWY2OTI2ZCIsInN1YiI6IjY2MjM1NDcwZTg5NGE2MDE0YTM5Yjg3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZ1YnK6Dzmj5zVMiXc4K63HX7Eb-4KuYnev6TeTs2Cc",
          },
        }
      );
      const data = await response.json();
      setSearchResults(data.results);
      window.location.href = `/search/${query}`;
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <main className="relative min-h-screen">
      <Navbar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <section className="flex-grow mb-20">
        <Trending />
      </section>
      <Footer />
    </main>
  );
}
