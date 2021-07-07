import React from 'react';
import {Box, Grid, Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import "./Styles/Footer.css";







function Footer() {

  const kiransite = () => {
    
    window.open("https://www.google.com");
  
  }
 
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
      setOpen(!open);
  }
  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
  };
    return (
        <>
        <div className="footermain container-fluid" style={{marginTop:0.8}}>
          <div className="footerfirsthalf"style={{height:200}}>
           <h3 className="developedby" style={{}}>Developed by </h3>
           <Grid container direction="row" alignItems="center" justify="center" spacing={0}>
             <Grid item xs={6} sm={4} md={4}  >
               <div className="pov">
               <Box onClick={kiransite} className="kiran" color="white" bgcolor="palevioletred" p={2}>
                  <h4 >Preetham</h4>
                </Box>
                </div>
              </Grid>
             
              <Grid item xs={6} sm={4} md={4} >
              <div className="pov1">
              <Box className="preetham" color="white" bgcolor="palevioletred" p={2} onClick={handleClick} style={{cursor:'pointer'}}>
                <Snackbar open={open}  autoHideDuration={3000} onClose={handleClose}>
           <Alert  onClose={handleClose} severity="info"  style={{backgroundColor:'#bddbf2', width:'350px',color:'black'}}>
               <h6>You were on the same page</h6>
           </Alert>

       </Snackbar>
                <h4 >Kiran</h4>
                </Box>
                
                </div>
              </Grid>
            </Grid>
             
          </div>
            <div className="row footersecondhalf">
              <div className="col footercontact">
              <a href="home" style={{textDecoration:'none', color:'#FFD700'}}> <h5> Home </h5> </a>
              </div>
              <div className="col footercontact">
              <a href="profile" style={{textDecoration:'none', color:'#FFD700'}}> <h5> Contact Us </h5> </a>
              </div>
              <div className="col">
                <h6 className="footercontact">Total page views { } :</h6>
                <span className="footercontact"><img src="https://counter2.stat.ovh/private/freecounterstat.php?c=rcd1wbl4ugzxedk5e265mqt6lfa19kuy" border="0"  alt="website counter" /></span>
              </div>
            </div>

    
    <hr style={{color:'white',height:1.7}}/>
    <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>&copy; Copyright {new Date().getFullYear()}</p>
                    </div>
               </div>
        </div>
        
</>
    )
    
    
}

export default Footer















