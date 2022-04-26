import styles from './Projects.module.css';

export const Projects = () => {
    return (
        <section id="about" className={styles.section}>

            <h2 className={styles.title}>Some of my projects</h2>

            <p className={styles.underline}>_____________________________________________</p>

            <div className={styles.container}>
               
                <div className={styles.card}>

                    <div className={styles.icon}>
                        <h3>OpenJira</h3>
                        <p>_______________________</p>
                    </div>

                    <div className={styles.info}>
                        <p>Agrego agreo geoad fsd fsadf sdf sdf sadf sdf sdf asd fas df dsaThis project was build with react, next, typescript and mongo. Fully integrated with the next api funcionalities.</p>
                        <input type='button' value='Go to project'></input>
                    </div>

                </div>

                <div className={styles.card}>

                    <div className={styles.icon}>
                        <h3>E-commerce</h3>
                        <p>_______________________</p>
                    </div>

                    <div className={styles.info}>
                        <p>This project was build with react, next, typescript and mongo. Fully integrated with the next api funcionalities.</p>
                        <input type='button' value='Read more'></input>
                    </div>

                </div>

                <div className={styles.card}>

                    <div className={styles.icon}>
                        <h3>X-project</h3>
                        <p>_______________________</p>
                    </div>

                    <div className={styles.info}>
                        <p>This project was build with react, next, typescript and mongo. Fully integrated with the next api funcionalities.</p>
                        <input  type='button' value='Go to project'></input>
                    </div>

                </div>

            </div>
        </section>
    )
}