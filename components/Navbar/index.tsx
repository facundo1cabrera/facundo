import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <header className={styles.header} >
            <div className={styles.containerdiv} >
                <div className={styles.h2}>
                    <h2 className={styles.h2yellow}>{'<'}<span className={styles.span}>Facundo </span>{' />'}</h2>
                </div>
                <ul className={styles.ulist}>
                    <li className={styles.li} >About me</li>
                    <li className={styles.li} >Skills</li>
                    <li className={styles.li} >Projects</li>
                    <li className={styles.li} >Contact</li>
                </ul>
            </div>
        </header>
    );
};