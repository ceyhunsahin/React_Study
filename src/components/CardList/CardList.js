import {useContext} from 'react';
import {Card} from "../Card/Card";
import {MovieContext} from "../Movie/Movie";
import {StyledCardList} from "./CardList.style"
export const CardList = () => {
  const {movieList, baseImageUrl} = useContext(MovieContext);
    return (
        <StyledCardList>
           {movieList?.map(
               (movie, index) => (
               <Card 
                key={index} 
                title={movie.title}
                id={movie.id}
                imgSrc={movie.poster_path ? baseImageUrl + movie.poster_path
                : "https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg"}    
                />)
            )}
        </StyledCardList>
    )
}



