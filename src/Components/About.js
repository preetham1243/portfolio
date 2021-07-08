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
import {acievementsdata, hobbies,lang,personalinfo,schooling,carddata,skills} from "./Acievementsdata";
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
    <h5 >Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{val.name}</h5>
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
        <h5> {val.desc} </h5>
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
function ncarddata(val){
  return(
    <div key={val.id}>
    <h3>{val.name}</h3><br />
    <h4>{val.edu}</h4><br />
    <h4>{val.age}</h4><br />
    </div>
  )
}


function nskills(val){
  return(
  <Grid item xs={6} sm={4} md={4} lg={4} key={val.id}>
              
              <div style={{position: 'relative', width: '17vh', height: '100px' }}>
                <img style={{position: 'absolute', width: '60%',left:'20%',top:'20%',borderRadius:'2px'}} src={val.imgsrc} alt="" />
                   <div style={{position: 'absolute'}}>
                     
                        <CircularProgressbar
                            
                              value={val.percentage}
                              strokeWidth={5}
                              
                              styles={buildStyles({
                                
                            
                                pathTransitionDuration: 0.5,
                            
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                            
                                pathColor: val.color,
                                textColor: '#0AF',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                              })}
                              
                              
                            />
                       
                      </div>
                    </div>
                    <h6 style={{paddingTop:'4vh',paddingLeft:'7vh'}}>{val.percentage}%</h6>
              </Grid>
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
            {carddata.map(ncarddata)}
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
          <div className="container">
        <Grid container direction="row" alignItems="center" justify="center" spacing={3} >
           
           {skills.map(nskills)}

        </Grid>
        </div>
              
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


