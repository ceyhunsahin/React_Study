import React from 'react';
//import './Card.style.scss';
import {StyledCardWrapper, StyledText} from "./Card.style"
/*const cardStyle = {
    color: 'red',
    "background-color" : "green"
}*/ // inline style ornegi

export const Card = ({title, imgSrc}) => {
//export const Card = ({movie}) => {
    // const {title} = movie
    return (
        // <div style = {cardStyle}>
        /*<div className  = 'cardWrapper'>
            <p style = {{margin : '100px'}}>Ceyhun</p>
            <p style = {{margin : '100px'}}>Ceyhun</p>
        </div>*/
        <StyledCardWrapper>
            <img src = {imgSrc} />
            <StyledText>{title}</StyledText>
           {/* <StyledText>{title}</StyledText> */}
        </StyledCardWrapper>
        
        )
} 