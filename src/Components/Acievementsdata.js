import Universityimage from "./Assests/Universityimage.jpg";
import Collegeimage from "./Assests/Collegeimage.jpg";
import Schoolimage from "./Assests/Schoolimage.jpg";
import Playingcricketimage from './Assests/Playingcricketimage.png';
import Playingfootballimage from './Assests/Playingfootballimage.jpg';
import Internetsurfingimage from './Assests/Internetsurfingimage.jpg';
import webseriesimage from './Assests/webseriesimage.jpg';
import Datavisualization from './Assests/Datavisualization.jpg';
import Teluguimage from './Assests/Teluguimage.png';
import Tamilimage from './Assests/Tamilimage.png';
import Hindiimage from './Assests/Hindiimage.jpg';
import Englishimage from './Assests/Englishimage.jpg';
import htmllogo from './Assests/htmllogo.png';
import jslogo from './Assests/jslogo.png';
import csslogo from './Assests/csslogo.png';
import javalogo from './Assests/javalogo.png';
import pythonlogo from './Assests/pythonlogo.jpg';
export const acievementsdata =[
    {
        desc:"Participated in several hackathons",
        id:1
    },
    {
        desc:"Cleared two rounds in TCS codevita",
        id:2
    },
    {
        desc:"Got selected for online training In EPAM company",
        id:3
    },
    
]


export const hobbies=[
   
    {
        hobbies:'Playing Cricket',
        imgsrc:Playingcricketimage,
        id:1
        
    },
    {
        hobbies:'Playing Football',
        imgsrc:Playingfootballimage,
        id:2
        
    },
    {
        hobbies:'Internet Surfing',
        imgsrc:Internetsurfingimage,
        id:3
        
    },
    {
        hobbies:'Wacthing web series',
        imgsrc:webseriesimage,
        id:4
    },
]


export const profiles=[
   
    {
        name:"LinkdedIn",
        link:"https://www.linkedin.com/in/kiran-reddy-147047214",
        imgsrc:'https://img-premium.flaticon.com/png/128/1377/premium/1377213.png?token=exp=1625335529~hmac=0fe79c1cff800610ae01891d96e26a3d',
        bgcolor:"#0e76a8",
        t:true,
        id:1
     },
     {
        name:"Github",
        link:"https://github.com/kiran167",
        imgsrc:'https://image.flaticon.com/icons/png/512/25/25231.png',
        bgcolor:' #211F1F',
        t:true,
        id:2
     },
     {
        name:"Gmail",
        link:"https://www.gmail.com",
        imgsrc:'data:image/png;base64,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',
        bgcolor:'#D44638',
        t:false,
        id:3
     },
     {
        name:"Facebook",
        link:"https://www.facebook.com/siddu.kiranreddy",
        imgsrc:'https://image.flaticon.com/icons/png/128/187/187189.png',
        bgcolor:"#4267B2",
        t:true,
        id:4
     },
     
]

export const lang = [

     {
         lan:'Telugu',
         imgsrc:Teluguimage,
         id:0
     },
     {
        lan:'Hindi',
        imgsrc:Hindiimage,
        id:1
       },
    {
        lan:'English',
        imgsrc:Englishimage,
        id:2

    },
    {
        lan:'Tamil',
        imgsrc:Tamilimage,
        id:3
       }

]

export const personalinfo = [
    {
        name:'Siddu Kiran Reddy',
        dob:'20/09/2000',
        phno:'9704388160',
        email:'kiranreddy78653@gmail.com',
        nationality:'Indian',
        address:'1/27,Chennareddy peta, Porumamilla,Kadapa district',
        id:1
    }
]

export const schooling = [
    {
        name:' Sri Chaitanya School',
        percentage:'98%',
        yop:'2016',
        imgsrc:Schoolimage,
        id:1
    },
    {
        name:'Sri Chaitanya Junior College ',
        percentage:'97%',
        yop:'2018',
        imgsrc:Collegeimage,
        id:2
    },
    {
        name:'Vishnu Institute of Technology',
        percentage:'86%',
        yop:'2022',
        imgsrc:Universityimage,
        id:3
    },
]

export const Projectdata = [
    {
        projectname:"Data Visualization",
        id:1,
        imgscr:(Datavisualization),
        date:'Mon, May 15th 21',
        description:"This   Covid  project  is created  to  visualize  the  data   the  current  covid  situation  using  maps, graphs.  Here  we  uploaded  the  csv  file ​ that contains  data   of  the current  covid  situation  such as  record count, total deaths, new cases, new cases per million, deaths above 65 age etc. W​ith  the help of that  data ,we  create  some components  such as  graphs,  Scorecards, maps in which we can select our desired data that we need to represent through them.",
        link1:"https://datastudio.google.com/reporting/9c10d9f8-02cf-447e-bc26-52bf71e6ce92",
        link2:"https://datastudio.google.com/reporting/9c10d9f8-02cf-447e-bc26-52bf71e6ce92",
    },
    {
        projectname:"Portfolio",
        id:2,
        imgscr:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3qL7h_ydR2H5vChsNu8as2tIGgECr3amYA&usqp=CAU",
        date:"In Progress",
        description:"Portfolio site is an idea to develop a website for ourselves that displays our resume. Here we can upload our data and it gets displayed. This project is under progrss,  and completed front end.",
        link1:"#",
        link2:"#",
    },
    {
        projectname:"Santhi Nursery",
        id:3,
        imgscr:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3qL7h_ydR2H5vChsNu8as2tIGgECr3amYA&usqp=CAU",
        date:"Sat, Jun 25th 21",
        description:"Santhi Nursery site is created for a nursey in Kadiyampulnka village. Here we projected the nursery in a very beautiful way and in a interactive way. Here we can see crops they sell and seller details . It is a responsive static website through which we can view the items and contact the seller for delivery of items.",
        link1:"https://santhinursery.herokuapp.com/",
        link2:"https://www.github.com/preetham1243/santhinursery",
    }
]
export const carddata = [
    {name:'Siddu Venkata Kiran Reddy',
    edu:'B Tech.',
    age:'20',
    id:1
    },
]

export const skills = [
    {
        percentage:'80',
        imgsrc:htmllogo,
        id:1,
        color:'#e34c26', 
    },
    {
        percentage:'65',
        imgsrc:"data:image/png;base64,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",
         id:2  ,
         color:'#2965f1',  
},
    {
        percentage:'60',
        imgsrc:"data:image/jpeg;base64,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",
        id:3 ,
        color:'#b7c70a',   
},
    {
        percentage:'70',
        imgsrc:"data:image/jpeg;base64,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",
        id:4,
        color:'#f89820', 
    },
    {
        percentage:'80',
        imgsrc:pythonlogo,
        id:5,
        color:'#306988', 
    },
]

