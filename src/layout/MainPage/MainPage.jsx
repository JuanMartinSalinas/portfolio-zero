import styles from './mainPage.module.css';
import {Link} from 'react-router-dom';

export default function Main() {

    return(
        <>
            <div className={styles.mainBox}>
                <div className={styles.contentBox}>
                    <h1 className={styles.header}>Hello! Juan here 👋</h1>
                    <h2 className={styles.subtitle}>{">" } I am </h2>
                    <div className={styles.buttonBox}>
                        <Link to="/projects"><button className={styles.button}><p>My works</p></button></Link>
                        <Link to="/about"><button className={styles.button}><p>About me</p></button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}