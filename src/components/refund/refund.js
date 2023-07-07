import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import styles from "./refund.module.css";

const Refund = () => {
    return ( 
        <>
        <div>
            <Navbar></Navbar>
            <div className={styles.main_body}>
                <h1 style={{margin:"5%",fontSize:"xx-large"}}>REFUND POLICY- TEDxIITGuwahati 2023</h1>
              <p style={{margin:"5%",fontSize:"xx-large"}}> TEDxIITGuwahati does not facilitate availing of any refund. We take your registration in the event as your will and consent to participate and therefore amount paid by you is used in the facilitation of conduction of the event. Thus, we do not refund any amount paid to us under any circumstance.
              </p> 
            </div>
            <Footer></Footer>
        </div>
        </>
     );
}
 
export default Refund;