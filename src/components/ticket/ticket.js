import React, { useRef } from 'react';
import styles from './tickets.module.css';

function isRegisteredStudent(email) {
  const index = email.indexOf('@')
  const domain = email.slice(index + 1)
  return domain == 'iitg.ac.in'
}

const Ticket = ({ dimension: { width, height }, data: { name, email } }) => {
  const containerRef = useRef(null)

  const img = isRegisteredStudent(email) ? '/Images/tedx_iitg_ticket.png' : '/Images/tedx_ticket.png'

  return (
    <div className={styles.ticket} ref={containerRef} style={{ width: `${width}px`, height: `${height}px` }}>
      <img className={styles.ticket_image} src={img} />
      <h1 className={styles.intro_text}>
        {name}
      </h1>
      <h1 className={styles.email_text}>
        {email}
      </h1>
    </div>
  );
};

export default Ticket;
