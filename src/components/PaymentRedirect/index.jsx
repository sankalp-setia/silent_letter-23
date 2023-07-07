import React from 'react';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from './styles.module.css'

import { useSearchParams, useNavigate } from "react-router-dom"
import CircleAnimation from '../Loading/circle';


function PaymentRedirect(props) {
    const seachQuery = useSearchParams()[0]
    const navigate = useNavigate()


    useEffect(() => {
        const referenceNum = seachQuery.get("reference")
        const email = seachQuery.get("email")
        const name = seachQuery.get("name")
        const params = {
            to: email,
            url: `http://tedxiitguwahati.in/success?reference=${referenceNum}&email=${email}&name=${name}`,
            name,
            reference: referenceNum
        }
        emailjs.send('service_2yo3tjq', 'template_djnuyga', params, 'SB5lhmthv8jXAiShd')
            .then((obj) => {
                navigate(`/success?reference=${referenceNum}&email=${email}&name=${name}`)
            })
            .catch((err) => {
                console.log(err)
            })


    }, [])
    return (
        <div className={styles.container}>
            <h3>Processing Payment...</h3>
            <CircleAnimation />
        </div>
    );
}

export default PaymentRedirect;