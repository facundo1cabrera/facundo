import styles from './ImageSection.module.css';
import { Navbar } from '../Navbar';

export const ImageSection = () => {
    return (
        <section className={styles.section1}>
            <Navbar />
            <div className={styles.divprincipal}>
                <h2 className={styles.h2}>{'I\'m Facundo Cabrera'}</h2>
                <h2 className={styles.h2dev}>- Javascript Developer -</h2>
            </div>
        </section>
    );
};