import React from 'react'
import Image from 'next/image'
import styles from './Recipe.module.scss'
import Chicken from '../../assets/Chicken.jpg'
import Steak from '../../assets/Steak.jpg'
import Fish from '../../assets/Fish.jpg'
const recipes = [
    {
        name: 'Chicken',
        image: Chicken,
        description: 'Chicken is delicious'
    },
    {
        name: 'Fish',
        image: Fish,
        description: 'Fish is delicious'
    },
    {
        name: 'Steak',
        image: Steak,
        description: 'Steak is delicious'
    }
]

const Recipe = () => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={recipes[0].image}
                    width={5168}
                    height={3448}
                    layout="responsive"
                    alt="..."
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.titleBox}>
                    <p className={styles.smallTitle}>New Recipe</p>
                    <p className={styles.title}>Roasted Chicken</p>
                </div>
                <div className={styles.cardFooter}>
                    <button className={styles.button}>Get Recipe</button>
                </div>
            </div>
        </div>
    )
}

export default Recipe
