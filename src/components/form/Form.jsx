import { useState } from 'react'
import styles from './Form.module.css'
import SendFormButton from '../controls/sendFormButton/SendFormButton'

const Form = () => {

    const clearForm = () => {
        return {
            service: '',
            name: '',
            phone: '',
        }
    }

    const [form, setForm] = useState(clearForm())

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }


    return (
        <div className={styles.container} id='form'>
            <h2 className={styles.title}>Оформление заявки</h2>
            <div className={styles.form}>
                <div className={styles.service_line}>
                    <label htmlFor='service'>Услуга: </label>
                    <select type='select' name='service' required value={form.service} onChange={handleInputChange}>
                            <option>Экспресс-доставка и логистика</option>
                            <option>Индивидуальные оптовые решения</option>
                            <option>Услуги маркетинговой поддержки</option>
                    </select>
                </div>
                <div className={styles.client_line}>
                    <label htmlFor='name'>Ваше имя:</label>
                    <input className={styles.field} name='name' type='text' value={form.name} onChange={handleInputChange} maxLength={20}></input>
                    <label htmlFor='phone'>Телефон:</label>
                    <input className={styles.field} name='phone' type='text'></input>
                </div>
                <div className={styles.btn_line}>
                    <SendFormButton/>
                </div>
            </div>
        </div>
    )
}

export default Form