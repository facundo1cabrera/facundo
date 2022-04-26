import styles from './Navbar.module.css';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <header className={styles.header} >
            <div className={styles.containerdiv} >
                <div className={styles.h2}>
                    <h2 className={styles.h2yellow}>{'<'}<span className={styles.span}>Facundo </span>{' />'}</h2>
                </div>
                <ul className={styles.ulist}>
                    <li className={styles.li} >
                        <a href='#about'>About me</a>
                    </li>
                    <li className={styles.li} >
                        <a href="#projects">Projects</a>
                    </li>
                    <li className={styles.li} >
                        <a href="https://www.linkedin.com/in/facundo-cabrera-1163711b1/">Linkedin</a>
                    </li>
                    <li className={styles.li} >
                        <a href="https://github.com/facundo1cabrera">Github</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};