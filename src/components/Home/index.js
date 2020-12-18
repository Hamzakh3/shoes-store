import styles from './style.module.css'
import Showcase from '../Showcase'
import ShoesList from '../../api'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import cx from 'classNames'


const Home = () => {
    const navigate = useNavigate()
    const cx = require('classnames')
const [shoesData, setShoesData] = useState({})
useEffect(()=>{
    (async()=>{
    setShoesData(await ShoesList())
    })()
},[])
// console.log(shoesData)
const selectedData = Object.keys(shoesData).length && Object.keys(shoesData).map((d)=> shoesData[d].slice(0,3))
// console.log(selectedData)
return (
    
    <div className={styles.container}>
            <div className={styles.homeSlider}>
                <h2>Lorem ipsum</h2>
                <p>dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className={cx([styles.section, styles.yellow])}>
                <h1>Women's New Release for 2021</h1>
                <div onClick={()=>navigate('women')}>
                    <h1>Explore Women's<br />Fashion</h1>
                </div>
            </div>
            <div className={cx([styles.section, styles.black])}>
                <div onClick={()=>navigate('men')}>
                    <h1>Explore Men's<br />Fashion</h1>
                </div>
                <h1>Men's New Release for 2021</h1>
            </div>
            <div className={styles.showcase}>
                {selectedData && selectedData.map((data)=> data.map((eachData)=> <Showcase eachData = {eachData} homeLink={true}/>))}
            </div>
        </div>
    )

}





export default Home
