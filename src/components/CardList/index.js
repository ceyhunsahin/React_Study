import React, { useState, useEffect } from "react";
import {Card} from "../Card";
import axios from "axios";

const apiKey = "1eeee6a7ed1e9cdd4c080ce8edabec58"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const CardList = () => {
    const [movieData, setMovieData] = useState(null);
    useEffect(() =>{
        axios.get(baseUrl,{
            params:{
                api_key: apiKey,
                page:1,
                query:'Star Wars' //TODO: from input
            }
        })
        .then((res) => setMovieData(res?.data?.results))
        .catch((err) => console.log(err))
    },[])
    return (
        <>
            { movieData && movieData.map((movie,index) =>{
                return (
                    <Card 
                        key = {index} 
                        title={movie.title}
                        imgSrc = {movie.poster_path}
                        
                        
                    />
            )}
            // 2 tane moviedata yazmamizin sebebi var mi  varsa map et diyoruz
            // biz orda  useState([]) de yazabiliriz ya da ternary yapariz
            //nullish coalesence ?? kullanimi movieData?.map gibi
            
        </>
    )
}