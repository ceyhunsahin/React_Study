
import {Card} from "../Card";
import {StyledCardList} from "./CardList.style"

export const CardList = ({movieList, baseImageUrl}) => {
  
    return (
        <StyledCardList>
           {movieList?.map(
               (movie, index) => (
               <Card 
                key={index} 
                title={movie.title}
                imgSrc={baseImageUrl + movie.poster_path}
                />)
            )}
        </StyledCardList>
    )
}

{/* // 2 tane moviedata yazmamizin sebebi var mi  varsa map et diyoruz
            // biz orda  useState([]) de yazabiliriz ya da ternary yapariz
            //nullish coalesence ? kullanimi movieData?.map gibi */}