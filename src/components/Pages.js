import React from "react";
import "./Pages.css";
import img1 from './img1.png'
import logo from './logo.png'
import logoR from './logoR.png'
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import white from './white.jpg'
import tvs from './tvs.jpg'
import tata from './tata.png'
import oneplus from './oneplus.png'
import micro from './micro.jpg'
import md from './md.png'
import jiocinema from './jiocinema.png'
import d11 from './d11.jpg' 
import bajaj from './bajaj.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const observer = new IntersectionObserver((entries) =>{
   entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add('show');
    }else{
        entry.target.classList.remove('show');
    }
   });    
});

const hiddenElement = document.querySelectorAll('.container');
hiddenElement.forEach((el)=> observer.observe(el));
 

function Pages() {
    return(
      <>
           <div className="container" style={{ background: 'linear-gradient(180deg,    #ff3300,#880808)' }}>
        
            <button className="menu-button">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <img src={logo} alt="a" className="logo" />
            
            <div className=" content fw-bold fs-1">
                <b> we unite</b>
                  <h1>Fresh Ideas</h1>
                  <h3  style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Stories</h3>
                  <h3  style={{ color: 'rgba(255, 255, 255, 0.5)' }}>talents</h3>
            </div>
            <div>
            <img src={img1} alt="c" className="right-aligned-image" />
            </div>
            
        
            
       
        </div>
        <div className="container" >
            <div className="left-content">
                 <div className="text fw-bold fs-1"><b>OUR</b><br/>
                 <b>Story</b></div>
                 <img src={logoR} alt="R" className="LogoR" />
            </div>
            <div className="right-content fw-bold">
                <div className="OurStory">
                   <p fw-bold >KNIGHT OWL MEDIA</p>
                   <p style={{color:'black'}} className= "small">KnightOwl Media unites fresh ideas, talent and stories to bring out
                    result driven solutions! We are a result-driven influencer marketing
                    and talent management organization that elevates businesses to
                    scale up their brand through bold strategic marketing and brand
                    initiatives We develop powerful campaigns and bring ideas to life
                    and work with several leading industry giants in the gaming,
                    entertainment and lifestyle space!</p>
                    <p fw-bold >KNIGHT OWL MEDIA</p>
                    <p style={{color:'black'}} className="small">We develop powerful campaigns and bring ideas to life and work with
                    several leading industry giants in the gaming, entertainment and
                    lifestyle space!</p>
                    <button className="readmore">Read More</button>
                </div>
            </div>
        </div>
        <div className="container" style={{ background: '#fdbc00', height:'400px'}}>
            <div className="yellow-left">
            LET'S TAKE  
            YOUR  BRAND
            ON A JOY RIDE
            WITH US!    
          
            </div>
            <div className="yellow-right">
                
            <img src={img1} alt="c" className="right-aligned-image" style={{height:"480px" , width:"480px" , transform:"rotate(6deg)"}} />
            </div>

        </div>
        <div className="container" >

        <div className="creator-left">
            <p style={{color:"blue" , fontSize:"40px" , lineHeight:"1"}} className="creator-font">Our <br/>creators</p>
            <p className=" fw-bold">We’re passionate about
            providing our clients with
            incredible service and
            exceptional results, driven by
            experienced talent agents and
            social media experts – entirely
            focused on your success.</p>
            <button className="readmore" style={{background:"Red",color:"white" , border:"1px solid red"}}>view all</button>
        </div>


        <div className="creator-right" style={{display:"flex"}} >
        <div class="card" style={{width:" 18rem",height:"22rem", marginBottom:"40px", overflow:"hidden" , position:"relative" }} className="box">
            <img src={p1} alt="a" className="CreatorImg"/>
            <div className="id">
          
            
            <p style={{color:"white" , fontWeight:"900" , textTransform:"capitalize" , fontSize:"20px" , bottom:"0"  }}>hitesh Sharma</p> 
            <div className="id1"> 
             <a href="/" > @hitshSharma </a>
             <a href="/">hitesh@xyz</a>
             </div>
             
            </div>
           
            </div>
        <div class="card" style={{width:" 18rem",height:"22rem", marginBottom:"40px", overflow:"hidden" , position:"relative" }} className="box">
            <img src={p2} alt="a" className="CreatorImg"/>
            <div className="id">
          
            
            <p style={{color:"white" , fontWeight:"900" , textTransform:"capitalize" , fontSize:"20px" , bottom:"0"  }}>Mark Wood</p> 
            <div className="id1"> 
             <a href="/"> @markwood </a>
             <a href="/">mark@xyz</a>
             </div>
             
            </div>
           
            </div>
        <div class="card" style={{width:" 18rem",height:"22rem", marginBottom:"40px", overflow:"hidden" , position:"relative" }} className="box">
            <img src={p3} alt="a" className="CreatorImg"/>
            <div className="id">
          
            
            <p style={{color:"white" , fontWeight:"900" , textTransform:"capitalize" , fontSize:"20px" , bottom:"0"  }}>elena</p> 
            <div className="id1"> 
             <a href="/"> @elena </a>
             <a href="/">elena@xyz</a>
             </div>
             
            </div>
           
            </div>
        </div>
        </div>

        <div className="container" style={{marginTop:"60px" , height:"400px" ,background: 'linear-gradient(180deg, #03045e,#0077b6)', overflow:"hidden" }} >
            <div className="prom-left">
                <p style={{color:"#ffa500" , textTransform:"uppercase" , fontWeight:"900" , fontSize:"30px" , marginTop:"10px" , marginLeft:"40px"}}><span style={{color:"white"}}>ko</span> in media</p> 
                <div style={{display:"flex" , margin:"20px"}}>
                <div class="card" style={{width: "18rem", background:"transparent" , border:"none" , margin:"20px" }}>
                <img class="card-img-top" src={white} alt="Card cap" style={{objectFit:"cover", height:"160px" }} />
                <div class="card-body">
                    <p style={{fontWeight:"800" , color:"white", textTransform:"uppercase", lineHeight:"1"}}>Ko X BB KI Vines</p>
                    <p class="card-text" style={{fontWeight:"300" , color:"white", lineHeight:"1"}} >We help brands maximize reach
                            and engagement with campaigns</p>
                            <button className="readmore" style={{border:"1px solid #ffa500" , background:"#ffa500",color:"black"}}>Read More</button>
                 </div>
                </div> 
                <div class="card" style={{width: "18rem", background:"transparent" , border:"none" , margin:"20px" }}>
                <img class="card-img-top" src={white} alt="Card cap" style={{objectFit:"cover", height:"160px" }} />
                <div class="card-body">
                    <p style={{fontWeight:"800" , color:"white", textTransform:"uppercase", lineHeight:"1"}}>Ko is here</p>
                    <p class="card-text" style={{fontWeight:"300" , color:"white", lineHeight:"1"}} >This dynamic approach to communication is excellent </p>
                            <button className="readmore" style={{border:"1px solid #ffa500" , background:"#ffa500",color:"black"}}>Read More</button>
                 </div>
                </div> 
                </div> 
            </div>
            <div className="prom-right">

            </div>

 
        </div>

        <div className="container" style={{ height:"360px" , borderBottom:"10px solid red" , overflow:'hidden'}}>
            <div className="sponser-left">
                 <p style={{color:"blue" , fontWeight:"800" , fontSize:"60px", lineHeight:"1" , textTransform:"uppercase"}}>Our</p>    
                 <p style={{color:"blue" , fontWeight:"800" , fontSize:"60px", lineHeight:"0.7" , textTransform:"uppercase"}}>clients</p>    
            </div>
            <div className="sponser-right">
              <div> <img src={bajaj} alt="" className="" /></div>
              <div> <img src={d11} alt="" className="" /></div>
              <div> <img src={jiocinema} alt="" className=""/></div>
              <div> <img src={md} alt="" className="" /></div>
              <div> <img src={micro} alt="" className="" /></div>
              <div> <img src={tvs} alt="" className="" /></div>
              <div> <img src={tata} alt="" className="" /></div>
              <div> <img src={oneplus} alt="" className="" /></div>

            </div>
        </div>


        <div className="container" style={{overflow:'hidden'}}>
            <div className="main-div" style={{display:"flex" }}>
                <div style={{width:'33%'}}>
                       <img src={logoR} alt="a" className="LogoR"  style={{marginTop:"30px"}}/>
                       <br />
                       <br />
                       <br />
                       <p style={{color:"blue" , fontWeight:"600" , textTransform:"uppercase" , marginLeft:"75px"}}>follow us</p>
                       <FontAwesomeIcon icon={faInstagram} style={{height:'40px' , marginLeft:'75px' , color:'red'}} />
                       <FontAwesomeIcon icon={faFacebook} style={{height:'40px' , marginLeft:'20px' , color:'blue'}} />
                     

                </div>
                <div style={{width:'33%', marginLeft:'150px'}}>
                    <p style={{marginTop:'30px', marginLeft:'50px' ,textTransform:'uppercase' ,color:'blue' , fontWeight:'700'}}>quick links</p>
                    <ul>
                        <li style={{listStyleType:'none', textTransform:'capitalize' ,lineHeight:'2.2' , fontWeight:'600'}}>home</li>
                        <li style={{listStyleType:'none', textTransform:'capitalize' ,lineHeight:'2.2' , fontWeight:'600'}}>our story</li>
                        <li style={{listStyleType:'none', textTransform:'capitalize' ,lineHeight:'2.2' , fontWeight:'600'}}>our team</li>
                        <li style={{listStyleType:'none', textTransform:'capitalize' ,lineHeight:'2.2' , fontWeight:'600'}}>creators</li>
                        <li style={{listStyleType:'none', textTransform:'capitalize' ,lineHeight:'2.2' , fontWeight:'600'}}>KO in Media</li>
                        <li style={{listStyleType:'none', textTransform:'capitalize' ,lineHeight:'2.2' , fontWeight:'600'}}>blog</li>
                        <li style={{listStyleType:'none', textTransform:'capitalize' ,lineHeight:'2.2' , fontWeight:'600'}}>contact us</li>
                    </ul>
  
                </div>
                <div style={{width:'33%', marginLeft:'150px'}}>
                <p style={{marginTop:'30px', marginLeft:'50px' ,textTransform:'uppercase' ,color:'blue' , fontWeight:'700'}}>get in touch</p>
                <p style={{marginTop:'30px', marginLeft:'50px' ,textTransform:'uppercase' , fontWeight:'500'}}>TEL</p>
                <p style={{ marginLeft:'50px' ,textTransform:'uppercase' , fontWeight:'500', lineHeight:'.4'}}>+91940303</p>
                <p style={{marginTop:'30px', marginLeft:'50px' ,textTransform:'uppercase' , fontWeight:'500'}}>email</p>
                <p style={{ marginLeft:'50px' , fontWeight:'500', lineHeight:'.4'}}>hello@knightowl.media</p>
                <p style={{marginTop:'30px', marginLeft:'50px' ,textTransform:'uppercase' , fontWeight:'500'}}>address</p>
                <p style={{ marginLeft:'50px' , fontWeight:'500', lineHeight:'1'}}>Golf Course Extn
Gurugram, Haryana</p>
               
                </div>
               

            </div>


        </div>
      
      </>
    );
}

export default Pages;