import { useEffect, useState } from "react"
import ShoesList from '../../api'
import Showcase from '../Showcase'
import styles from './style.module.css'

const Women = ()=>{
    const [womenShoes, setWomenShoes] = useState({})
    useEffect(() => {
        (async () => {
            const apiData = await ShoesList()
            setWomenShoes(await apiData.women)
        })()
    }, [])
    // console.log(menShoes)
    return (
        <>
        <div className={styles.container}>
        <h1>WOMEN's SHOES</h1>

            {
                Object.keys(womenShoes).length && womenShoes.map((eachData) => <Showcase homeLink={false} eachData={eachData} />)

            }
        </div>
        </>
    )
}

export default Women