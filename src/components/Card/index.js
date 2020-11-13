import React from 'react';
//import './Card.style.scss';
import {StyledCardWrapper, StyledText} from "./Card.style"
/*const cardStyle = {
    color: 'red',
    "background-color" : "green"
}*/ // inline style ornegi

export const Card = ({title}) => {
    return (
        // <div style = {cardStyle}>
        /*<div className  = 'cardWrapper'>
            <p style = {{margin : '100px'}}>Ceyhun</p>
            <p style = {{margin : '100px'}}>Ceyhun</p>
        </div>*/
        <StyledCardWrapper>
            <StyledText>{title}</StyledText>
        </StyledCardWrapper>
        
        )
} 