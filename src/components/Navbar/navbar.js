import React from "react";
import styles from "./navbar.module.css";
import { useState } from "react";

const Navbar = () => {
    const [navicon,setnavicon] = useState(true);
    const [shortnav,setshortnav] = useState(false);
    const [dropdown,setdropdown] = useState(false);
    return ( 
        <div>
            <div>
                <nav className={styles.nav}>
                    {
                        shortnav ? 
                        <div className={styles["toggle-link"]} id={styles["togglelink"]}>
                            <ul>
                                <li className={styles.list}><a href="/" id={styles["tablink"]}>HOME</a></li>
                                <li className={styles.list}><a href="/AboutUS" id={styles["tablink"]}>ABOUT US</a></li>
                                <li className={styles.list}><a href="/Registration" id={styles["tablink"]}>REGISTRATION</a></li>
                                <li className={styles.list}><a href="#" id={styles["droplink"]} onClick={()=>{setdropdown(!dropdown);}}>PAST EVENTS</a></li>
                                {
                                    dropdown ? 
                                    <div className={styles["drop-down-toggle"]} id={styles["drop-down-toggle"]}>
                                        <li className={styles.listdrop}><div className={styles.listdroplink}><img src="/Images/navbar/2022_logo.png" width="50px"></img><div className={styles.alink}><a href="https://iitg.ac.in/sa/tedxiitg/Events/2022/Event_2022.html" id={styles["alink"]}target="_blank">2022</a></div></div></li>
                                        <li className={styles.listdrop}><div className={styles.listdroplink}><img src="/Images/navbar/2021_logo.png" width="50px"></img><div className={styles.alink}><a href="https://iitg.ac.in/sa/tedxiitg/Events/2021/Event_2021.html" id={styles["alink"]}target="_blank">2021</a></div></div></li>
                                        <li className={styles.listdrop}><div className={styles.listdroplink}><img src="/Images/navbar/2019_logo.png" width="50px"></img><div className={styles.alink}><a href="https://iitg.ac.in/sa/tedxiitg/Events/2019/Event_2019.html" id={styles["alink"]}target="_blank">2019</a></div></div></li>
                                        <li className={styles.listdrop}><div className={styles.listdroplink}><img src="/Images/navbar/2016_logo.png" width="50px"></img><div className={styles.alink}><a href="#https://iitg.ac.in/sa/tedxiitg/Events/2016/Event_2016.html" id={styles["alink"]}target="_blank">2016</a></div></div></li>
                                    </div>
                                    :
                                    <div></div>
                                }
                                
                                <li className={styles.list}><a href="/Location" id={styles["tablink"]}>LOCATION</a></li>
                                <li className={styles.list}><a href="/Partners" id={styles["tablink"]}>PARTNERS</a></li>                                                        
                            </ul>
                        </div> 
                    :
                    <div></div>
                    }
                    
                    <div className={styles.logo}><a href="/"><img src="/Images/navbar/TEDxIITG.png" id={styles["tedlogo"]}></img></a></div>
                    <div className={styles.btn}>
                        <button 
                        className={styles["toggle-menu"]} 
                        onClick={()=>{
                            setnavicon(!navicon);
                            setshortnav(!shortnav);
                            }}>
                        {
                            navicon ? <img src="/Images/navbar/toggle.jpg" width="20px" id={styles["menu"]}></img> : <img src="/Images/navbar/cross.svg"  width="20px" id={styles["cross"]}></img>
                        }
                        </button>
                    </div>
                    
                    <div className={styles.link}>
                        <a href="/" id={styles["tab"]}>HOME</a>
                        <a href="/AboutUS" id={styles["tab"]}>ABOUT US</a>
                        <a href="/Registration" id={styles["tab"]} >REGISTRATION</a>
                        <div className={styles["drop-down"]}>
                        <a href="#" id={styles["drop"]}>PAST EVENTS</a>
                        <div className={styles["drop-box"]}>
                            <div className={styles.year}><img src="/Images/navbar/2022_logo.png" width="70px"></img><div className={styles.droptab}><a href="https://iitg.ac.in/sa/tedxiitg/Events/2022/Event_2022.html" id={styles["atab"]} target="_blank">2022</a></div></div>
                            <div className={styles.year2}><img src="/Images/navbar/2021_logo.png" width="70px"></img><div className={styles.droptab}><a href="https://iitg.ac.in/sa/tedxiitg/Events/2021/Event_2021.html" id={styles["atab"]}target="_blank">2021</a></div></div>
                            <div className={styles.year3}><img src="/Images/navbar/2019_logo.png" width="60px"></img><div className={styles.droptab2}><a href="https://iitg.ac.in/sa/tedxiitg/Events/2019/Event_2019.html" id={styles["atab"]}target="_blank">2019</a></div></div>
                            <div className={styles.year}><img src="/Images/navbar/2016_logo.png" width="70px"></img><div className={styles.droptab}><a href="https://iitg.ac.in/sa/tedxiitg/Events/2016/Event_2016.html" id={styles["atab"]}target="_blank">2016</a></div></div>
                        </div>
                        </div>
                        <a href="/Location" id={styles["tab"]}>LOCATION</a>
                        <a href="/Partners" id={styles["tab"]}>PARTNERS</a>
                    </div> 
                </nav>
            </div>
        </div>

     );
}
 
export default Navbar;