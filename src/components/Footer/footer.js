import React from "react";
import styles from "./footer.module.css";
import {BsFacebook, BsLinkedin, BsInstagram,BsMedium, BsTwitter} from "react-icons/bs"

// https://script.google.com/macros/s/AKfycbwJ-kpuPaWCASAvMaqKjTm1nT7zUZjDOUcOAnrgvzmGf1mpKPJ2ikFMf4HRIfViWuNj/exe

const email_fun = () =>{
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJ-kpuPaWCASAvMaqKjTm1nT7zUZjDOUcOAnrgvzmGf1mpKPJ2ikFMf4HRIfViWuNj/exec'
    const form = document.forms['email_sub']
    
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(res => {
          alert('Submited Succesfully');
        })
        .catch(error => {
          console.error('Error!', error.message);
          alert('Error submission unsuccesfull');
        })
        .then(a => (form.reset()));
    
    })
}


const Footer = () => {
    return ( 

    <div  className={styles.footer_body}>

        <div  className={styles.footer}>
            <div  className={styles.footer__container}>
                <div  className={styles.footer__top}>
                   

                    <div  className={styles.company__info}>
                        <a href="/" className={styles.footer__title1}><u  className={styles.ted}>TEDx</u><u  className={styles.oki}>IITGuwahati</u>  <p  className={styles.footer__title}> <u  className={styles.bit}>x</u> = independently organised TED event</p> </a>
                       
                        <p  className={styles.company__description}>
                            Follow us 
                        </p>
                        
                            <ul  className={styles["footer__list"]}>
                                <li  className={styles["footer__list-item"]}>
                                    <a href="https://www.instagram.com/tedxiitguwahati/"  className={styles["footer__list-link"]}>
                                        <BsInstagram/>
                                    </a>
                                </li>
                                <li  className={styles["footer__list-item"]}>
                                    <a href="https://tedxiitguwahati.medium.com/"  className={styles["footer__list-link"]}>
                                        <BsMedium/>
                                    </a>
                                </li>
                                <li  className={styles["footer__list-item"]}>
                                    <a href="https://www.facebook.com/TEDxIITGuwahati/"  className={styles["footer__list-link"]}>
                                        <BsFacebook/>
                                    </a>
                                </li>
                                <li  className={styles["footer__list-item"]}>
                                    <a href="https://twitter.com/tedxiitg"  className={styles["footer__list-link"]}>
                                        <BsTwitter/>
                                    </a>
                                </li>
                                <li  className={styles["footer__list-item"]}>
                                    <a href="https://www.linkedin.com/company/tedx-iit-guwahati"  className={styles["footer__list-link"]}>
                                        <BsLinkedin/>
                                    </a>
                                </li>
                            </ul>
                        
                        <p  className={styles["company__description2"]}>
                            Contact
                        </p>
                        <p  className={styles["company__description3"]}>
                            Sravya Vardhani : +91 83330 41969
                        </p>
                        <p  className={styles.milk}>
                            tedxiitg@iitg.ac.in
                         </p>
                       
                        
                    </div>

                    <div  className={styles.company__info}>
                        <h2  className={styles.company__logo}>  Quick Links</h2>
                        <hr size="5" width="15%" color="red"/>  
                        <a href="/AboutUS" className={styles.company__description5}>
                            About Us
                         </a>
                        
                         <a href="https://iitg.ac.in/sa/tedxiitg/Talks/talks.html" className={styles.company__description5}>
                            Previous Talks
                         </a>
                        
                         <a href="https://iitg.ac.in/sa/tedxiitg/Contact_Us/ContactUs.html" className={styles.company__description5}>
                            Contact Us
                         </a>
                        
                         <a href="/Privacy" className={styles.company__description5}>
                            Privacy Policy
                         </a>

                         <a href="/Terms" className={styles.company__description5}>
                            Terms & Conditions
                         </a>
                         
                         <a href="/Refund" className={styles.company__description5}>
                            Refund Policies
                         </a>
                    </div>
                
                    <div  className={styles.company__info}>
                        <h2  className={styles.company__logo1}>Subscribe to Blog via Email</h2>
                        <hr size="5" width="25%" color="red"/>  
                        <p  className={styles.cold}>Enter your email address to subscribe to this blog and receive notifications of new posts by email.</p>
                        <form className={styles.company__info} name="email_sub" >
                            <input   className={styles.input_email} type="email" id="email" name="Email" placeholder="Email Address"/>
                            <button  onClick={email_fun} className={styles.bigb}>Subscribe</button>
                        </form>
                         
                    </div>
                  
                    

                    
                </div>
            </div>
          
                <hr size="01" width="100%" color="white"/>  
        
                <p  className={styles.prob}> &#169;  copy right  by TEDxIITGuwahati. This independent TEDx events is operated under license from TED.</p>
              
           
            </div>
             
            
            
        
        
    </div>

     );
}
 
export default Footer;
