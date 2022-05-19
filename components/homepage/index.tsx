import React from 'react'
import styles from './Homepage.module.scss'
import Login from '../login'
import Recipe from '../recipe'

const Homepage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.welcomeSection}>
                <div className={styles.info}>
                    <div className={styles.info_box}>
                        <h1>Welcome to Site !</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Cum atque est reprehenderit rerum vero alias
                            cumque voluptate sunt consequatur? Laboriosam fuga
                            libero asperiores dolorem dolorum est dignissimos
                            sapiente, omnis at. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Cum atque est
                            reprehenderit rerum vero alias cumque voluptate sunt
                            consequatur? Laboriosam fuga libero asperiores
                            dolorem dolorum est dignissimos sapiente, omnis at.
                        </p>
                    </div>
                </div>
                <div className={styles.login}>
                    <Login />
                </div>
            </div>
            <div className={styles.aboutSection}>
                <h1>Exiciting Heading !</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    ex, voluptatem voluptates dolorem quod odio tempora atque
                    quae aperiam corrupti praesentium! Suscipit officiis quidem
                    aliquam debitis eius, in sequi nulla dolorem natus, ut quas
                    amet? Dignissimos fugiat iusto dolorem voluptatibus sed
                    officia quas inventore voluptates id, exercitationem alias
                    adipisci quae, veniam magnam! Alias, officiis illo. Quis at
                    minima eaque, cum quibusdam inventore explicabo provident,
                    deleniti, iusto magni dignissimos similique voluptatem
                    consequatur repellat impedit ullam! Itaque distinctio
                    praesentium ipsum magni rerum quidem esse, eligendi
                    repellat? Ex illum beatae porro cupiditate ipsa quidem est
                    quisquam delectus reiciendis debitis necessitatibus a amet
                    ea impedit nam magnam autem modi quaerat alias, illo maiores
                    ratione ipsum voluptatum. Dolores ratione earum, voluptatem
                    dicta corporis enim nisi magnam repellat hic modi dolor
                    animi sit! Consectetur nostrum facere tempore adipisci.
                    Dolor laborum earum vero fugiat ratione cupiditate illo
                    ducimus amet iusto repudiandae reprehenderit minima
                    voluptatibus quidem labore tempore, facere pariatur, unde
                    ut, aperiam odio vitae suscipit dolores consectetur.
                    Necessitatibus, doloremque fugiat officia sunt totam sint
                    ipsum dolore odio at, animi sit quod unde voluptatem
                    voluptate magnam repellendus laboriosam? Iste doloribus
                    itaque nobis neque est corporis ex expedita impedit, sunt
                    ad, velit esse, molestiae qui pariatur debitis nihil?
                    Mollitia?
                </p>
            </div>
            <div className={styles.recipeDisplay}>
                <Recipe />
            </div>
        </div>
    )
}

export default Homepage
