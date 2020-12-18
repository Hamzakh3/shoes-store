import notfound from '../../assets/404-error-page-found.jpg'
import styles from './style.module.css'
const Contact = ()=>{
    console.log()
    return(
        <div className={styles.container}>
            <p>Sorry! something wrong with URL <b>"{window.location.pathname}"</b></p>
            <img src={notfound} alt="404-not-found" />
        </div>
    )
}

export default Contact