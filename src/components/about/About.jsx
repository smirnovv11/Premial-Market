import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.container} id='about'>
            <div className={styles.first_block}>
                <h1 className={styles.title}>Наша команда</h1>
                <div className={styles.articles}>
                    <p>"Премиал Маркет" - ваш надежный партнер в мире оптовой торговли, где качество и разнообразие встречаются с выгодой и профессиональным обслуживанием. Наша компания специализируется на предоставлении широкого ассортимента товаров по оптовым ценам, охватывая различные категории продукции.</p>
                    <p>В "Премиал Маркет" мы ценим каждого клиента и стремимся предоставить максимально удобные условия сотрудничества. Наш каталог включает в себя товары самого высокого качества от проверенных производителей, что гарантирует вашему бизнесу успешное развитие и долгосрочное партнерство с нами.</p>
                    <p>Мы гордимся оперативной и гибкой системой поставок, а также профессиональной командой менеджеров, готовых оказать полную поддержку на каждом этапе сотрудничества. Независимо от того, нужны ли вам товары для розничной торговли, производства или других целей, "Премиал Маркет" является вашим надежным партнером, обеспечивая вас лучшими условиями на рынке оптовой торговли.</p>
                </div>
                <img src='/images/cube.png' className={styles.cube}/>
            </div>
            <div className={styles.sec_block}>
                <h2 className={styles.subtitle}>Наши достоинтсва:</h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src='/images/dol.png' className={styles.image}/>
                        <div>
                            <h3>Привликательные цены</h3>
                            <hr/>
                            <p>Мы предлагаем конкурентоспособные цены, обеспечивая выгодные условия для вашего бизнеса.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                    <img src='/images/speed.png' className={styles.image}/>
                        <div>
                            <h3>Оперативная работа</h3>
                            <hr/>
                            <p>Наша компания гордится высокой оперативностью в обработке заказов и поставке товаров.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                    <img src='/images/track.png' className={styles.image}/>
                        <div>
                            <h3>Гибкая система поставок</h3>
                            <hr/>
                            <p>Оперативные и гибкие условия поставок, чтобы обеспечить бесперебойную работу вашего бизнеса.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About