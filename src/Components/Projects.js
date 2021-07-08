import { Grid } from '@material-ui/core'
import React from 'react'
import "./Styles/Projects.css";
import Footer from './Footer';

import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {Projectdata} from './Acievementsdata'
function nprojects(val) {
    const projectlink1 = () => {
        window.open(val.link1);
    }
    const projectlink2 = () => {
        window.open(val.link2);
    }
    return(
        
        
        
        <div style={{paddingTop:110}} className="container">
        {/* style={{backgroundImage:`url(${val.imgscr})`}} */}
        <div className="projectbox">
        <Grid container direction="row">
        <Grid item xs={12} sm={12} md={6} lg={6}>
                <div className="projectname">
                   <h4 > {val.projectname}</h4>
                   </div>
                   <div className="projectdate">
                   <EventAvailableIcon style={{marginRight:7,marginBottom:11}}/>{val.date}
                   </div>

                   
                
                <div className="projectdesc">
                {val.description}
                </div>
                <div className=" projectbuttons">
                <div className="row">
                    <div className="col">
                <button  id="projectlink" className="btn1 third1" onClick={projectlink1}>Link</button>
                     </div>
                     <div className="col">
           
                <button id="projectlink" className="btn1 third2" onClick={projectlink2}>Github</button>    
            </div>
            </div>
                  
            
            </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
            <div className=" imgp" style={{width:'100%'}}>
                <img src={val.imgscr} alt="" />
            </div>
            </Grid>
            </Grid>
            
           
            
                </div>
                </div>
        
        
        
        
    )
}
function Projects() {
    // const [open, setOpen] = useState(false);
    // const handleClick = () => {
    //     setOpen(true);
    // }
    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //       return;
    //     }
    //     setOpen(false);
    // };
    return(
    <>
    <div className ="projectmain">
        {Projectdata.map(nprojects)}
    </div>


       
        <Footer />
    </>
    )
}

export default Projects;
