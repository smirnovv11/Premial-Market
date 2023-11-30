import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.container}>
            <video autoPlay muted loop className={styles.clip}>
                <source src='/footage.mp4' type='video/mp4'/>
            </video>
            <div className={styles.content}>
                <h1 className={styles.title}>«<span className={styles.subtitle}>Премиал Маркет</span>» — ваш партнер в неспециализированной оптовой торговле!</h1>
                <p>
                    Добро пожаловать в мир неограниченных возможностей оптовой торговли! Мы — ваш надежный поставщик разнообразных товаров по выгодным ценам. Исследуйте широкий ассортимент наших продуктов и создайте свой уникальный ассортимент для процветания вашего бизнеса. Вместе мы делаем оптовую торговлю простой, разнообразной и прибыльной.
                </p>
            </div>
        </div>
    )
}

export default Main