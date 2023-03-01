import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

//odpakowywanie obiektow function section({ title })
function Section({title,description,backgrounsImg,leftBtnText,rightBtnText}) {  
  return (
    <Wrap bgImage={backgrounsImg}>
        <Fade bottom>
            <ItemText>
            <h1>{ title }</h1>
            <p>{description}</p>
            </ItemText>
        </Fade>
            <Buttons>
        <Fade bottom>
            <ButtonGroup>

            <LeftButton>
                {leftBtnText}
            </LeftButton>
            {rightBtnText &&
                <RightButton>
                    {rightBtnText}
                </RightButton>
            }
            </ButtonGroup>
        </Fade>

        <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
   width:100vw; 
   height:100vh;
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
   background-image:url('/images/model-s.jpg');
   display:flex;
   flex-direction:column;
   justify-content:space-between; //wyrowna w pionie vertical
   align-items:center; // a to w poziomie wyrowna horizontal
   background-image:${props=>`url("/images/${props.bgImage}")`}
`
/* $props=>`url("/images/$props.bgImage bg image mamy w Wrapie
co powoduje ze zmienia sie obraz wraz ze modelem i pozostalymi
komponentami ")` */

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    
    
`
const ButtonGroup =styled.div`
display:flex;
margin-bottom:30px; 
@media (max-width:768px){
    flex-direction:column;
}
`
/*@media max width dziala w taki sposob jezeli przekroczymy
maksymalna szerokosc okna to nasz leftButton i RightButton
Zmienia sie w kolumne czyli beda rownolegle w pionie
a nie w poziomie*/

const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:Uppercase;
font-size:12px;
cursor:pointer;
margin:8px;


`

const RightButton=styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
`
//img musi byc bo image nie dziala 
const DownArrow =styled.img` 
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`

const Buttons =styled.div`

`
