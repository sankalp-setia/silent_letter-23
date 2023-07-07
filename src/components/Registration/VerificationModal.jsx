import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import emailjs from 'emailjs-com';
import CircleAnimation from '../Loading/circle'
import otpGenerator from 'otp-generators'

import Popup from 'reactjs-popup';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { USER_TYPE, EMAIL_REGEX } from './constants'
import './VerificationModal.css'

const STATUS_CODE = {
    SUCCESS: 1,
    ERROR: 2,
    PENDING: 3
}

const EXPIRY_TIME = {
    DELAY: 10 // minutes
}

function VerificationModal({ open, onCloseModal, userType, checkoutHandler }) {
    const [details, setDetails] = useState({ name: '', email: '', otp: '' })
    const [step, setStep] = useState(1);
    const otpDetails = useRef()
    const [status, setStatus] = useState({
        code: STATUS_CODE.SUCCESS, errorMsg: 'Please enter correct otp.'
    })

    const BaseURL = process.env.REACT_APP_API_URL;


    useEffect(() => {
        otpDetails.current = { otp: null, expiredTime: null }
    }, [])

    function modifyDetails(e) {
        const { value, dataset: { id } } = e.target

        setDetails({ ...details, [id]: value })
    }

    function isFormValid() {
        switch (userType) {
            case USER_TYPE.CIVILIAN: {
                if (details.name !== "" && EMAIL_REGEX.test(details.email)) {
                    return true
                }
                break;
            }
            case USER_TYPE.REGISTERED_STUDENT: {
                const index = details.email.indexOf('@')
                const domain = details.email.slice(index + 1)
                if (details.name !== "" && EMAIL_REGEX.test(details.email) && domain == "iitg.ac.in") {
                    return true
                }
            }
        }
        return false
    }
    function createForm() {
        const my_form = document.createElement('FORM');
        my_form.name = 'myForm';

        const my_tb = document.createElement('INPUT');
        my_tb.type = 'TEXT';
        my_tb.name = 'otp';
        my_tb.value = otpDetails.current.otp;
        my_form.appendChild(my_tb);

        const my_tb2 = document.createElement('INPUT');
        my_tb2.type = 'TEXT';
        my_tb2.name = 'to';
        my_tb2.value = details.email;
        my_form.appendChild(my_tb2);

        const my_tb3 = document.createElement('INPUT');
        my_tb3.type = 'TEXT';
        my_tb3.name = 'delay';
        my_tb3.value = EXPIRY_TIME.DELAY;
        my_form.appendChild(my_tb3);
        return my_form
    }






    function isSubmitDisabled() {
        return !isFormValid()
    }

    async function sendOTP() {
        const otp = otpGenerator.generate(6, { upperCase: false, specialChar: false })
        otpDetails.current = {
            otp,
            expiredTime: Date.now() + 60000 * EXPIRY_TIME.DELAY
        }
        setStatus({
            ...status,
            code: STATUS_CODE.PENDING
        })

        emailjs.sendForm('service_kpv77vt', 'template_6pwkhap', createForm(), 'trgVSfIdTJltmLZ0q')
            .then((result) => {
                setStatus({
                    ...status,
                    errorMsg: '',
                    code: STATUS_CODE.SUCCESS
                })
                setStep(2)
            }, (error) => {
                setStatus({
                    ...status,
                    errorMsg: 'Request failed due to server error.',
                    code: STATUS_CODE.ERROR
                })
                console.log(error.text);
            });

    }

    function checkOTPValidity() {
        // TO-DO: Add expiry check for otp
        const now = +new Date()
        const expiryTime = +new Date(otpDetails.current.expiredTime)
        if (details.otp == otpDetails.current.otp && now < expiryTime) return true

        return false
    }
    async function submitHandler() {
        if (userType == USER_TYPE.CIVILIAN) {
            checkoutHandler(500, details.name, details.email)
        } else {
            if (step == 1) {
                sendOTP()

            } else {
                const status = checkOTPValidity()
                if (status) {
                    setStatus({
                        errorMsg: '',
                        code: STATUS_CODE.SUCCESS
                    })
                    checkoutHandler(250, details.name, details.email)
                } else {
                    setStatus({
                        errorMsg: 'Invalid OTP entered or time has expired.',
                        code: STATUS_CODE.ERROR
                    })
                }
            }
        }
    }
    return (
        <Modal open={open} onClose={onCloseModal} center classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
        }}>
            <h2 className='heading_buy'>{userType == USER_TYPE.CIVILIAN ? 'Buy Tickets' : 'Buy Tickets (for IITG Students)'}</h2>
            <p className={`warning`}>Important: 
            <br />
            1. Please Note that the Ticket Design is different for IITG Students, So Please make sure to purchase right ticket.
            <br />
            2. Enter your Email correctly to recieve the Ticket for the Event.
            <br />
            {userType == USER_TYPE.REGISTERED_STUDENT ? "3. Enter your Name exactly as it is mentioned in your ID card." : "3. Enter your Name exactly as it is mentioned in your Adhaar/PAN card."}
            
            <br />
            </p>
            <div className='modal-body'>
                {step == 1 && <input placeholder='Name'
                    type="text"
                    data-id="name"
                    value={details.name}
                    onChange={modifyDetails}
                    className="tedx_input"
                ></input>}
                <div className="email-container">
                {userType == USER_TYPE.CIVILIAN && step == 1 && <input placeholder='email'
                        type="text"
                        value={details.email}
                        data-id="email"
                        onChange={modifyDetails}
                        className={`tedx_input`}

                    ></input>}
                </div>
                <div className="email-container">

                    {userType == USER_TYPE.REGISTERED_STUDENT && step == 1 && <input placeholder='Registered IITG email'
                        type="text"
                        value={details.email}
                        data-id="email"
                        onChange={modifyDetails}
                        className={`tedx_input`}

                    ></input>}
                    {userType == USER_TYPE.REGISTERED_STUDENT && step == 2 &&
                        <input placeholder='OTP'
                            type="text"
                            data-id="otp"
                            value={details.otp}
                            onChange={modifyDetails}
                            className="tedx_input otp_input"

                        ></input>

                    }
                </div>

                {status.code == STATUS_CODE.ERROR && status.errorMsg && <p className="error-msg">{status.errorMsg}</p>}

            </div>
            <div className="btn-container">

                <button className="btn cancel-btn" onClick={onCloseModal}>Cancel</button>
                {userType == USER_TYPE.REGISTERED_STUDENT && <button disabled={isSubmitDisabled() || status.code == STATUS_CODE.PENDING} onClick={submitHandler} className={`btn submit-btn`}>{status.code == STATUS_CODE.PENDING && <CircleAnimation />}{step == 1 ? 'Send OTP & verify' : 'Proceed to Payment'}</button>}

                {userType == USER_TYPE.CIVILIAN && <button disabled={isSubmitDisabled() || status.code == STATUS_CODE.PENDING} onClick={() => submitHandler()} className="btn submit-btn">{status.code == STATUS_CODE.PENDING && <CircleAnimation />}Proceed to Payment</button>}
            </div>

        </Modal>
    );
}

export default VerificationModal;