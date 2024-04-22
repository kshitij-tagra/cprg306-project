"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function SearchResultsPage({ handleSubmit }) {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const decodeQuery = decodeURIComponent(query);

  const [searchQuery, setSearchQuery] = useState(decodeQuery);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
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
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <>
      <Navbar
        query={searchQuery}
        setQuery={setSearchQuery}
        handleSubmit={handleSubmit}
      />
      <section className="flex flex-col items-center">
        {searchResults.length > 0 ? (
          <div className="w-3/4">
            <h2 className="text-2xl font-semibold ml-5 mt-36">
              Search results:
            </h2>
            <ul className="flex flex-col px-5 pt-3 mt-10">
              {searchResults.map((movie) => (
                <Link href={`/movies/${movie.id}`} key={movie.id}>
                  <li
                    className="flex flex-row text-stone-900 py-3"
                    key={movie.id}
                    query={movie.title}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      className="w-44 h-72 rounded-md mb-2 border-2 border-gray-300 hover:border-gray-800 transition duration-300 ease-in-out"
                    />
                    <div>
                      <h3 className="text-md font-semibold pl-3">
                        {movie.title} ({formatDate(movie.release_date)})
                      </h3>
                      <p className="text-sm pl-3">{movie.overview}</p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <h2 className="w-3/4 text-2xl font-semibold ml-5 mt-36">
            No results found
          </h2>
        )}
      </section>
      <Footer />
    </>
  );
}
