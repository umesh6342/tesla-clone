import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        
        < Section 
           title = "Model S"
           description="Order Online for Touchless Delivery"
           backdroundImg ="model-s.jpg"
           leftBtnText ="Custom order"
           rightBtnText = "Exixting inventory"
        
        
        
        />


       < Section
         title = "Model Y"
         description="Order Online for Touchless Delivery"
         backdroundImg ="model-y.jpg"
         leftBtnText ="Custom order"
         rightBtnText = "Exixting inventory"
      
         
       
       
       />
        < Section
          title = "Model 3"
          description="Order Online for Touchless Delivery"
          backdroundImg ="model-3.jpg"
          leftBtnText ="Custom order"
          rightBtnText = "Exixting inventory"
       
        
        />
     < Section 
        title = "Model X"
        description="Order Online for Touchless Delivery"
        backdroundImg ="model-x.jpg"
        leftBtnText ="Custom order"
        rightBtnText = "Exixting inventory"
     
     
     /> 
     <Section
       title = "Solar Panels"
       description="Lowest Cost Solar Panels in India"
       backdroundImg ="solar-panel.jpg"
       leftBtnText ="order now"
       rightBtnText = "learn more"
    
     />
     <Section
      title = "Solar Roof"
      description="Produce Clean Energy
      From Your Roof"
      backdroundImg ="solar-roof.jpg"
      leftBtnText ="order now"
      rightBtnText = "learn more"
   

     />
     <Section
       title = "Accessories"
       
       backdroundImg ="accessories.jpg"
       leftBtnText ="Shop now"
      
    
     
     />


    </Container>
  )
}

export default Home
const Container = styled.div`
       height = 100vh;

`