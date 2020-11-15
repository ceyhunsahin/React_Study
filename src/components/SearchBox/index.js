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
import {useRef} from 'react';
import {StyledSearchBox, StyledSearchInput, StyledSearchButton} from "./SearchBox.style"

export const SearchBox = ({setSearchKeyword}) => {
    const inputRef = useRef();

    return (
        <StyledSearchBox>
           <StyledSearchInput ref={inputRef} isColored={false}/>
           <StyledSearchButton onClick={()=>setSearchKeyword(inputRef?.current?.value)}>Search</StyledSearchButton> 
        </StyledSearchBox>
    )
}