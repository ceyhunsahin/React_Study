import React from 'react';
//import './Card.style.scss';
import {StyledCardWrapper} from './Card.style';
import {StyledparaWrapper} from './Card.style';
/*const cardStyle = {
    color: 'red',
    "background-color" : "green"
}*/ // inline style ornegi

export const Card = () =>{
    return (
        // <div style = {cardStyle}>
        /*<div className  = 'cardWrapper'>
            <p style = {{margin : '100px'}}>Ceyhun</p>
            <p style = {{margin : '100px'}}>Ceyhun</p>
        </div>*/
        <StyledCardWrapper>
            <StyledparaWrapper>ceyhun</StyledparaWrapper>
            <StyledparaWrapper>zehra</StyledparaWrapper>
            <StyledparaWrapper>volkan</StyledparaWrapper>
        </StyledCardWrapper>
        
        )
} 