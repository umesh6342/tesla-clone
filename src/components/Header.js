import React , { useState}  from  'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
     const [burgerStatus , setBurgerStatus] =useState(false);
  return (
    <Container>
        <a>
            <img src = "/images/logo.svg" alt=''/>
        </a>
        <Menu>
            <a herf="#">Model S</a>
            <a herf="#">Model Y</a>
            <a herf="#">Model 3</a>
            <a herf="#">Model X</a>


        </Menu>

       < RightMenu>
       <a herf="#">Shop</a>
       <a herf="#">Tesla Account</a>

       <CustomMenu  onClick = {()=>setBurgerStatus(true)}/>
       
       
       </RightMenu>
       <BurgerNav  show ={burgerStatus}>
         <CloseWrapper>

             <CustomClose onClick={()=>setBurgerStatus(false)}/>

         </CloseWrapper>
         
         <li><a href ="#">Existing Inventory</a></li>
         <li><a href ="#">Used Inventory</a></li>
         <li><a href ="#">Trade-in</a></li>
         <li><a href ="#">Test Drive</a></li>
         <li><a href ="#">Powerwall</a></li>
         <li><a href ="#">Commercial Energy</a></li>
         <li><a href ="#">Utilities</a></li>
         <li><a href ="#">Charging</a></li>
         <li><a href ="#">Find Us</a></li>
         <li><a href ="#">Shop</a></li>
         <li><a href ="#">Account</a></li>
         <li><a href ="#">More</a></li>
         <li><a href ="#">Contact Us</a></li>




       </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position: fixed;
  display: flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;

`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: no-wrap;
  }
`
const RightMenu= styled.div`
  display: flex;
  align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: no-wrap;

    @media(max-width :768px){
        display:none;
        
    }
}
  
`
const CustomMenu = styled(MenuIcon)`
 cursor: pointer;

`
const BurgerNav = styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
background: white;
width:300px;
z-index:16;
list-style: none;
padding:20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
li {
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  a {
    font-weight: 600;

  }
}

`
const CustomClose = styled(CloseIcon)`
cursor: pointer;


`
const CloseWrapper = styled.div`
 display: flex;
 justify-content: flex-end;


`