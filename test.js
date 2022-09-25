import { createContext, useState } from "react";

const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  //Tady jsou dotáhnuté movies z API na základě vyhledávání
  const [foundMovies, setFoundMovies] = useState("");

  const [clickedMovieID, setClickedMovieID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  //State na základě kterého se vyrenderuje titulní stránka/search/manuální přidání
  const [addMovieState, setAddMovieState] = useState("PICK");

  // API data
  const API_KEY = "api_key=274808d92789c49e637a022e855f63dd";
  const BASE_URL = "https://api.themoviedb.org/3";

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const searchURL = BASE_URL + "/search/movie?" + API_KEY + "&query="; //k tomuto potřeba přidat hledanyNazev"

  //např. https://api.themoviedb.org/3/search/movie?api_key=274808d92789c49e637a022e855f63dd&query=potter

  //API call + error handling
  function getMovies(url) {
    setIsLoading(true);
    setError(null);

    fetch(url + searchTerm)
      .then((res) => {
        if (!res.ok) {
          throw Error("⚙️ Something went wrong: could not fetch the data ⚙️");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setFoundMovies(data.results);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);

        setError(error.message);
      });
  }

  return (
    <SearchContext.Provider
      value={{
        setFoundMovies,
        foundMovies,
        searchTerm,
        setSearchTerm,
        getMovies,
        searchURL,
        IMG_API,
        setClickedMovieID,
        clickedMovieID,
        isLoading,
        setIsLoading,
        error,
        addMovieState,
        setAddMovieState,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;
