import githubLogo from '../../assets/github.png';
import mailLogo from '../../assets/gmail.png';
import linkedinLogo from '../../assets/linkedin.png';
import arrow from '../../assets/arrow.png';
import styles from './about.module.css';
import {Link} from 'react-router-dom';

export default function About() {
    return(
        <>
            <div className={styles.aboutBox}>
                <div className={styles.technologiesBox}>
                </div>
                <div>
                    <Link to="/"><img src={arrow} className={styles.arrowBox} alt="arrow"/></Link>
                </div>
                <div className={styles.infoBox}>
                    <h1 className={styles.title}>So... what do I do?</h1>
                    <div className={styles.paragraphAndLogos}>
                        <p className={styles.paragraph}>Hello! I'm Juan, a developer from Argentina. I'm a self-taught frontend designer and started this journey a few years ago. Since then, I've been developing my skills working in several projects and digital products. I'm curious and always working on improving my skills.</p>
                        <p className={styles.paragraph}>I mainly work in frontend development with tools such as React and Redux. I also have solid skills in Photoshop, Figma & Illustrator, which allows me to have a more consistent understanding with the graphic designers I've worked with.</p>
                        <div className={styles.links}>
                            <a href="https://www.github.com/juanmartinsalinas" target="blank_"><img className={styles.image} src={githubLogo}/></a>
                            <a href="mailto:juanmartinsalinas1@gmail.com" target="blank_"><img className={styles.image} src={mailLogo}/></a>
                            <a href="https://www.linkedin.com/in/juanmartinsalinas" target="blank_"><img className={styles.image} src={linkedinLogo}/></a>
                            <a href="JuanMartinSalinas-CV.pdf" download="Juan Martin Salinas CV.pdf"><button className={styles.button}><p>Download CV</p></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}