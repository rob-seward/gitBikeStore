import React, {useState} from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';


const QuestionPopUpOuterStyled = styled.div`
display: grid;
background: linear-gradient(to bottom left, #7693A9, #A6BAC0);
position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        
        /* Hide this modal until we need it */
        opacity:  .5;
        

`;

const QuestionPopUpInnerStyled = styled.div`

        max-width: 320px;
        min-width: 270px;
        background-color: white;
        padding: 4rem;
        border-radius: 2px;
        pointer-events: all;
        .hidden {
          display:none;
        }
    
`;

export function QuestionPopUp(){
    const [popUp, showPopUp]=React.useState(false);
    
    return (
      
        <QuestionPopUpOuterStyled popUp={popUp} onClick={()=>showPopUp(!popUp)}>
            <QuestionPopUpInnerStyled>
            <form name="gitContact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
  <p>
    <label>YOUR NAME: <input type="text" name="name" /></label>   
  </p>
  <p class="hidden">
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>
  <p>
    <label>YOUR EMAIL: <input type="email" name="email" /></label>
  </p>
  
  <p>
    <label>MESSAGE:    <textarea name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <Button type="submit">SEND</Button>
  </p>
</form>
            </QuestionPopUpInnerStyled>
        </QuestionPopUpOuterStyled>
    );
}