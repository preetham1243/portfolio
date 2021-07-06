import React, {useEffect}  from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import {Grid} from '@material-ui/core';
import Loginimage from './Assests/Loginimage.jpg'
import { makeStyles } from '@material-ui/styles';
import "./Styles/Home.css";
import kiranresumeimage from "./Assests/kiranresumeimage.jpeg";
import Signup from "./Signup";
import Modal from '@material-ui/core/Modal';
// login modal styles
const loginmodalstyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    
    maxHeight: '100%',
    width:'100%',
    maxWidth: '70vh',
    height:'',
    overflowY: 'auto',
    overflowX: 'auto',
    
    left: '50%',
    top: '50%',
    boxShadow: '2px 4px 17px 3px rgba(11,57,73)',
    transform: 'translate(-50%, -50%)',
    borderRadius:'2%',
    
    backgroungSize:'cover',
    backgroundRepeat:'no-repeat',
    
  // top:'0',
  //    left:'0',
  //     right:'0', 
  //     bottom:'0', 
  //   margin:'auto'

  },
}));

// Home usestyles


const useStyles = makeStyles({
    root: {
      maxWidth: 1000,
    },
    media: {
      height: 140,
    },
  });


function Home() {
  // Modal required functions
  const loginmodal = loginmodalstyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <>
    <div  className={loginmodal.paper} >
     
         <Grid container direction="row">
           <Grid item xs={7}>
          <Signup />
        </Grid>
        <Grid item xs={5}>
          <img className="loginimg" src={Loginimage} alt="Profile photo"/>
        </Grid>
      </Grid>
      
      
    </div>
    </>
  );
 
  
  // Modal required functions Ends here


  // Home reuired functions
    const classes = useStyles();
    let name ="Kiran Reddy Siddu";
    let education = "BTech"
    
        useEffect(()=>{
          Aos.init( {duration:3000} )
          },[]);
  // Ends here
        return (
            <div class="homemain">
                <div className="homephoto" style={{marginTop:76}} >
                   
                   <Grid container  spacing={2} direction="column" alignItems="center" justify="center">
                       <Grid item xs={5} sm={4} md={3} lg={2} style={{}}>
                   <img data-aos="fade-right" data-aos-delay="500" className="boxes" data-aos="fade-right" src={kiranresumeimage} alt="Profile Photo" />
                    </Grid>
                    <Grid item  xs={12} sm={10} md={6} lg={4}>
                    <div data-aos="fade-left" data-aos-delay="500" id="nameafterphoto" style={{fontSize:40,paddingLeft:30}} >{name}</div>

                    </Grid>
                    <Grid item xs={12} sm={10} md={10} lg={6}>
                
                        <h5 >if you want to know more plaese login !!!</h5>
                        <div id="linkinhome">
                        <a onClick={handleOpen} id="linkinhome" style={{cursor: "pointer",  fontSize:20, color:'blue'}} >Login</a>
                        </div>
                        <div className="container">
                          
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="simple-modal-title"
                              aria-describedby="simple-modal-description"
                            >
                              
                              {body}
                            </Modal>
                        </div>
                     </Grid>
                    </Grid>
                   
                    
                </div>
                        
            </div>
        )
}

export default Home
