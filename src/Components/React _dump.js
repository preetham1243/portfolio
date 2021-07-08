//  when a button is clicked and we have to render a component but
//  it gets rendered on the same page


const [ flag, setFlag] =useState(false);
  const Here = () => {
      setFlag(!flag);
  }

<Button onClick={ () => Here()}>Here</Button>
    { flag && <About />  }



//card fade right used in home in portfolio 
    

import Aos from 'aos';
import 'aos/dist/aos.css'; 

useEffect(()=>{
  Aos.init( {duration:3000} )
  },[]);

<Grid item xs={12} sm={12} md={7}>
                    <Card className="cardwidth"data-aos="fade-left"  id="grad" style={{height:300}}>
      <CardActionArea>
        
        <CardContent>
          <Typography >
              <div className="row">
             <div className="col">Name : </div> <div className="col" style={{paddingRight:450}}><h4>{name}</h4></div>
             </div>
          </Typography>
          <Typography>
          <div className="row">
             <div className="col">Education : </div> <div className="col" style={{paddingRight:400}}><h4>{education}</h4></div>
             </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
                    </Grid>
// #grad{
//   background-image: linear-gradient(to right, rgb(217, 223, 171), rgb(40, 190, 133), rgb(102, 100, 230));
  
//   box-shadow: 2px 4px 17px 3px rgb(11, 57, 73);

// }










// React button and submit from that was once in footer of portfolio
{/* <Grid item xs={12} sm={12} md={6}>
                  <p>If you think, we can go better </p>
                  <p>Please mail us :)</p>
                <form noValidate autoComplete="off">
                <input type="text" className="here" placeholder="" id="form"/><label htmlFor ="form">Enter</label> 
                
                
        <button className="btn btn-background-slide">Send</button>
     </form>
      </Grid> */}


    //   .btn {
    //     background-color: var(--background-color);
    //     color: #222;
    //     padding: .5em 1em;
    //     border: none;
    //     outline: none;
    //     position: relative;
    //     cursor: pointer;
         
    
    //     --background-color: #E3E3E3;
    //     --border-size: 2px;
    //     --accent-color: rgb(39, 233, 21);
    //   }
    
    // .btn.btn-background-slide::before {
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     bottom: 0;
    //     right: 0;
    //     z-index: -1;
    //     background-color: rgb(39, 233, 21);
    //     transition: transform 400ms ease-in-out;
    //     transform: scaleX(0);
    //     transform-origin: left;
    //   }
      
    //   .btn.btn-background-slide:hover::before,
    //   .btn.btn-background-slide:focus::before {
    //     transform: scaleX(1);
        
    //   }
      
    //   .btn.btn-background-slide {
    //     transition: color 300ms ease-in-out;
    //     z-index: 1;
    //   }
      
      
    //   .btn.btn-background-slide:hover,
    //   .btn.btn-background-slide:focus {
    //     color: white;
    //   }




    // Test Odi T20
    const [active,setActive] =useState("");
  
  return (
    <div className="maindiv">
    <nav>
    <button onClick={ () =>setActive("Test") }>Test</button>
    <button onClick={ () =>setActive("Odi")}>Odu</button>
    <button onClick={ () =>setActive("T20")}>T20</button>
    </nav>
    <div >
      {active ==='Test' && <Test />}
      {active ==='Odi' && <Odi />}
      {active ==='T20' && <T20 />}
      

    </div>
    
    </div>
  );



// getting form data

  const formdatafun = () => {
    var x = document.getElementById("formdata").value;
   console.log(x);
}