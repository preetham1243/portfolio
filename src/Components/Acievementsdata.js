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