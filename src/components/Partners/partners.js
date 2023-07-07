import React from "react";
import styles from "./partners.module.css";
import { useRef } from 'react';
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Counter from '../Counter/counter'



const Partners = () => {

    const scroller = useRef();

    var leftScroll = () => {
        scroller.current.scrollLeft -= 510;
        console.log("ClickedLeft");
    }

    var rightScroll = () => {
        scroller.current.scrollLeft += 510;
        console.log("Clickedright");
    }

    setInterval(moveLeft, 2000);
    var temp = 100;
    function moveLeft() {
        if (scroller.current.scrollLeft == temp) scroller.current.scrollLeft = 0;
        else scroller.current.scrollLeft += 500;
        temp = scroller.current.scrollLeft;
    }

    return (
        <div>
            <Navbar></Navbar>
            <div id={styles["intro_container"]}>
                <div id={styles["intro_content"]}>
                    <span className={styles.white} id={styles["intro_heading"]}>
                        Partner with <span>TEDxIITGuwahati</span>
                    </span>
                    <p className={styles.white} id={styles["intro_info"]}>
                        We’re looking for a select group of strategic partners to help us grow the impact of TEDxIITGuwahati over
                        the
                        next five years to help us reach 100,000 Guwahatians through our live events and 250 million global
                        citizens
                        through our videos.
                    </p>
                    <p className={styles.white} id={styles["intro_info"]}>
                        Partners are critical to our future, and will experience tremendous value from the alignment with our
                        brand,
                        the community impact, and the broad exposure that comes through our events and community of leaders.
                    </p>
                </div>
            </div>
            <section className={styles["bold_heading"]} id={styles["partnering"]}>
                Why Partner with Us?
            </section>
            <div id={styles["info_grid"]}>
                <section data-aos="fade-up" id={styles["two"]}>
                    <span className={styles.bold_heading}>
                        Align with TEDxIITGuwahati
                    </span>
                    <hr className={styles.divider} />
                    <p>
                        In a world with short attention spans, TEDxIITGuwahati makes reaching your target audience easy and
                        cost-effective. Our audience interacts with our messaging at a high rate year-round. With email
                        engagement rates of 20%, we’ll share your sponsorship message alongside our trusted content, giving your
                        brand the lift you’re looking for. Want to get in front of our largest audiences? Our video views have
                        topped 150 million in just the last three years. By sponsoring our Talks, you’re getting in front of an
                        engaged and large audience.
                    </p>
                </section>
                <img src="/Images/grid_pic1.png" id={styles["one"]}></img>
                <img src="/Images/grid_pic2.jpg" id={styles["three"]}></img>
                <section data-aos="fade-down" id={styles["four"]}>
                    <span className={styles.bold_heading}>
                        Be a Part of the Community
                    </span>
                    <hr className={styles.divider} />
                    <p>
                        We partner with organizations that are community-minded, innovative, and want to be a part of meaningful
                        and lasting change in the Colorado community (and beyond). We have built a massive community of
                        speakers, attendees, and partners who actively engage in our programming as a vehicle to create a better
                        Colorado. Through our 100 million views, we are actively influencing the way people think and perceive
                        the world. Your brand can play a key role in designing and exposing our audience to your messaging, all
                        while impacting and aligning with local communities.
                    </p>
                </section>
            </div>
            <Counter />
            <div id={styles["Sponsorship"]}>
                <p id={styles["heading"]} data-aos="fade-up">
                    Sponsorship</p>
                <p data-aos="fade-up">Companies may align with TEDxIITGuwahati as year-round partners or conference-specific
                    sponsors.</p>
                <p data-aos="fade-up">Each level of sponsorship provides a variety of rights and benefits including such items
                    as marketing recognition, digital engagement, on-site activations and a host of hospitality and
                    entertainment opportunities.</p>
                <p id={styles["subheading"]} data-aos="fade-up">Partner with TEDxIITGuwahati</p>
                <div id={styles["custom_sponser"]}>
                    <div>
                        <p className={styles.bold_heading}>TEDxIITGuwahati YEAR-ROUND PARTNERS</p>
                        <p>(Live and Virtual Conferences and Adventures)</p>
                        <br />
                        <hr className={styles.divider} />
                        <p className={styles.sponser_types}>Premier Partner</p>
                        <p className={styles.sponser_types}>Official Partner</p>
                        <p className={styles.sponser_types}>Education Partner</p>
                    </div>
                    <div>
                        <p className={styles.bold_heading}>LIVE CONFERENCE SPONSORS</p>
                        <br />
                        <hr className={styles.divider} />
                        <p className={styles.sponser_types}>Presenting Sponsor</p>
                        <p className={styles.sponser_types}>Associate Sponsor</p>
                        <p className={styles.sponser_types}>Supporting Sponsor</p>
                    </div>
                </div>
                <p data-aos="fade-up">To receive a custom proposal designed to achieve your specific objectives, please contact:</p>
                <p data-aos="fade-up">SRAVYA: +91 83330 41969</p>
                <p data-aos="fade-up">tedxiitg@iitg.ac.in</p>
            </div>
            <div id={styles["Sponsers"]}>
                <p id={styles["presented"]}>TEDxIITGuwahati PRESENTED BY:</p>
                <hr />
                <section>
                    <span>Education Partners</span>
                    <a className={styles.centre}><img src="./Images/Sponser1.png" /></a>
                </section>
                <section>
                    <span>Gifting Partners</span>
                    <a><img src="./Images/Sponser4.png" /></a>
                    <a><img src="./Images/Sponser5.png" /></a>
                </section>
                <section>
                    <span>Creative Partners</span>
                    <a><img src="./Images/Sponser6.png" /></a>
                </section>
                <section>
                    <span>Title Media Partners</span>
                    <a className={styles.centre}><img src="./Images/Sponser2.png" /></a>
                </section>
                <section>
                    <span>Media Partners</span>
                    <a><img src="./Images/Sponser7.png" /></a>
                    <a><img src="./Images/Sponser8.png" /></a>
                    <a><img src="./Images/Sponser9.png" /></a>
                </section>
            </div>
            <div id={styles["animatedSponsers"]}>
                <a id={styles["left"]} onClick={leftScroll}><img src="./Images/lefticon.png" /></a>
                <section id={styles["scrollingSponsers"]} ref={scroller}>
                    <a><img src="./Images/Sponser1.png" /></a>
                    <a><img src="./Images/Sponser2.png" /></a>
                    <a><img src="./Images/Sponser4.png" /></a>
                    <a><img src="./Images/Sponser5.png" /></a>
                    <a><img src="./Images/Sponser6.png" /></a>
                    <a><img src="./Images/Sponser7.png" /></a>
                    <a><img src="./Images/Sponser8.png" /></a>
                    <a><img src="./Images/Sponser9.png" /></a>
                </section>
                <a id={styles["right"]} onClick={rightScroll}><img src="./Images/righticon.png" /></a>
            </div>
            <Footer></Footer>
        </div>
    )
}


export default Partners;