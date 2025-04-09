import {useState, useEffect} from 'react';
import styles from './projectList.module.css'; 
import allProjects from '../../projects.js';
import arrow from '../../assets/arrow.png'
import { Link } from 'react-router-dom';

import githubLogo from '../../assets/github.png';
import linkLogo from '../../assets/link.png'

import bookbuster from '../../assets/bookproject.png';
import doge from '../../assets/dogeproject.png';
import coffee from '../../assets/coffeeproject.png';
import pedro from '../../assets/pedroproject.png'
import comingsoon from '../../assets/comingsoon.png';

export default function ProjectList() {

    const [project, useProject] = useState("");

    function changeProject(e) {
        useProject(e)
    }

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
  
      window.addEventListener("resize", handleResize);
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <>
            {width > 767 ? <div className={styles.projectBox}>
                <div className={styles.projectList}>
                    {
                        allProjects.map((e) => {
                            return(
                                <button
                                    disabled={e.name === "Coming soon!" ? true : false}
                                    key={e.id} className={e.name === "Coming soon!" ?
                                    styles.buttonDisabled : styles.buttonProject}
                                    onClick={() => changeProject(e)}
                                    id={e.id}>
                                {e.name}</button>)
                        })
                    }
                </div>
                <div>
                    <Link to="/"><img src={arrow} className={styles.arrowBox} alt="arrow"/></Link>
                </div>
                <div className={styles.projectDisplay}>
                    {project.img && project.img != "comingsoon" ?
                        <div className={styles.hiperLinks}>
                            <a href={project.githubLink} target="_blank"><img className={styles.githubLink} src={githubLogo}/></a>
                            <a href={project.pageLink === "" ? null : project.pageLink} target="_blank"><img src={linkLogo} className={project.pageLink === "" ? styles.pageLinkOff : styles.pageLinkOn}/></a>
                        </div>
                    : null}
                    <img
                        className={project.img ? styles.projectImage : styles.projectImageInvisible}
                        src={project.img === "bookbuster" ?
                            bookbuster : project.img === "coffee" ?
                            coffee : project.img === "doge" ?
                            doge : project.img === "pedro" ?
                            pedro : project.img === "comingsoon" ?
                            comingsoon : null}/>
                    <div className={styles.nameAndTechs}>
                        <h1 className={styles.projectTitle}>{project.name}</h1>
                        <div className={styles.techBox}>
                            { project.technologies === undefined ? null : project.technologies.map((e) =>
                                <p className={styles.allTechnologies} key={e.id}>{e + " "}</p>)
                            }
                        </div>
                    </div>
                    <p className={styles.projectDescription}>{project.description}</p>
                </div>
            </div> :
            <div className={styles.projectBox}>
                {
                    allProjects.map((e) => {
                        return(
                            <div className={styles.projectDisplay}>
                                <div className={styles.titleAndTechs}>
                                    <h1 className={styles.projectTitle}>{e.name === "Coming soon!" ? "" : e.name}</h1>
                                    { e.technologies === undefined ? null : e.technologies.map((e) =>
                                        <p className={styles.allTechnologies} key={e.id}>{e + " "}</p>)
                                    }
                                </div>
                                <p className={styles.projectDescription}>{e.description}</p>
                                <a href={e.githubLink} target="_blank"><img className={styles.githubLink1} src={githubLogo}/></a>
                                <a href={e.pageLink === "" ? null : e.pageLink} target="_blank"><img src={linkLogo} className={styles.pageLink}/></a>
                            </div>
                        );
                    })
                }
                <div>
                    <Link to="/"><img src={arrow} className={styles.arrowBox} alt="arrow"/></Link>
                </div>
            </div>
                        }
        </>
    )
}