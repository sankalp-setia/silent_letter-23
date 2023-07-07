import React, { useState } from 'react';
import axios from "axios";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import styles from "./registration.module.css";
import useScript from '../Hooks/usecript';
import VerificationModal from './VerificationModal';

import { USER_TYPE } from './constants';
import {BiRupee} from "react-icons/bi";


const Registration = () => {

    const [userType, setUserType] = useState(USER_TYPE.CIVILIAN);
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const BaseURL = process.env.REACT_APP_API_URL;


    useScript('https://checkout.razorpay.com/v1/checkout.js');
    const checkoutHandler = async (amount, namme, email) => {

        const { data: { key } } = await axios.get(`${BaseURL}/api/getkey`)

        const { data: { order } } = await axios.post(`${BaseURL}/api/checkout`, {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "TEDxIITGuwahati",
            description: "RazorPay",
            image: "https://tedxiitguwahati.in/Images/navbar/TEDxIITG.png",
            order_id: order.id,
            callback_url: `${BaseURL}/api/paymentverification`,
            prefill: {
                "email": email,
            },
            notes: {
                "name": namme
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }



    return (
        <div>
            <Navbar></Navbar>
            <div id={styles["why_register"]}>
                <div id={styles["registering_heading"]}>
                    <p>Register to Attend - Live and Local</p>
                    <p>Your One-Stop Place to Register for TEDxIITGuwahati - Closes Feb 11!</p>
                </div>
                <hr></hr>
                <div>
                    <div id={styles["registering_info"]}>
                        <p>
                            TEDxIITGuwahati is a full-day conference highlighting both live speakers and a small number of select TED videos, along with time for deep conversation during AM & PM breaks and during an included, catered lunch.
                            We guarantee that, you will be inspired, amazed, uplifted, and likewise boosted to achieve your own breakthrough. Register yourself to be a part of an event where aspirations will meet the influx of ideas. We can't wait to have you at our event.
                            <br />
                            Hurry, because this premier event only has a few tickets left!!
                        </p>
                        <aside className={styles.info_box} id={styles["register"]}>
                            <p>It's a Day for Your Brain to Play</p>
                            <div className={styles.register_buttons}>
                               <a href="https://forms.gle/K2rFyqfy6ntvFDdo7"><button className={styles.register_button}>Buy Tickets</button></a> 
                                <a href="https://forms.office.com/r/aXQymGxL22"><button className={styles.register_button}>Buy Tickets (for IITG Community)</button></a> 
                            </div>
                        </aside>
                    </div>
                    <div id={styles["registering_info"]}>
                        <p>
                            The room is open to all who are looking for exemplary stories and inspiring ideas – and to participate in celebrating these individuals who embody the spirit of TED.
                            
                            <p>Application Process – How does it work?</p>
                            <p>As with any TEDx event, registration is required.</p>

                            <p>1. Read all the Event Rules & Regulations given below.</p>
                            <p>2. Complete the registration by finishing the payment process.</p>
                            <p>3. Cost of Tickets for IITG users is <span style={{color:"red"}}>INR 200 </span> and for others the Cost is <span style={{color:"red"}}>INR 250.</span><br />
                            <strong>PRICES ARE GONNA RISE SOON! GET YOUR TICKETS NOW!</strong><br />
                               To recieve live updates Follow us on our <a href="https://linktr.ee/TEDxIITGuwahati"  style={{color:"red"}}>Social Media</a>.</p>
                            {/* <p>3. Cost of Tickets will be disclosed very soon. To recieve live updates Follow us on our <a href="https://linktr.ee/TEDxIITGuwahati"  style={{color:"red"}}>Social Media</a>.</p> */}
                            <p>4. Download the Ticket and get the confirmation of payment in your Email with relevant info within few minutes.</p>

                            TEDxIITGuwahati registration is exclusively online, with payment via UPI, Visa, MasterCard etc. Registration and payment for TEDxIITGuwahati is securely handled by Razorpay.
                            IMPORTANT NOTE: TEDxIITGuwahati registration is not available in offline mode so we strictly warn you to not purchase any fake offline event tickets.
                        </p>
                        <aside className={styles.info_box} id={styles["regis_include"]}>
                            <p>All Registrations Include</p>
                            <hr></hr>
                            <ul>
                                <li>An unreserved seat (by seating section) for the entire day at the Senate Hall</li>
                                <li>Catered lunch</li>
                                <li>Oppurtunity to win exciting gifts from our sponsors</li>
                                <li>Snacks and beverages at mid-morning and mid-afternoon breaks</li>
                                <li>A "swag" bag of TEDx goodies to take home</li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
            <div id={styles["rules"]}>
                <div className={styles.info_box}>
                    <p>Entry Rules: Important Rules & Regulations</p>
                    <ul>
                        <li>For all attendees: Due to Limited Seating Capacity & Security Restrictions – Registrations will only be open between 9:00 AM and 4:00 PM - Every attendee with a confirmed ticket must be registered at the venue and collect an attendee band. Entry will be denied to anyone who is unable to provide a confirmed email registration or a valid ticket or if they arrive after 4PM or if the auditorium capacity is updated as "full".</li>
                        <li>All Registration Desks will shut by 04.00 PM.</li>
                        <li>All Paid Registrants seats will be reserved until 04.00 PM only. Beyond this time the seats will be released for wait-listed attendees.</li>
                        <li>Due to Limited Seats available – Guest Attendees, Competition Winners & Sponsored Seats will only be given seats on first-come-first-served basis. Once the seats are over – the registrations desk will close.</li>
                        <li>No attendee will be allowed to enter the venue after registrations desks are closed</li>
                        <li>Due to Security Restrictions – Re-entry is not allowed into the auditoriums.</li>
                        <li>Due to Security Restrictions - Attendees without valid registration document (email or print) and Valid Govt ID Cards will not be allowed inside venue.</li>
                        <li>Organizers & Related Parties hold rights to refuse entry to any attendee if the attendee fails to abide by event and venue rules and regulations.</li>
                        <li>Refund/Resale of tickets is not permitted</li>
                        <li>No claim GST on ticket (on base price only) please email info@tedxgateway.com along with a GST Certificated and copy of you booking. We will not be able to provide an invoice with your GST details without you submitting your GST details with us.</li>
                    </ul>
                    <p>Complete Event Rules & Regulations:</p>
                    <em>By agreeing terms and conditions, you also agree to adhere to these terms: You accept all Rules & Regulations set by the Organizer.</em>
                    <ul>
                        <li>Each ticket / confirmation admits one attendee only.</li>
                        <li>TEDxGateway / Gateway Platforms Pvt Ltd or its partners are not responsible for any refunds and cancellations of tickets. Please connect with the ticketing vendor for all ticket, payment gateway and payment related grievances.</li>
                        <li>There will be no Q&A and Audience to Speaker interaction on stage. Attendees can freely interact with the speakers in the networking areas and speaker lounges on the ground floor after their talk. No flash photography or recording is permitted at the venue.</li>
                        <li>All registrations are subject to verification, any discrepancy may result in cancellation of registration.</li>
                        <li>Attendees must carry the original attendee confirmation from the ticketing partner on email. With a valid ID Card (Govt Recognized only) to avail for a conference badge and entry inside the venue. Carrying a Printout is not mandatory.</li>
                        <li>Entry into the auditorium will only start 30 minutes before the show timing</li>
                        <li>Attendees reaching late (beyond 4.00 PM) at the venue will NOT be allotted a confirmed seat.</li>
                        <li>The attendees must wear their conference badge throughout the conference across all venues.</li>
                        <li>No parking is available inside the venue premises. Please plan accordingly. We encourage you to use taxi apps such as Uber or Ola, Carpool or use public transport.</li>
                        <li>Any individual might be asked to leave the venue without any liability of a refund if there is any behavioral misdemeanor; the decision of which rests with the conference management and venue management, and is final and binding. The security of the venue is entrusted to Mumbai Police and Private Security Agencies. Please cooperate with the private security/police personnel or any agencies for security checks.</li>
                        <li>Paid passes for virtual/livestream events are non-refundable and cannot be carried over to a different conference or year other than those specified under your purchase.</li>
                        <li>Consumption of any prohibited substances is strictly prohibited at the venue.
                            Carrying of food items, alcohol, cigarettes, weapons, inflammable and banned substances into the event premises is strictly prohibited.</li>
                        <li>The organizer does not take any responsibility for injuries, loss or theft of any personal belongings of a ticket holder/attendee.</li>
                        <li>There will be adequate breaks between the sessions for attendees.</li>
                        <li>Food & beverages are included for all ticketed and seated attendees only.</li>
                        <li>Attendees are requested to adhere to rules, regulations and protocols set by the venue and local authorities</li>
                        <li>There is no refund for NO SHOWS. Guests who do not report for registration will have to forfeit their ticket. The ticket cannot be transferred to anyone else. The attendee has agreed to these terms before registration. The organizer can reassign the seat to a guest on the waiting list.</li>
                        <li>By registering and making a payment you agree that all details provided are accurate. A holder of any duplicate or forged passes/badges/tickets will be handed over to the security and/or police personnel. Forging passes is a criminal offence.</li>
                        <li>Livestream link will be made available to registered attendees closer to the conference date.</li>
                        <li>All Phase wise limited offers on tickets are available on the offers page or ticketing page</li>
                        <li>Organizers can extend or withdraw any offer code at any time. Some codes are restricted based on Tickets Phases (For Example – Early Bird Tickets offer won’t work on Phase 1Tickets).</li>
                        <li>For fair use of offer codes – we have restricted codes based on ticket phases and will be valid on between start date and expiry date of offer code.</li>
                        <li>Corporates must not book individual registrations but only corporate registrations. Passes will be cancelled if the same is flagged as corporate or bulk booking. (For corporate bookings email – info@tedxgateway.com).</li>
                        <li>Any additional service fees or transaction fee is directly collected by the ticketing vendor. And the GST on the same is billed by the vendor.</li>
                        <li>Student Pass – The student pass is only valid for students between the age of 8 – 21 years on the day of event, and the student cannot be less than 8 years or more than 21 years.</li>
                        <li>Children under the age of 12 years should be accompanied by an adult and student ticket does not include the adult accompanying.</li>
                        <li>Each students needs to carry a valid school / college / Institute ID card and a government verified photo identity card to attain a conference attendee badge at the venue.</li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
            {open == true && <VerificationModal onCloseModal={onCloseModal} open={open} checkoutHandler={checkoutHandler} userType={userType} />}
        </div>
    )
}

export default Registration
