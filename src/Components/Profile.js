import { Avatar, Grid } from '@material-ui/core';
import { Box } from '@material-ui/core'
import React from 'react'
import {profiles} from "./Acievementsdata";
import "./Styles/Profile.css";
import Footer from './Footer';
function nprofiles(val){
    const profilelink = () => {
    
        window.open(val.link);
      
      }
    return(
    
    <Grid item xs={12} sm={6} md={6} lg={5} >
        {val.t ? 
        <Box color="white" bgcolor={val.bgcolor} p={2} style={{marginBottom:20,cursor:'pointer'}} onClick={profilelink} className="io">
        <Avatar>
            <img src={val.imgsrc} alt="df" id="profileavatar"/>
        </Avatar>
        <h4 style={{marginLeft:15}}>{val.name}</h4>
        </Box>
        :
        <a href="mailto:kiranreddy78653@gmail.com" style={{textDecoration:'none'}}><Box color="white" bgcolor={val.bgcolor} p={2} style={{marginBottom:20,cursor:'pointer'}} className="io">
        <Avatar>
            <img src={val.imgsrc} alt="df" id="profileavatar"/>
        </Avatar>
        <h4 style={{marginLeft:15}}>{val.name}</h4>
        </Box>
        </a>
        }
    </Grid>
   
    );
}



function Profile() {
 
    return (
        <>
        <div className="profiles">
            <div className="container">
         <Grid container direction="row" alignItems="center" justify="center" spacing={3} style={{paddingTop:120}}>
            {profiles.map(nprofiles)}
         </Grid>
         <Grid container direction="row" alignItems="center" justify="center" spacing={0}>
         <Grid item xs={12} sm={10} md={8} lg={6} className="feedback">
            <h4> Please give us your feedback here</h4>
         <form>
         <textarea rows="5" style={{resize: 'none',width:'100%'}}  id="formdata" htmlFor="formdata" placeholder="Enter">
         </textarea>
         <div className="buttonprofileadj">
         <button className="profilebutton profilebutton-background-slide" type="submit">Send</button>
         </div>
         </form>
         </Grid>
         </Grid>
         </div>
         
        </div>
        <Footer />
        </>
        
    )
}

export default Profile
