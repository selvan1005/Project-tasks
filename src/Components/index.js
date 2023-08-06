import React from "react";
import "./index.css";
import playbutton from"../assets/play-button.png"
import locate from"../assets/locate.png"
import calred from"../assets/calred.png"
import whitese from"../assets/whitese.png"
import profile from"../assets/profile.png"
import bedt1 from"../assets/bedt1.jpg"
import bedt2 from"../assets/bedt2.jpg"
import bed1 from"../assets/bed1.jpg"
import bed2 from"../assets/bed2.jpg"
import lux from"../assets/lux.jpg"
import staricon from"../assets/staricon.jpg"
import pool from"../assets/pool.png"
import thunder from"../assets/thunder.png"
import crossfit from"../assets/crossfit.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import faceicon from"../assets/faceicon.png"
import instaicon from"../assets/instaicon.png"
import googleicon from"../assets/googleicon.png"
import redalert from"../assets/red-alert.png"
const Index = () => {
  return (
    <div className="main-container">

      <div className="login-area">
        <button>Login</button>
      </div>
      <div className="header">

      <div className="content-header">
        <h1>Find your<br></br> perfect place<br></br> to stay</h1>

         <p className="para1">Our exquisite rooms offers a perfect blend of<br></br>contemporary elegence and warm hospitality</p>
        
        <div className="playbutton">
          <div className="play"><img src={playbutton} alt="image" style={{height:30,width:30}}/></div>
          <div className="watch video"><p className="para2" >Watch Video</p></div> 
         </div>
     </div>

      <div className="image-header">
        
       </div>
        </div>

        <div className="hotel-routing">
          <div className="locate">
            <p className="para3"><img src={locate} alt="image" style={{height:20,width:20}}/>Location</p>
            <p className="para4">india</p>

          </div>

          <div className="locate">
            <p className="para3"><img src={calred} alt="image" style={{height:20,width:20}}/>Check in</p>
            <p className="para4">12june2023</p>

          </div>

          <div className="locate">
            <p className="para3"><img src={calred} alt="image" style={{height:18,width:18}}/>Check out</p>
            <p className="para4">15july2023</p>

          </div>

          <div className="locate">
            <p className="para3"><img src={profile} alt="image" style={{height:18,width:18}}/>Rooms for</p>
            <p className="para4">1rooms,2guest</p>

          </div>

          <div className="locate" id="locayte">
            <p className="para3" style={{color:'white',fontSize:17,}}><img src={whitese} alt="image" style={{height:20,width:20,color:'white',position:"relative",top:5}}/>Search...</p>
            

          </div>

        </div>
        <div className="header2">  <h2>Our Most Popular Rooms</h2></div>

        <div className="body-content">
          <div className="content1">
            <div className="content-img">
            <img src={bedt1}/>
            </div>
            <div className="contentpara">
            <p className="para5">Executive Room</p>
            </div>
            <div className="contentstar">
            <p className="para6">$200 Par Night <img src={staricon} style={{height:15,width:15} }/>
            <img src={staricon} style={{height:15,width:15} }/><img src={staricon} style={{height:15,width:15} }/>
            <img src={staricon} style={{height:15,width:15} }/><img src={staricon} style={{height:15,width:15} }/> 4.8</p>
            </div>
            
             </div>

             <div className="content1">
            <div className="content-img">
            <img src={bedt2} />
            </div>
            <div className="contentpara">
            <p className="para5">Premium Room</p>
            </div>
            <div className="contentstar">
            <p className="para6">$200 Par Night  <img src={staricon} style={{height:15,width:15} }/>
            <img src={staricon} style={{height:15,width:15} }/><img src={staricon} style={{height:15,width:15} }/>
            <img src={staricon} style={{height:15,width:15} }/><img src={staricon} style={{height:15,width:15} }/>4.8</p>
            </div>
            
             </div>



             <div className="content1">
            <div className="content-img">
            <img src={bed2} />
            </div>
            <div className="contentpara">
            <p className="para5">Basic Room</p>
            </div>
            <div className="contentstar">
            <p className="para6">$200 Par Night  <img src={staricon} style={{height:15,width:15} }/>
            <img src={staricon} style={{height:15,width:15} }/><img src={staricon} style={{height:15,width:15} }/>
            <img src={staricon} style={{height:15,width:15} }/><img src={staricon} style={{height:15,width:15} }/>4.8</p>
            </div>
            
             </div>



        </div>


        <div className="contact">
          <div className="contact-para">
            <h3>We do our best<br></br>facilities provide you</h3>
            <p className="contact-para">Discover Your Ideal Heaven:Find Your Perfect Stay at Golden Sands Resort</p>
            <div className="contact-btn"><button>Contact Now</button></div>
          </div>
          <div className="contact-img">

            <div className="dir1">
            <div className="img-div1">
              <img src={pool} style={{height:20,width:20}}/>
              <p classname="conatact-para2">Private Sorkspace</p>
            </div>


            <div className="img-div2">
              <img src={thunder} style={{height:20,width:20}}/>
              <p classname="conatact-para2">Parking Area</p>
            </div>


            <div className="img-div3">
              <img src={crossfit} style={{height:20,width:20}}/>
              <p classname="conatact-para2">BreakFast</p>
            </div>



            <div className="img-div4">
              <img src={pool} style={{height:20,width:20}}/>
              <p classname="conatact-para2">Free WiFi</p>
            </div>
            </div>
            <br></br>
           <div className="dir2">

            <div className="img-div5">
              <img src={thunder} style={{height:20,width:20}}/>
              <p classname="conatact-para2">Free Electricity</p>
            </div>



            <div className="img-div6">
              <img src={pool} style={{height:20,width:20}}/>
              <p classname="conatact-para2">Swimming Pool</p>
            </div>



            <div className="img-div7">
              <img src={crossfit} style={{height:20,width:20}}/>
              <p classname="conatact-para2">Exercise Space</p>
            </div>



            <div className="img-div8">
              <img src={thunder} style={{height:20,width:20}}/>
              <p classname="conatact-para2">Other Services</p>
            </div>
            </div>


        

          </div>
        </div>

        <div className="discover">
          <div className="disc1">
             <img src={bed2} ></img>
          </div>

          <div className="disc2">
             <h4>Discover Our Histroy</h4>
             <p className="disc-para1">
              Golden sands resort has a rich histroy dating back over a century.originally a grand mansion,it transformed into a distinguished hotel!. 
             </p>
             <p className="disc-para2">
              Welcoming esteemed guests and Witnessting significant moments.it has evolved while preserving its historic charm.today,it stands as a icon of luxury,offering a perfect blend of heritage and contenporary hospitallity.
             </p>
             <div className="disc-btn">
             <button>Explore More</button> 
             </div>
          </div>

        </div>



        <div className="quesdiv">
          <div className="ques-para">
            <h5>Frequently Asked<br></br><span style={{color:"red"}}> Questions</span></h5>
            <p className="ques-book">You can book massages 7 days a week from 6 am to 11 pm,including public holidays</p>
          </div>


          <div className="ques-para2">
            <div className="station1">
              <h6>How Far is Nearest Bus Station <span className="span"><KeyboardArrowUpIcon/></span></h6>
              <p className="stationpara"> Welcoming esteemed guests and Witnessting significant moments.it has evolved while preserving its historic charm.today,it stands .
              
              </p>
            </div>

            <div className="station2">
             <h6 style={{position:"relative",left:30,top:10,}}>What Makes Us Different <span className="span1"><KeyboardArrowDownIcon/></span></h6>
            </div>

            <div className="station3">
               <h6 style={{position:"relative",left:30,top:10}}>What Tim is Checking Out <span className="span2"><KeyboardArrowDownIcon/></span></h6>
            </div>
          </div>
        </div>

        <div className="map">
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
        <div className="map-states">
          <h3>Visit Us</h3>
          <div className="map-content">
            <p>Lorem iposem is simply dummy text of the printing and typesetting <br></br>industry.leorem ipsum has been industry</p>
             <div className="searchclass">
              <p>Enter your email</p>
              <button>contact</button>

             </div>
          </div>
        </div>
        
        </div>



        <div className="footer">
             <div className="footer1">
              
                 <p>Looking forward to a wonderful <br></br>stay</p>
                 <div className="pic">
                  <img src={faceicon} style={{height:20,width:20,}}></img>
                  <img src={instaicon} style={{height:20,width:20}}></img>
                  <img src={googleicon} style={{height:20,width:20}}></img>
                 </div>
                 
             </div>

             <div className="footer2">
              <h2>Home</h2>
<ul>
  <li>Booking</li>
  <li>Facilities</li>
  <li>Location</li>
  <li>Contact</li>
</ul>
</div>

<div className="footer3">
<h2>Help</h2>
<ul>
  <li>About us</li>
  <li>Help center</li>
  <li>Privacy policy</li>
  <li>FAQs</li>
</ul>
</div>


<div className="footer4">
<h2>Get the app</h2>
  <ul>
    <li>ios app</li>
    <li>Android app</li>
  </ul>

</div>
        </div>

      {/* <div className="trishape"> 
           <img src={redalert} style={{height:100,width:100}}/>
      </div> */}
    </div>
  );
};

export default Index;
