import React, { useState } from "react";
import styles from "./about_us.module.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { FaAngleRight } from "react-icons/fa";

const About = () => {
    const [state1,setState1] = useState(true);
    const [state2,setState2] = useState(false);
    const [state3,setState3] = useState(false);
    const [state4,setState4] = useState(false);
    const [state5,setState5] = useState(false);
    return ( 

        <div>
            <Navbar></Navbar>
            <img src="/Images/about_ted.jpg" style={{width:"98.9vw", height:"30vw"}}/>
            <div className={styles.outer_container}>
                <div className={styles.inner_container}>
                    <div className={styles.menu_list}>
                        <ul>
                            {
                                !state1? <li className={styles.grey} onClick = {() => {setState1(true);setState2(false);setState3(false);setState4(false)}}>TED</li>:<li className={styles.black}>TED</li>
                            }
                            {
                                !state2? <li className={styles.grey} onClick = {() => {setState1(false);setState2(true);setState3(false);setState4(false)}}>TEDx</li>:<li className={styles.black}>TEDx</li>
                            }
                            {
                                !state3? <li className={styles.grey} onClick = {() => {setState1(false);setState2(false);setState3(true);setState4(false)}}>TEDxIITGuwahati</li>:<li className={styles.black}>TEDxIITGuwahati</li>
                            }
                            {
                                !state4? <li className={styles.grey} onClick = {() => {setState1(false);setState2(false);setState3(false);setState4(true)}}>TEDxIITGuwahatiStudio</li>:<li className={styles.black}>TEDxIITGuwahatiStudio</li>
                            }
                        </ul>
                    </div>
                    <div className={styles.divs}>
                        {
                            state1?
                                <div className = {styles.content} style={
                                    {
                                        height:"auto",
                                        display:"block"
                                    }
                                }>
                                    <h4>About TED</h4>
                                    <p>
                                        TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks 
                                        (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and 
                                        Design converged, and today covers almost all topics — from science to business to global issues
                                        — in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in 
                                        communities around the world.
                                    </p>
                                    <p>
                                        TED is a global community, welcoming people from every discipline and culture who seek a deeper 
                                        understanding of the world. TED believes passionately in the power of ideas to change attitudes,
                                        lives and, ultimately, the world. On TED.com, we're building a clearinghouse of free knowledge 
                                        from the world's most inspired thinkers — and a community of curious souls to engage with ideas
                                        and each other, both online and at TED and TEDx events around the world, all year long.
                                    </p>
                                    <p>
                                        TED is owned by a nonprofit, nonpartisan foundation. Our agenda is to make great ideas accessible 
                                        and spark conversation.
                                    </p>
                                    <p>Follow TED on <a href="https://twitter.com/TEDTalks" target="_blank">Twitter</a> and <a href="https://www.facebook.com/TED" target="_blank">Facebook</a>.</p>
                                    <img className={styles.image1} src="https://tedxbristol.com/firefly/file/img?id=TupJgnP4e5B89iHSELKN30&w=900"/>
                                </div>
                            :null
                        }
                        {
                            state2?
                                <div className = {styles.content} style={
                                    {
                                        height:"auto",
                                        display:"block"
                                    }
                                }>
                                    <h4>About TEDx, X = independently organised event</h4>
                                    <p>
                                        In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that 
                                        bring people together to share a TED-like experience.
                                    </p>
                                    <p>
                                        At TEDx events live TED-style talks and videos previously recorded at TED conferences are shared 
                                        with the community. TEDx events are fully planned and coordinated independently, on a 
                                        community-by-community basis. The content and design of each TEDx event is unique and developed 
                                        independently, but all of them have features in common.
                                    </p>
                                    <p>
                                        These local, self-organized events are branded TEDx, where x = independently organized TED event. 
                                        The TED Conference provides general guidance for the TEDx program, but individual TEDx events are 
                                        self-organized.
                                    </p>
                                    <img className={styles.image2} src="https://media.licdn.com/dms/image/C4D12AQGFCeWmvrviVA/article-cover_image-shrink_600_2000/0/1635965553910?e=2147483647&v=beta&t=WP5YW7PcD57xmcjDQ4Fse6NR3xaO8XZxWwuyDdyDvmU"/>
                                </div>
                            :null
                        }
                        {
                            state3?
                                <div className = {styles.content} style={
                                    {
                                        height:"auto",
                                        display:"block"
                                    }
                                }>
                                    <h4>About TEDxIITGuwahati, x = independently organised event</h4>
                                    <p>
                                        TEDxIITGuwahati is an annual independently organised TEDx event that first started in
                                        2016. Run entirely by a team of passionate volunteers, including undergraduate
                                        and post-graduate IIT Guwahati students, TEDxIITGuwahati brings a TED-like experience to the  
                                        IIT Guwahati and wider Indian communities.
                                    </p>
                                    <p>
                                        TEDxIITGuwahati is an immersive event created to stimulate dialogue through 
                                        engaging talks and session breaks designed to give individuals and organizations 
                                        in India a platform to meet, share ideas and collaborate.
                                    </p>
                                    <p>
                                        TEDxIITGuwahati is inviting people from our community to experience and learn about 
                                        various subjects, including science, technology, business, the arts, and global issues. 
                                        The event is hosted by IIT Guwahati, an Engineering College of national importance at the banks of the 
                                        river Brahmaputra in Assam, India. The college's mission is to provide educational experiences that empower students, alumni, and community members to 
                                        use their hearts, minds, and hands to meet personal, professional, and global challenges. 
                                        The TEDxIITGuwahati team aims to bring forth these ideals by creating, organizing, and 
                                        executing an engaging and meaningful evening for people to share their ideas and to hear the 
                                        voices of diverse individuals from India.
                                    </p>
                                    <img className={styles.image2} src="https://media.licdn.com/dms/image/C4D12AQGFCeWmvrviVA/article-cover_image-shrink_600_2000/0/1635965553910?e=2147483647&v=beta&t=WP5YW7PcD57xmcjDQ4Fse6NR3xaO8XZxWwuyDdyDvmU"/>
                                </div>
                            :null
                        }
                        {
                            state4?
                                <div className = {styles.content} style={
                                    {
                                        height:"auto",
                                        display:"block"
                                    }
                                }>
                                    <h4>About TEDxIITGuwahatiStudio, X = independently organised event</h4>
                                    <p>
                                        TEDxIITGuwahatiStudio license allows us to spotlight compelling new ideas anytime, anywhere, and \
                                        independent of any TEDx event. Under the Studio license, we can produce talks that convey independent 
                                        and powerful ideas without the constraints of a theme or an annual event. At TEDxIITGuwahatiStudio, 
                                        we strive to bring together bright minds to give talks that are idea-focused, and on a wide range of 
                                        subjects, to foster learning, inspiration and wonder-and provoke conversations that matter. 
                                        TEDxIITGuwahatiStudio is planning to produce a series of talks, featuring various speakers from diverse 
                                        fields.
                                    </p>
                                    <p>
                                        Do you have your own idea or perspective, you believe, needs to be shared? Do you wish to be a tedx speaker at our event?
                                        We invite you to submit a speaker nomination! To nominate yourself as a speaker for our tedx event, fill 
                                        out the speaker nomination form. kindly keep in mind that our curators will choose speakers at their 
                                        discretion, based on the ideal fit to our theme. once submitted, all nominations will remain in our speaker 
                                        database for further consideration, as we plan our upcoming flagship event in February 2023.
                                    </p>
                                    <img className={styles.image2} src="https://media.licdn.com/dms/image/C4D12AQGFCeWmvrviVA/article-cover_image-shrink_600_2000/0/1635965553910?e=2147483647&v=beta&t=WP5YW7PcD57xmcjDQ4Fse6NR3xaO8XZxWwuyDdyDvmU"/>
                                </div>
                            :null
                        }
                    </div>
                    <div className={styles.meet_outer}>
                        <div className={styles.meet_inner}>
                            <h4>MEET THE PEOPLE BEHIND TEDxIITGUWAHATI</h4>
                            <div className={styles.link} onMouseOver = {() => setState5(true)} onMouseOut = {() => setState5(false)}>
                                <a href="https://iitg.ac.in/sa/tedxiitg/About_Us/AboutUs.html" style={{color:"white",textDecoration:"none"}}>MEET THE TEAM
                                    {
                                        state5? <span className={styles.arrow}><FaAngleRight/></span>:null
                                    }
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div> 

     );
}
 
export default About;