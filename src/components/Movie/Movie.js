import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { PaginationBar } from "./components/Pagination";
import { VideoSection } from './components/VideoSection';
import '../../App.css'
import {SearchBox} from "../SearchBox/SearchBox";
import {CardList} from "../CardList/CardList";

const apiKey = "1eeee6a7ed1e9cdd4c080ce8edabec58"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const MovieContext  = createContext();

function Movie() {

  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("Matrix")
  const [countPage, setCountPage] = useState(1);
  const handleChange = ( event, a) => {
    setPage(a);
    console.log(event);
  };
  useEffect(()=>{
      axios.get(
          baseUrl, {params: {
          api_key: apiKey,
          page: page,
          query: searchKeyword
          }}
      )
      .then((res) =>  {
        setMovieData(res?.data?.results);
        if (res?.data?.total_pages>=5) {
          setCountPage(5);
        } else 
        setCountPage(res?.data?.total_pages);
      })
      .catch()
      .finally()
  },[searchKeyword,page])

  return (
    <div className="App">
      <MovieContext.Provider value={{ movieList, baseImageUrl, setSearchKeyword,countPage, page, handleChange }}>
          <VideoSection />
          <SearchBar />
          <PaginationBar/>
          <CardList/>
      </MovieContext.Provider>
    </div>
  );
}

export default Movie;
