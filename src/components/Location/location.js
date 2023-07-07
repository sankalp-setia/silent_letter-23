import React from "react";
import styles from "./location.module.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const Location = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.bgimg_1}>
          <div className={styles["welcome-text"]}>
            <span className={styles["location-text"]}>
              
              <span style={{ fontSize: "larger" }}>
                <b>
                  <span style={{ color: "#ff2b06", fontSize: "larger" }}>Location  </span>
                  <span>And </span>
                  <span style={{ color: "#ff2b06", fontSize: "larger" }}>Venue</span>
                </b>
              </span>
              <br />
              <p>
                
                On,
                <span style={{ color: "#ff2b06", fontSize: "larger" }}>
                  
                  <b>February 12, 2023 </b>
                </span>
                we’re bringing our <br /> in-person
                <span style={{ color: "#ff2b06", fontSize: "larger" }}>
                  <b> TEDxIITGuwahati </b>
                </span>
                event BACK to the home <br /> of the green and white! Tag us
                with
                <span style={{ color: "#ff2b06", fontSize: "larger" }}>
                  <b> #IITGXiTED </b>
                </span>
                on social!
              </p>
            </span>
          </div>
        </div>
      <div>
        <div
          style={{
            position: "relative",
            backgroundColor: "white",
            textAlign: "justify",
          }}
        >
          <div className={styles["venue-location"]}>
            <div className={styles["venue-img-div"]}>
              <img className={styles["venue-img"]} src="/location_images/tedx3.jpg" alt="" />
            </div>
            <div className={styles["venue-info"]}>
              <span className={styles["heading"]}>
                
                <b> Venue</b>
              </span>
              <div className={styles["insti-name"]}>
                Indian Institute of Technology, Guwahati
              </div>
              <div className={styles["insti-info"]}>
                It's time that we give the leaders around us a stage to discuss their ideas worth spreading. Join us at our
                IN-PERSON event to be held at Indian Institute of Technology in
                Guwahati.
                <br />
                <br />
                Location:
                <br />
                Senate Hall, Administration Building,
                <br />
                IITGuwahati, Assam, India.
                <br />
                781039.
                <br />
                <br />
                Check the Exact Location on Google Maps: <a href="https://goo.gl/maps/wg5hYVDZVbegCz888" style={{color:"red"}}>Click Here</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["bgimg-3"]}>
          <div className={styles["about-event-text"]}>
            <span>
              <span>
                <b>
                  
                  A <span style={{ color: "#ff2b06" }}>DAY</span> OF
                </b>
              </span>
              <br />
              <span style={{ fontSize: "larger" }}>
                
                <b>
                  
                  <span style={{ color: "#ff2b06", fontSize: "larger" }}>
                    Ideas
                  </span>
                  , art, music, connections, <br /> new projects and a lot of
                  fun.
                </b>
              </span>
              <br />
              <span style={{ fontSize: "large" }}>
                
                An unforgettable gathering of minds and souls determined to
                <br /> play their part in designing a new world, for the better.
              </span>
            </span>
          </div>
        </div>


        <div style={{ position: "relative" }}>
          <div className={styles["guest-house-location"]}>
            <div className={styles["guest-house-info"]}>
              <span className={styles["heading"]}>
                
                <b> Hotel And Accomodation</b>
              </span>
              <div className={styles["guest-house-info-content"]}>
                Blending the semi urban style of Guwahati City with the quaint
                charm of IIT Guwahati, IIT Guwahati guest house welcomes you to
                an inviting stay in Guwahati.
              </div>
              <br/>
              Amingaon, North Guwahati, Guwahati, Assam 781039
              <br/>
              <br/>
              <span>Book your rooms now:</span>
              <a href="https://drive.google.com/file/d/1p4dQtV73XctLOHsjlTm6n_cG4zBKojnL/view?usp=share_link" style={{color:"red", margin:"auto 5px"}}>Link1</a><span style={{color: "red"}}>|</span>
              <a href="https://drive.google.com/file/d/18maamQJxZJ5aKH6cGxdA7Ijhb14v3V06/view?usp=share_link" style={{color:"red"}}> Link2</a>
              <br/>
              <br/>
              <span>Hotels near by:</span>
              <a href="https://www.iitg.ac.in/biodiverse2018/acom.html" style={{color:"red", margin:"auto 5px"}}>Link</a>
              
            </div>
            <div className={styles["guest-house-map-div"]}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.0301468139473!2d91.69319601483646!3d26.195697583441543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5beeb8f3e3d5%3A0xbfb2f167f3c2dae6!2sIIT%20Guwahati%20Guest%20House!5e0!3m2!1sen!2sin!4v1671727133216!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Location;