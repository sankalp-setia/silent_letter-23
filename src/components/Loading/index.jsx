import React from 'react';
import styles from './styles.scss'

const Loading = () => {
    return (
        <div className={styles.loader}>
            <h1>Loading...</h1>
            <div class={styles.lds_ripple}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;