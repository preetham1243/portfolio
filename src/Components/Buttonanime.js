import React from 'react';
import "./Styles/Buttonanime.css";
import  'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav} from 'react-bootstrap';


function Buttonanime() {
      return (
      <>
        
        <Navbar  expand="md" className="navbar" fixed="top">
        <div style={{paddingLeft:10}}>
        <Navbar.Brand href="/home" className=" logo btn btn-border-pop">
       <span>PORTFOLIO</span>
        </Navbar.Brand>
         </div>
        <Navbar.Toggle aria-controls="baisc-navbar-nav" style={{color:"brown",backgroundColor:"white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="/Home" style={{color:'white'}}><h4 className=" dd">Home</h4></Nav.Link>
              <Nav.Link href="/About" style={{color:'white'}}><h4 className=" dd">About</h4></Nav.Link>
              <Nav.Link href="/Projects" style={{color:'white'}}><h4 className=" dd">Projects</h4></Nav.Link>
              <Nav.Link href="/Profile" style={{color:'white'}}><h4 className="dd">Profile</h4></Nav.Link>
            </Nav>
          
            
        </Navbar.Collapse>    
            
          
        
          
        </Navbar>
       
        </>
    )
}

export default Buttonanime
