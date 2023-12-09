import styles from './Footer.module.css'
import { scroller } from 'react-scroll'

const Footer = () => {

    const scrollTo = (e) => {
        scroller.scrollTo(e.target.name, {
            duration: 100,
            delay: 0,
            smooth: 'easeInQuad',
        });
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <a className={styles.menu_btn} name='main' onClick={scrollTo}>Главная</a>
                    <a className={styles.menu_btn} name='about' onClick={scrollTo}>О нас</a>
                    <a className={styles.menu_btn} name='services' onClick={scrollTo}>Услуги</a>
                    <a className={styles.menu_btn} name='contacts' onClick={scrollTo}>Контакты</a>
                    <a className={styles.menu_btn} name='form' onClick={scrollTo}>Заявка</a>
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
                </div>
                <p>ООО "Премиал Маркет" © 2023 </p>
            </div>
        </>
    )
}

export default Footer