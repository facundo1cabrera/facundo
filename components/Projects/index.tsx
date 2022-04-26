import styles from './Projects.module.css';

export const Projects = () => {
    return (
        <section id="projects" className={styles.section}>

            <h2 className={styles.title}>Some of my projects</h2>

            <p className={styles.underline}>_____________________________________________</p>

            <div className={styles.container}>
               
                <div className={styles.card}>

                    <div className={styles.icon}>
                        <h3>OpenJira</h3>
                        <p>_______________________</p>
                    </div>

                    <div className={styles.info}>
                        <p>Drag and drop your activities to organizate better, check the github readme to know more.</p>
                        <a href="https://github.com/facundo1cabrera/OpenJiraClon">Go to project</a>
                    </div>

                </div>

                <div className={styles.card}>

                    <div className={styles.icon}>
                        <h3>E-commerce</h3>
                        <p>_______________________</p>
                    </div>

                    <div className={styles.info}>
                        <p>Full developer e-commerce also integrated with paypal. Made with typescript, react, next, mongo and docker</p>
                        <a href="https://github.com/facundo1cabrera/teslo-shop">Go to project</a>
                    </div>

                </div>

                <div className={styles.card}>

                    <div className={styles.icon}>
                        <h3>Contacts API</h3>
                        <p>_______________________</p>
                    </div>

                    <div className={styles.info}>
                        <p>Rest API with JWT auth, sequelize, express. Provides different endpoints to create, read, delete and update your contacts</p>
                        <a href="https://github.com/facundo1cabrera/app-contactos">Go to github</a>
                    </div>

                </div>

            </div>
        </section>
    )
}