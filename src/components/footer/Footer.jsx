import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <a className={styles.menu_btn}>Главная</a>
                    <a className={styles.menu_btn}>О нас</a>
                    <a className={styles.menu_btn}>Услуги</a>
                    <a className={styles.menu_btn}>Контакты</a>
                    <a className={styles.menu_btn}>Заявка</a>
                </div>
                <div className={styles.logo_container}>
                    <h2 className={styles.title}>Премиал Маркет<sup className={styles.subtitle}>©</sup></h2>
                    <hr/>
                    <p>«Премиал Маркет» — ваш партнер в неспециализированной оптовой торговле!</p>
                </div>
                <hr/>
                <div className={styles.contacts}>
                    <p>MTC: <a href='tel: +3752988883344'>+3752988883344</a></p>
                    <p>A1: <a href='tel: +3752923883143'>+3752923883143</a></p>
                    <p><a href='mailto: premialmarket.info@gmail.com'>premialmarket.info@gmail.com</a></p>
                </div>
                <p>ООО "Премиал Маркет" © 2023 </p>
            </div>
        </>
    )
}

export default Footer