import styles from './About.module.css';

export const About = () => {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.titlecontainer}>
                <h2 className={styles.h2}>About me</h2>
                <p className={styles.underline}>________________________</p>
            </div>
            <div className={styles.container}>
                <div className={styles.about}>
                    <div className={styles.minmargin}>
                        <h4 className={styles.darkh4}> Who am i? </h4>
                        <h3 className={styles.h3}> I am Facundo Cabrera, a tech passionate and developer</h3>
                        <p className={styles.p}>I am currently doing some freelance projects as well as others by my own, all of them with react generally with typescript. I`m looking forward to new opportunities to grow as a developer</p>
                        <a href='/Facundo-Cabrera.pdf' download className={styles.pdf}> Download my CV </a>
                    </div>
                </div>
                <div className={styles.skills}>
                    <div className={styles.minmargin}>
                        <div className={styles.skillsdiv}>
                            <h4 className={styles.whiteh4}>This are my skills</h4>
                            <p className={styles.underline}>___________________________________________________</p>
                            <pre>
                                <div className={styles.skillscontainer}>const mySkills: string[] = [ <br />
                                    <ul className={styles.ul}>
                                        <li className={styles.li}>&apos;Html&apos;,</li>
                                        <li className={styles.li}>&apos;Css&apos;,</li>
                                        <li className={styles.li}>&apos;Javascript&apos;,</li>
                                        <li className={styles.li}>&apos;React&apos;,</li>
                                        <li className={styles.li}>&apos;Next&apos;,</li>
                                        <li className={styles.li}>&apos;Node&apos;,</li>
                                        <li className={styles.li}>&apos;Express&apos;,</li>
                                        <li className={styles.li}>&apos;Postgres&apos;,</li>
                                        <li className={styles.li}>&apos;Mongo&apos;,</li>
                                        <li className={styles.li}>&apos;Typescript&apos;,</li>
                                        <li className={styles.li}>&apos;Docker&apos;</li>
                                    </ul>
                                ]
                                </div>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

