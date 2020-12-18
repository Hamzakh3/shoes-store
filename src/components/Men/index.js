import { StylesProvider } from "@material-ui/core"
import { useEffect, useState } from "react"
import ShoesList from '../../api'
import Showcase from '../Showcase'
import styles from './style.module.css'

const Men = () => {
    const [menShoes, setMenShoes] = useState({})
    useEffect(() => {
        (async () => {
            const apiData = await ShoesList()
            setMenShoes(await apiData.men)
        })()
    }, [])
    // console.log(menShoes)
    return (
        <>
        <div className={styles.container}>
        <h1>MEN's SHOES</h1>
            {
                Object.keys(menShoes).length && menShoes.map((eachData) => <Showcase homeLink={false} eachData={eachData} />)

            }
            
        </div>
        </>
    )
}

export default Men