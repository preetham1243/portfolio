import React from 'react';
import "./Styles/About.css";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import InfoIcon from '@material-ui/icons/Info';
import Footer from "./Footer";
import { Paper } from '@material-ui/core';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {acievementsdata, hobbies,lang,personalinfo,schooling} from "./Acievementsdata";
import {GiSkills } from 'react-icons/gi';
import badge from "./Assests/badge.png";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import kiranresumeimage from "./Assests/kiranresumeimage.jpeg";
import profilebgimage from './Assests/profilebgimage.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function npersonalinfo(val){
  return(
    <div key={val.id}>
    <h5 >Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{val.name}</h5>
    <h5 >DOB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{val.dob}</h5>
    <h5>Phone No. :&nbsp;&nbsp;{val.phno}</h5>
    <h5>Email  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{val.email}</h5>
    <h5>Address  &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{val.address}</h5>
    </div>
  );
}

function nschooling(val){
  return(
    <Grid item xs={12} sm={12} md={12} lg={4} key={val.id}>
       <Paper className="accordian2paper" elevation={8} >
          <div className="accordian2cards">
            <div className="schooling" style={{backgroundImage:`url(${val.imgsrc})`}}></div>
            
            <Typography component={'div'}  style={{fontFamily:'cursive'}}>
              <div className="row">
                
              <div className="col">
              Name 
              </div>:
              <div className="col">
              {val.name}
              </div>
              </div>
              <br />
              <div className="row">
              <div className="col">
              Year of passing  
              </div>  :  
              
              <div className="col">
               {val.yop}
              </div>
              </div>
              
              <div className="row">
              <div className="col">
              Percentage 
              </div>:
              <div className="col">
              {val.percentage}
              </div>
              </div>
            </Typography>
            
            </div>
          </Paper>
          </Grid>
  );
}

function nachievements(val){
  return(
  
      <Grid item xs={8} sm={8} md={5} lg={4} key={val.id}>
        <img src={badge} alt="Achievemt Badge" id="achievementbadge"/>
       <Paper elevation={3} id="achievements">
         {val.desc}
       </Paper>
      </Grid>
  );
}

function nhobbies(val){
  return(
  
      <ListItem key={val.id}>
        <ListItemAvatar>
          <Avatar>
            <img className="hobbiesavatart" src={val.imgsrc} alt="" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={val.hobbies} secondary={val.desc} />
      </ListItem>

  );
}

function nlanguages(val) {
  return(
    
    <ListItem key={val.id}>
    <ListItemAvatar>
      <Avatar>
      <img className="hobbiesavatart" src={val.imgsrc} alt="" />
      </Avatar>
        </ListItemAvatar>
        <ListItemText primary={val.lan}/>
      </ListItem>

  );
}

function About() {
  const classes = useStyles();

  return (
    <>
    
     <div  className="accordianmain"  style={{paddingTop:110}}>
        <Grid container direction="row" alignItems="center" justify="center" spacing={4}>
          
          
          <Grid item xs={12} sm={8} md={4} lg={3} style={{marginRight:0}}>
          <div className="Card">
            <div className="uppercontainer" style={{backgroundImage: `url(${profilebgimage})`}}>
              <div className="imagecontainer">

                <img src={kiranresumeimage} alt="" />

              </div>
            </div>
            <div className="lowercontainer">
            <h3>Siddu Venkata Kiran Reddy</h3> <br />
            <h5>Education : BTech.</h5> <br />
            <h5>Age : 20</h5>
            </div>
          </div>
          </Grid>






       {/* Acoordian1 */}
          <Grid item xs={12} sm={8} md={6} lg={6}>
      <Accordion >
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
         
          id="accordian1"
        >
          <div className="Acoordiantwo">
          <Typography className={classes.heading} style={{paddingRight:20}}>Personal Info   </Typography>
          <InfoIcon className="Acoordianicons" />
          </div>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'lightblue'}}>
          <Typography component={'div'} >
       
            <div className="">
              
             {personalinfo.map(npersonalinfo)}
             
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>


      {/* Accordian2 */}
      <Accordion>
        <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              
              id="accordian2"
            >
              <div className="Acoordiantwo">
                  <Typography className={classes.heading} style={{paddingRight:20}}> Schooling</Typography>
                  <SchoolIcon className="Acoordianicons" />
              </div>
              
        </AccordionSummary>
        <AccordionDetails id="inneraccordian2">
        
              <Typography component={'div'} variant={'body2'}>
              <hr style={{height:3,color:'white'}}/>
                 <Grid container direction="row" alignItems="center" justify="center" spacing={2}>
                        {schooling.map(nschooling)}
                 </Grid>

                  </Typography>
        </AccordionDetails>
      </Accordion>


      {/* Accordian3 */}


      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          
          id="accordian3"
        >
          <div className="Acoordiantwo">
          <Typography className={classes.heading} style={{paddingRight:20}}>Skills   </Typography>
           
          <GiSkills className="Acoordianicons"/>
          </div>
        </AccordionSummary>
        <AccordionDetails  >
        <Grid container direction="row" alignItems="center" justify="center" spacing={3} >
              
              <Grid item xs={8} sm={6} md={6} lg={4}>
              
              <div style={{position: 'relative', width: '15vh', height: '100px' }}>
                <img style={{position: 'absolute', width: '60%',left:'20%',top:'20%',borderRadius:'2px'}} src="data:image/png;base64,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" alt="HTML logo" />
                   <div style={{position: 'absolute'}}>
                     
                        <CircularProgressbar
                            
                              value={80}
                              strokeWidth={5}
                              
                              styles={buildStyles({
                                
                            
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,
                            
                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                            
                                // Colors
                                pathColor: `#e34c26`,
                                textColor: '#0AF',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                              })}
                              
                              
                            />
                       
                      </div>
                    </div>
                    <p style={{paddingTop:'2vh',paddingLeft:'6vh'}}>80%</p>
              </Grid>
              
              <Grid item  xs={8} sm={6} md={6} lg={4}>
              
              <div style={{position: 'relative', width: '15vh', height: '100px'}}>
                <img style={{position: 'absolute', width: '50%',left:'25%',top:'20%'}} src="data:image/png;base64,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" alt="CSS logo" />
                   <div style={{position: 'absolute'}}>
                     
                        <CircularProgressbar
                            
                              value={65}
                              strokeWidth={5}
                              
                              styles={buildStyles({
                                
                            
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,
                            
                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                            
                                // Colors
                                pathColor: `#264de4`,
                                textColor: '#0AF',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                              })}
                              
                              
                            />
                       
                      </div>
                    </div>
                    <p style={{paddingTop:'2vh',paddingLeft:'6vh'}}>65%</p>
              </Grid>
              
              <Grid item xs={8} sm={6} md={6} lg={4}>
              
              <div style={{position: 'relative', width: '15vh', height: '100px' }}>
                <img style={{position: 'absolute', width: '100%',left:'0%',top:'20%',borderRadius:'2px'}} src="data:image/png;base64,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" alt="JS logo" />
                   <div style={{position: 'absolute'}}>
                     
                        <CircularProgressbar
                            
                              value={60}
                              strokeWidth={5}
                              
                              styles={buildStyles({
                                
                            
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,
                            
                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                            
                                // Colors
                                pathColor: `orange`,
                                textColor: '#0AF',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                              })}
                              
                              
                            />
                       
                      </div>
                    </div>
                    <p style={{paddingTop:'2vh',paddingLeft:'6vh'}}>60%</p>
              </Grid>
              <Grid item xs={8} sm={6} md={6} lg={4}>
              
              <div style={{position: 'relative', width: '15vh', height: '100px' }}>
                <img style={{position: 'absolute', width: '100%',left:'0%',top:'20%',borderRadius:'2px'}} src="data:image/png;base64,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" alt="JAVA logo" />
                   <div style={{position: 'absolute'}}>
                     
                        <CircularProgressbar
                            
                              value={70}
                              strokeWidth={5}
                              
                              styles={buildStyles({
                                
                            
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,
                            
                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                            
                                // Colors
                                pathColor: ``,
                                textColor: '#0AF',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                              })}
                              
                              
                            />
                       
                      </div>
                    </div>
                    <p style={{paddingTop:'2vh',paddingLeft:'6vh'}}>70%</p>
              </Grid>
              <Grid item xs={8} sm={6} md={6} lg={4}>
              
              <div style={{position: 'relative', width: '15vh', height: '100px' }}>
                <img style={{position: 'absolute', width: '60%',left:'20%',top:'20%',borderRadius:'2px'}} src="data:image/jpeg;base64,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" alt="PYTHON logo" />
                   <div style={{position: 'absolute'}}>
                     
                        <CircularProgressbar
                            
                              value={80}
                              strokeWidth={5}
                              
                              styles={buildStyles({
                                
                            
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,
                            
                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                            
                                // Colors
                                pathColor: `#d9d630`,
                                textColor: '#0AF',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                              })}
                              
                              
                            />
                       
                      </div>
                    </div>
                    <p style={{paddingTop:'2vh',paddingLeft:'6vh'}}>80%</p>
              </Grid>
              </Grid>
              
        </AccordionDetails>
      </Accordion>
 
      {/* Fourth Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          
          id="accordian4"
        >
          <div className="Acoordiantwo">
          <Typography className={classes.heading} style={{paddingRight:20}}>Languages </Typography>
          <InfoIcon className="Acoordianicons" />
          </div>
        </AccordionSummary>
        <AccordionDetails>
        
          <Typography component={'div'}>
         
          <List>
            {lang.map(nlanguages)}
          </List>
           
          </Typography>

        </AccordionDetails>
      </Accordion>

       {/* Fifth Accordion */}
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          
          id="accordian5"
        >
          <div className="Acoordiantwo">
          <Typography className={classes.heading} style={{paddingRight:20}}>Hobbies </Typography>
          <InfoIcon className="Acoordianicons" />
          </div>
        </AccordionSummary>
        <AccordionDetails id="inneraccordian5">
          <Typography component={'div'}>
            <List>
              {hobbies.map(nhobbies)}
           </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      </Grid>
      
      </Grid>
      <div className="container">
      <Grid container direction="row" alignItems="center" justify="center" spacing={5}>
      {acievementsdata.map(nachievements)}
      </Grid>
      </div>
      
     </div> 
     
      <Footer />
          </>
    
  );
}
export default About;


