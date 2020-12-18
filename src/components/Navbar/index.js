import styles from './style.module.css'
import logo from '../../assets/logo.png'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {

  const navigate = useNavigate()


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={()=>navigate('/')}>
        <img src={logo} alt="ShoesStore" width="60px" />
        <p>SHOES STORE</p>
      </div>
      {/* <div className={styles.menuIcon}>
        <i className="fa fa-bars"></i>
      </div> */}
      <ul>
        <li onClick={()=>navigate('/')}>Home</li>
        <li onClick={()=>navigate('men')}>Men</li>
        <li onClick={()=>navigate('women')}>Women</li>
        <li onClick={()=>navigate('kid')}>Kid</li>
        {/* <li onClick={()=>navigate('contact')}>Contact</li> */}
      </ul>

      
    </nav>
  )
}

export default Navbar