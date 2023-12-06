import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Контактная информация</h1>
            <div className={styles.contacts}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1397.5808098378413!2d27.5564223833179!3d53.9061321045756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf94d3578153%3A0xfd5862e8c09b18a3!2z0YPQuy4g0JfRi9Cx0LjRhtC60LDRjyA2LCDQnNC40L3RgdC6LCDQnNC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1701867721796!5m2!1sru!2sby" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className={styles.info}>
                    <div>
                        <h2>Телефоны для связи:</h2>
                        <p>MTC: <a href='tel: +3752988883344'>+3752988883344</a></p>
                        <p>A1: <a href='tel: +3752923883143'>+3752923883143</a></p>
                        <hr/>
                    </div>
                    <div>
                        <h2>E-mail:</h2>
                        <p><a href='mailto: premialmarket.info@gmail.com'>premialmarket.info@gmail.com</a></p>
                        <p><a href='mailto: premialmarket.info@mail.ru'>premialmarket.info@mail.ru</a></p>
                        <hr/>
                    </div>
                    <div>
                        <h2>Адрес:</h2>
                        <p>ул. Зыбицкая 6</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts