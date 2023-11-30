import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Премиал Маркет</h2>
                <div className={styles.menu}>
                    <a className={styles.menu_btn}>Главная</a>
                    <a className={styles.menu_btn}>О нас</a>
                    <a className={styles.menu_btn}>Услуги</a>
                    <a className={styles.menu_btn}>Контакты</a>
                </div>
            </div>
        </>
    )
}

export default Header