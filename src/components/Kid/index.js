import { useEffect, useState } from "react"
import ShoesList from '../../api'
import Showcase from '../Showcase'
import styles from './style.module.css'

const Kid = () => {
    const [kidShoes, setKidShoes] = useState({})
    useEffect(() => {
        (async () => {
            const apiData = await ShoesList()
            setKidShoes(await apiData.kid)
        })()
    }, [])
    // console.log(kidShoes)
    return (
        <>
        
        <div className={styles.container}>
        <h1>KID's SHOES</h1>
            {
                Object.keys(kidShoes).length && kidShoes.map((eachData) => <Showcase homeLink={false} eachData={eachData} />)

            }
        </div>
        </>
    )
}

export default Kid