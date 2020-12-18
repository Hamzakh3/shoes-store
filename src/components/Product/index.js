import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import React from 'react'
import ShoesList from '../../api'
import styles from './style.module.css'

const Product = () => {
    const [shoes, setShoes] = useState(false)
    useEffect(() => {
        (async () => {
            const apiData = await ShoesList()
            const data = await Object.keys(apiData).map((cat) => apiData[cat].filter((eachData) => eachData.id === id && eachData))
            const d = data.filter((a) => a.length && a)
            // console.log(d)
            setShoes(await d[0][0])
        })()
    }, [])
    const { id } = useParams()
    return (
        <>
            {shoes &&
                <div className={styles.container}>
                    <div className={styles.product} style={{background:`url(${shoes.url})`,
                                backgroundPosition:'center',
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'cover'
                                }}>
                    <h2> {shoes.name}</h2>
                    <a href='https://www.nike.com/w/new-3n82y' className={styles.button}>
                    Buy Now
                    </a>
                    <h2>{'Price: $' + shoes.price}</h2>

                    {/* <img src={shoes.url} alt={shoes.name} width="400px" /> */}
                    </div>
                </div>
            }
        </>

    )
}
export default Product