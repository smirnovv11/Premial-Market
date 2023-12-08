import styles from './ServiceButton.module.css'
import { scroller } from 'react-scroll'


const ServiceButton = () => {

    const scrollToForm = () => {
        scroller.scrollTo('form', {
          duration: 100,
          delay: 0,
          smooth: 'easeInQuad',
        });
    }

    return (
        <>
            <a className={styles.service_btn} onClick={scrollToForm}>Заказать услугу</a>
        </>
    )
}

export default ServiceButton