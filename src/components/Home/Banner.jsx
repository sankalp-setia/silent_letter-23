import React from 'react';
import ParticlesAnimation from '../ParticlesAnimation/index'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";
import Typed from 'typed.js'

import logo from './tedx_logo.png'
import styles from './banner.module.css'
import { type } from '@testing-library/user-event/dist/type';

var options = {
    strings: ['The silent <br /> letter'],
    typeSpeed: 1000,
    loop: true,
    loopCount: 'infinity',
    showCursor: false,
    autoInsertCss: true,
};

const Banner = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Registration`; 
      navigate(path);
    };
      const routeChange3 = () =>{ 
        let path = `/Location`; 
        navigate(path);
      }

    return (
        <div className={styles.banner_container}>

            <ParticlesAnimation>
                <div className={styles.columns}>

                    <div >
                        <div className={styles.theme_container}>
                            <span>Theme 2023</span>
                            <TypeAnimation
                                sequence={[
                                    'The Silent Letter',
                                    300,
                                    () => {
                                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                    }
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={0}
                                className={styles.typed_theme}
                            />
                        </div>
                        <button onClick={routeChange} className={styles.button}>Buy tickets</button>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeX-nLKiERzOpoUcn1_Sf48FfD8NOK19FJLHTwtulpqhbKn3g/viewform" style={{textDecoration:"none"}} target="_blank"><button className={styles.button}>Participate in event</button></a>  
                        <button onClick={routeChange3} className={styles.button}>Checkout Location and venue</button>

                    </div>
                    {/* <div className={styles.typed_theme} ref={el} /> */}
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                    </div>

                </div>



            </ParticlesAnimation>
        </div>

    );
};

export default Banner;