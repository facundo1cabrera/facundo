import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <section className={styles.section}> 
            <h2>Contact me!</h2>
            <p>__________________________</p>
            <form action="" className={styles.form}>
                <label>Name: </label>
                <input className={styles.field} type='text'/>

                <label>Email: </label>
                <input className={styles.field} type='email'/>

                <label>Subject: </label>
                <input className={styles.field} type='text'/>

                <label>Message: </label>
                <textarea className={styles.field}/>

                <input className={styles.button} type="button" value="Send data"/>

            </form>
        </section>
    );
;}