import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({ title ,description ,  leftBtnText, rightBtnText ,backdroundImg}) {
  return (
    <Wrap bgImage = {backdroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{ title }</h1>
        <p>{description}</p>
        </ItemText>
        </Fade>
        <Button>
     <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                {leftBtnText}
                

            </LeftButton>
            
            
            <RightButton>
                {rightBtnText}

            </RightButton>
            
    
            
        </ButtonGroup>
    </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
        </Button>
        
        </Wrap>
  )
}

export default Section
const Wrap = styled.div`
     
     width: 100vw;
     height: 100vh;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
    
     background-image: url('/images/model-s.jpg');
     display: flex;
     flex-direction:column;
     justify-content: space-between;
     align-items: center;
     background-image: ${props => `url("/images/${props.bgImage}")`}

`
const ItemText = styled.div`
      padding-top: 15vh;
      text-align: center;

`
const ButtonGroup = styled.div`
     display: flex;
     margin-bottom: 30px;
     @media (max-width: 768px) {
         flex-direction: column;
     }

`
const LeftButton = styled.div`
     background-color: rgba(23 ,26, 32, 0.8);
     height:40px;
     width:256px;
     color: white;
     display: flex;
     justify-content: center;
     align-items:center;
     border-radius: 100px;
     opacity: 0.85;
     text-transform: uppercase;
     font-size:14px;
     cursor: pointer;
     margin: 8px;
`
const RightButton= styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`
const DownArrow= styled.img`
     margin-top: 20px;
     overflow-x:hidden;
     height: 40px;
     animation-name: amimateDown;
     
     animation: amimateDown 1.5s infinite;
     

    
     

`
const Button= styled.div`

`