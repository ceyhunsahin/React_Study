/*import {useState} from 'react';
import {StyledSearchBox, StyledSearchInput, StyledSearchButton} from "./SearchBox.style"

export const SearchBox = ({setSearchKeyword}) => {
    const [inputValue, setInputValue] = useState("");
    
    return (
        <StyledSearchBox>
           <StyledSearchInput isColored={false} onChange={(e)=>setInputValue(e.target.value)}/>
           <StyledSearchButton onClick={()=>setSearchKeyword(inputValue)}>Search</StyledSearchButton> 
        </StyledSearchBox>
    )
}*/
import {createContext, useRef, useContext} from 'react';
import {StyledSearchBox, StyledSearchInput, StyledSearchButton} from "./SearchBox.style"

import {MovieContext} from '../../App';

export const SearchBox = () => {
    const inputRef = useRef();
    const {setSearchKeyword} = useContext(MovieContext);

    return (
        <StyledSearchBox>
           <StyledSearchInput ref={inputRef} isColored={false}/>
           <StyledSearchButton onClick={()=>setSearchKeyword(inputRef?.current?.value)}> Search </StyledSearchButton>
        </StyledSearchBox>
    )
}