// import React, { useEffect } from "react";
import { useState } from "react";
import Banner from './Banner'
import Navbar from "../Navbar/navbar";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import styles from "./home.module.css";
import Footer from "../Footer/footer";


const Home = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);
    const [show17, setShow17] = useState(false);

    return (
        <div>
            <Navbar></Navbar>
            <Banner />
            {/* <p className={styles.text}>Home</p> */}
            {/* Speakers section starts */}

            <div id={styles["partOfSomething"]}>
                <p className={styles.something}>BE PART OF SOMETHING <span className={styles.red}>EXTRAORDINARY!</span></p>
                <div>
                    <div>
                        <p>The Theme of <span className={styles.red}>TEDx</span>IITGuwahati is ‘The Silent Letter’, Everything has value, whether 
                        good or bad, large or small. Nothing in this world is useless, although we often mistake that for the case. Young people
                         are constantly encouraged to create a colossal impact, which causes them to focus primarily on the big problems, but 
                         small things are necessary for great things to occur. 
                        </p>
                        <p>
                        The word "Rendezvous" without its silent letters is not even a word anymore. Similarly, we have a lot of 'silent letters' around us, which help distinguish many aspects and impart more meaning to life.
                        </p>
                        <p>
                        Small things matter. Making sacrifices can help you become the person you've always wanted to be, but these sacrifices are hardly ever acknowledged. Billionaires never talk about the time they don't get to spend with their loved ones; they only talk about becoming billionaires.
                        </p>
                    </div>
                    <div>
                        <p>We all are endowed in many ways. And yet, most of the time, we ignore them. Why do we overlook these small things in our lives? We lose track of them, which can be a colossal mistake. In truth, these seemingly insignificant details significantly influence our life. That is why we must learn to appreciate their worth.
                        </p>
                        <p>
                        What about that life-changing incident that you will never forget, which could be big or small, that has completely moulded or transformed your thinking and acting? Questions like these get one thinking. To learn more and find the answers to more such fascinating questions, join us at our leading event/conference, <span className={styles.red}>TEDx</span>IITGuwahati 2023.
                        </p>
                    </div>
                </div>
            </div>
            <div id={styles["speakers_heading"]}>    
                <h2>The Speakers</h2>
                <p className={styles.subtitle}>IDEAS WORTH SPREADING FROM SPEAKERS WORTH LISTENING TO</p>
            </div>
            <section id={styles["speakers_grid"]}>
                <div onClick={(e)=>e.currentTarget.nextElementSibling.style['display']='flex'}>
                    <div className={styles.speaker_card}>
                        <img src="Images/speaker_5.png"></img>
                        <div>
                            <a>Plabita Borthakur</a>
                            <span>Actress</span>
                        </div>
                    </div>
                </div>
                <div className={styles.speaker_desc_window}>
                    <img src="Images/speaker_5.png"></img>
                    <span>Plabita Borthakur</span>
                    <a href="https://instagram.com/plabita.manu?igshid=MDM4ZDc5MmU="><img src="Images/Insta_icon.png"></img></a>
                    <hr></hr>
                    <img src="Images/b_cross.svg" id={styles["b_cross"]} onClick={(e)=>e.currentTarget.parentElement.style['display']='none'}/>
                    <p>
                    Plabita Borthakur made her debut in PK as Anushka Sharma's sister. She has received rave reviews for her portrayal of Rehana Abidi in Alankrita Shrivastava's critically acclaimed Lipstick Under My Burkha. In 2020, she starred in the Amazon Prime web-series Breathe: Into the Shadows. The show was well-received by both audiences and critics. In 2021, she starred as Ayesha in the web series Bombay Begums, directed by Alankrita Shrivastava. She has recently played the lead role in the Zee5 series Sutliyan.
                    </p>
                </div>
                <div onClick={(e)=>e.currentTarget.nextElementSibling.style['display']='flex'}>
                    <div className={styles.speaker_card}>
                        <img src="Images/speaker_1.png"></img>
                        <div>
                            <a>Arthur Carmazzi</a>
                            <span>Writer & Organizational Culture Thought Leader</span>
                        </div>
                    </div>
                </div>
                <div className={styles.speaker_desc_window}>
                    <img src="Images/speaker_1.png"></img>
                    <span>Arthur Carmazzi</span>
                    <a href="https://www.linkedin.com/in/arthurcarmazzi"><img src="Images/Linkedin_icon.png"></img></a>
                    <hr></hr>
                    <img src="Images/b_cross.svg" id={styles["b_cross"]} onClick={(e)=>e.currentTarget.parentElement.style['display']='none'}/>
                    <p>
                        Mr. Carmazzi is a renowned leadership expert, motivational speaker, and author with over 25 years of experience in  the field. He is ranked as the world’s #1 thought leader in organisational culture and #10 in leadership for 2021 and  2022 by Global Gurus. He is the founder of the Directive Communication Psychology Institute . Arthur's work is based on the principles of Directive Communication, a powerful method for creating change and driving performance in individuals and organisations. Arthur's passion and expertise in the field make him a highly sought-after speaker at TEDx events. Don't miss the opportunity to learn from one of the best in the industry and take your leadership skills to the next level.
                    </p>
                </div>
                <div onClick={(e)=>e.currentTarget.nextElementSibling.style['display']='flex'}>
                    <div className={styles.speaker_card}>
                        <img src="Images\speaker_2.png"></img>
                        <div>
                            <a>Neil D'Silva</a>
                            <span>Best-selling Horror Fiction Writer</span>
                        </div>
                    </div>
                </div>
                <div className={styles.speaker_desc_window}>
                    <img src="Images/speaker_2.png"></img>
                    <span>Neil D'Silva</span>
                    <a href="https://www.linkedin.com/in/neil-dsilva"><img src="Images/Linkedin_icon.png"></img></a>
                    <hr></hr>
                    <img src="Images/b_cross.svg" id={styles["b_cross"]} onClick={(e)=>e.currentTarget.parentElement.style['display']='none'}/>
                    <p>
                        Mr. D'Silva is the forerunner of contemporary Indian horror literature. He has been named one of the "Top 7 Indian  Horror Writers" to be read by the UK’s DESIblitz magazine. The founder and creative director of Litventure, a    Mumbai-based literature festival, aims to encourage young readers to read. His unique stories have struck a chord  with a wide range of readers, eliciting praise from various quarters. YAKSHINI is one of his most satisfying     inventions. He is the best-selling author of several novels, including Maya's New Husband, which was named  Entertainer of the Year at the 2015 Literary Awards, and Haunted: Real-Life Encounters with Ghosts and Spirits. So   it's time to fasten your seat belts and experience the chills of the paranormal realm with him and learn from his     enormous expertise at our event. Catch him sharing his ideas on 12th February through TEDxIITGuwahati's event.
                    </p>
                </div>
                <div onClick={(e)=>e.currentTarget.nextElementSibling.style['display']='flex'}>
                    <div className={styles.speaker_card}>
                        <img src="Images/speaker_3.svg"></img>
                        <div>
                            <a>Divanshu Kumar</a>
                            <span>CEO of Involve & Solinas Integrity</span>
                        </div>
                    </div>
                </div>
                <div className={styles.speaker_desc_window}>
                    <img src="Images/speaker_3.svg"></img>
                    <span>Divanshu Kumar</span>
                    <a href="https://www.linkedin.com/in/divinvolve"><img src="Images/Linkedin_icon.png"></img></a>
                    <hr></hr>
                    <img src="Images/b_cross.svg" id={styles["b_cross"]} onClick={(e)=>e.currentTarget.parentElement.style['display']='none'}/>
                    <p>
                        Mr. Kumar is a mechanical engineering graduate from IIT Madras and an entrepreneur who is passionate about solving real life problems using first principle thinking. He is Co-founder & CEO of Solinas Integrity which got Best “on Campus Award” in ET Startup awards 2022.
    He is also Co-founder of Involve Learning Solutions Foundation, an international award winning organisation with a vision to develop a sense of agency in school students. He was one of the delegates to represent India at Global Engagement Summit 2017 at Chicago.
    Watch him sharing his ideas about ‘The need for Students agency in today’s world at TEDxIITGuwahati event on February 12th, 2023.
                    </p>
                </div>
                <div onClick={(e)=>e.currentTarget.nextElementSibling.style['display']='flex'}>
                    <div className={styles.speaker_card}>
                        <img src="Images/speaker_4.png"></img>
                        <div>
                            <a>Kamal Jeswani</a>
                            <span>Financial Success Coach</span>
                        </div>
                    </div>
                </div>
                <div className={styles.speaker_desc_window}>
                    <img src="Images/speaker_4.png"></img>
                    <span>Kamal Jeswani</span>
                    <a href="https://www.linkedin.com/in/kamaljeswani"><img src="Images/Linkedin_icon.png"></img></a>
                    <hr></hr>
                    <img src="Images/b_cross.svg" id={styles["b_cross"]} onClick={(e)=>e.currentTarget.parentElement.style['display']='none'}/>
                    <p>
                        Mr.Kamal-Jeswani is an International Speaker and also India's 1st Internationally Certified Financial Success Coach with a CFP and MBA in Finance.
    He helps working professionals build Secured Wealth with his powerful PMG 5.0 model without sacrificing a good Lifestyle.

    He conducts Financial Super Success seminars across India and also trains *_employees of elite companies like Times of India, Raymond, Welspun, Tata group company, Nuvoco, Apolis, Ford Motors, Spinny, Meesho, ACS, Gartner, Bharti Axa, IGT, Cars24, Infotel, Xoriant, etc & associations like PMI, IMPA, Lions Club, Rotaract club, Laja, PSPA, IMOTW, Pinkishe,  HR Association of India,  etc.

                    </p>
                </div>
                <div onClick={(e)=>e.currentTarget.nextElementSibling.style['display']='flex'}>
                    <div className={styles.speaker_card}>
                        <img src="Images/speaker_6.png"></img>
                        <div>
                            <a>Seema Lokhandwala</a>
                            <span>UnrestricTED Winner</span>
                        </div>
                    </div>
                </div>
                <div className={styles.speaker_desc_window}>
                    <img src="Images/speaker_6.png"></img>
                    <span>Seema Lokhandwala</span>
                    <a href="https://www.instagram.com/seemalokh/"><img src="Images/Insta_icon.png"></img></a>
                    <hr></hr>
                    <img src="Images/b_cross.svg" id={styles["b_cross"]} onClick={(e)=>e.currentTarget.parentElement.style['display']='none'}/>
                    <p>
                    She is an engineer turned elephant biologist who aims to integrate the latest technologies with data and concepts from elephant communication, behaviour and ecology to understand the ecological and evolutionary processes that promote wildlife conservation. Her passion includes developing state of art acoustic sensors which aid in mitigating human-elephant conflict and facilitate peaceful coexistence. When not running behind or running away from elephants, she enjoys reading non-fiction novels based on environmental history, politics and wildlife.
                    Seema is currently a PhD scholar at the Centre for Linguistic Science and Technology at the Indian Institute of Technology Guwahati. </p>
                </div>
                <div onClick={(e)=>e.currentTarget.nextElementSibling.style['display']='flex'}>
                    <div className={styles.speaker_card}>
                        <img src="Images/speaker_7.png"></img>
                        <div>
                            <a>Sukanya Sharma</a>
                            <span>Professor: Humanities and Social Sciences</span>
                        </div>
                    </div>
                </div>
                <div className={styles.speaker_desc_window}>
                    <img src="Images/speaker_7.png"></img>
                    <span>Sukanya Sharma</span>
                    <hr></hr>
                    <img src="Images/b_cross.svg" id={styles["b_cross"]} onClick={(e)=>e.currentTarget.parentElement.style['display']='none'}/>
                    <p>
                    Prof. Sukanya Sharma, is an archaeology professor from the HSS department of IIT Guwahati. </p>
                </div>
                <div onClick={(e)=>e.currentTarget.nextElementSibling.style['display']='flex'}>
                    <div className={styles.speaker_card}>
                        <img src="Images/speaker_8.png"></img>
                        <div>
                            <a>Neeraj Sharma</a>
                            <span>Assistant Professor: Data Science and AI</span>
                        </div>
                    </div>
                </div>
                <div className={styles.speaker_desc_window}>
                    <img src="Images/speaker_8.png"></img>
                    <span>Neeraj Sharma</span>
                    <hr></hr>
                    <img src="Images/b_cross.svg" id={styles["b_cross"]} onClick={(e)=>e.currentTarget.parentElement.style['display']='none'}/>
                    <p>
                    Prof. Neeraj Sharma, is a professor from the the Data Science and Artificial intelligence department of IIT Guwahati. </p>
                </div>
            </section>

            {/* Speakers section ends */}
            
            <div className={styles.outer_container}>
                <h2 className={styles.h2}>TEDxIITGUWAHATI <span> 2023 Schedule</span></h2>
                <p className={styles.subtitle}>MORE DETAILS WILL BE POSTED AS THE EVENT GETS CLOSER!</p>

                <div className={styles.day}>
                    <div className={styles.date}>
                        <a href="example.com">Day 1, 12<sup>th</sup> Feb</a>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>9:00 am - 9:45 am
                                <span onClick={() => {
                                    setShow1(!show1);
                                }} className={styles.down}>
                                    {
                                        show1 ? <FaAngleDown className={styles.angle} /> : null
                                    }
                                    {
                                        !show1 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Entry and Registration</h4>
                                    <p className={styles.event}>
                                        <strong>Registration will be done at the security desk.</strong> <br />
                                    </p>
                                    {
                                        show1 ?
                                            <p className={styles.hidden} id={styles.hide}>
                                                Please arrive early to register.
                                            </p> : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>9:45 am - 10:20 am
                                <span onClick={() => setShow2(!show2)} className={styles.down}>
                                    {
                                        show2 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show2 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>welcoming</h4>
                                    <p className={styles.event}>
                                        <strong>Moderator Announcement</strong> <br />
                                    </p>
                                    {
                                        show2 ?
                                            <p className={styles.hidden} id={styles.hide}>
                                            Hosts Introduction and Convenor Speech
                                            </p> : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>10:20 am - 10:30 am
                                <span onClick={() => setShow3(!show3)} className={styles.down}>
                                    {
                                        show3 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show3 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Theme Introduction</h4>
                                    <p className={styles.event}>
                                        <strong>Inviting the Speakers</strong> <br />
                                    </p>
                                    {
                                        show3 ?
                                            <p className={styles.hidden} id={styles.hide}>
                                                Theme Description will be done and speakers would be called to start their talk.
                                            </p> : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>10:30 am - 11:00 am
                                <span onClick={() => setShow4(!show4)} className={styles.down}>
                                    {
                                        show4 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show4 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Talk 1</h4>
                                    <p className={styles.event}>
                                        <strong>QnA session after the talk.</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>11:00 am - 11:30 am
                                <span onClick={() => setShow5(!show5)} className={styles.down}>
                                    {
                                        show5 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show5 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Talk 2</h4>
                                    <p className={styles.event}>
                                        <strong>QnA session after the talk.</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>11:30 am - 11:45 am
                                <span onClick={() => setShow6(!show6)} className={styles.down}>
                                    {
                                        show6 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show6 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Engagement Activity</h4>
                                    <p className={styles.event}>
                                        <strong>Ice Breaking Session</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>11:45 am - 12:15 pm
                                <span onClick={() => setShow7(!7)} className={styles.down}>
                                    {
                                        show7 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show7 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Talk 3</h4>
                                    <p className={styles.event}>
                                        <strong>QnA session after the talk.</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>12:15 pm - 12:45 pm
                                <span onClick={() => setShow8(!show8)} className={styles.down}>
                                    {
                                        show8 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show8 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Talk 4</h4>
                                    <p className={styles.event}>
                                        <strong>QnA session after the talk.</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>12:45 pm - 1:15 pm
                                <span onClick={() => setShow9(!show9)} className={styles.down}>
                                    {
                                        show9 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show9 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Performance</h4>
                                    <p className={styles.event}>
                                        <strong>Musicians Perfomance</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>1:15 pm - 2:00 pm
                                <span onClick={() => setShow10(!show10)} className={styles.down}>
                                    {
                                        show10 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show10 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Lunch</h4>
                                    <p className={styles.event}>
                                        <strong>Special Lunch</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>2:15 pm - 2:45 pm
                                <span onClick={() => setShow11(!show11)} className={styles.down}>
                                    {
                                        show11 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show11 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Talk 5</h4>
                                    <p className={styles.event}>
                                        <strong>QnA session after the talk.</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>2:45 pm - 3:15 pm
                                <span onClick={() => setShow12(!show12)} className={styles.down}>
                                    {
                                        show12 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show12 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Talk 6</h4>
                                    <p className={styles.event}>
                                        <strong>QnA session after the talk.</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>3:15 pm - 3:30 pm
                                <span onClick={() => setShow13(!show13)} className={styles.down}>
                                    {
                                        show13 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show13 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Engagement Activity</h4>
                                    <p className={styles.event}>
                                        <strong>Ice Breaking Session</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>3:30 pm - 4:00 pm
                                <span onClick={() => setShow14(!show14)} className={styles.down}>
                                    {
                                        show14 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show14 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Talk 7</h4>
                                    <p className={styles.event}>
                                        <strong>QnA session after the talk.</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>4:00 pm - 4:30 pm
                                <span onClick={() => setShow15(!show15)} className={styles.down}>
                                    {
                                        show15 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show15 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Talk 8</h4>
                                    <p className={styles.event}>
                                        <strong>QnA session after the talk.</strong> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>4:30 pm - 4:45 pm
                                <span onClick={() => setShow16(!show16)} className={styles.down}>
                                    {
                                        show16 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show16 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Prize Distribution</h4>
                                    <p className={styles.event}>
                                        <strong>Doodling and Photography competition Prizes announcements</strong> <br />
                                    </p>
                                    {
                                        show4 ?
                                            <p className={styles.hidden} id={styles.hide}>
                                                Engagement Activites winners would be awarded prizes.
                                            </p> : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.time}>
                                11/02/2023 <br/>4:45 pm - 5:00 pm
                                <span onClick={() => setShow17(!show17)} className={styles.down}>
                                    {
                                        show17 ? <FaAngleDown /> : null
                                    }
                                    {
                                        !show17 ? <FaAngleUp /> : null
                                    }
                                </span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_in}>
                                    <h4>Vote of Thanks</h4>
                                    <p className={styles.event}>
                                        <strong>End of the Event</strong> <br />
                                    </p>
                                    {
                                        show4 ?
                                            <p className={styles.hidden} id={styles.hide}>
                                                Thank you note from our Team.
                                            </p> : null
                                    }
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <div className={styles.outerdates}>
                <div className={styles.dates}>
                    <h1>Important Dates</h1>
                    <div className={styles.bullets}>
                        <div>
                            <h4>
                                <TiTick />
                                1. May 25, 2022
                            </h4>
                            <p>
                                TEDxFarmingdale 2022 speaker application window closes. As the curation team deliberates, please give us the time and space that we need to make an informed decision on the final speaker lineup.
                            </p>
                        </div>
                        <div>
                            <h4>
                                <TiTick />
                                1. May 25, 2022
                            </h4>
                            <p>TEDxFarmingdale 2022 speaker application window closes. As the curation team deliberates, please give us the time and space that we need to make an informed decision on the final speaker lineup.</p>
                        </div>
                        <div>
                            <h4>
                                <TiTick />
                                1. May 25, 2022
                            </h4>
                            <p>TEDxFarmingdale 2022 speaker application window closes. As the curation team deliberates, please give us the time and space that we need to make an informed decision on the final speaker lineup.</p>
                        </div>
                        <div>
                            <h4>
                                <TiTick />
                                1. May 25, 2022
                            </h4>
                            <p>TEDxFarmingdale 2022 speaker application window closes. As the curation team deliberates, please give us the time and space that we need to make an informed decision on the final speaker lineup.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        <Footer></Footer>
        </div>
    );
}
export default Home;