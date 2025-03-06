import githubLogo from '../../assets/github.png';
import mailLogo from '../../assets/gmail.png';
import linkedinLogo from '../../assets/linkedin.png';
import arrow from '../../assets/arrow.png';
import styles from './about.module.css';
import {Link} from 'react-router-dom';

import discordJs from '../../assets/techs/discordjs-logo.png'
import express from '../../assets/techs/express-logo.png'
import javascript from '../../assets/techs/javascript-logo.png'
import nodeJs from '../../assets/techs/nodejs-logo.png'
import postgresql from '../../assets/techs/postgresql-logo.png'
import react from '../../assets/techs/react-logo.png'
import redux from '../../assets/techs/redux-logo.png'
import sequelize from '../../assets/techs/sequelize-logo.png'
import tailwind from '../../assets/techs/tailwind-logo.png'
import threeJs from '../../assets/techs/threejs-logo.png'
import vite from '../../assets/techs/vite-logo.png'
import zustand from '../../assets/techs/zustand-logo.png'


export default function About() {


    // const techs = ["discordJs","express","javascript", "nodeJs","postgresql","react","redux","sequelize","tailwind","threeJs","vite","zustand"];
    // const radius= 200;

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




                
                {/* <div className={styles.adoGiraGira}>
                    <img src={javascript} className={styles.technologiesLogos}/>
                    <img src={discordJs} className={styles.technologiesLogos}/>
                    <img src={express} className={styles.technologiesLogos}/>
                    <img src={nodeJs} className={styles.technologiesLogos}/>
                    <img src={postgresql} className={styles.technologiesLogos}/>
                    <img src={react} className={styles.technologiesLogos}/>
                    <img src={redux} className={styles.technologiesLogos}/>
                    <img src={zustand} className={styles.technologiesLogos}/>
                    <img src={sequelize} className={styles.technologiesLogos}/>
                    <img src={threeJs} className={styles.technologiesLogos}/>
                    <img src={vite} className={styles.technologiesLogos}/>
                    <img src={tailwind} className={styles.technologiesLogos}/>

                    {techs.map((_, e) => {
                        <img
                            className={styles.technologiesLogos}
                            src={`../../assets/techs/${e}.png`}
                        />
                    })}
                </div> */}
            </div>
        </>
    )
}