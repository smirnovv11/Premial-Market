import { useState } from 'react'
import styles from './Form.module.css'
import SendFormButton from '../controls/sendFormButton/SendFormButton'
import axios from "axios";
import emailjs from '@emailjs/browser';

const Form = () => {

    const clearForm = () => {
        return {
            service: 'Экспресс-доставка и логистика',
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

    const sendDataToServer = async (e) => {
        e.preventDefault()

        emailjs.sendForm('service_k58u8e8', 'template_c1sgyse', form.current, 'ywk6rl1MR_6xlqcJZ')
        .then((result) => {
            alert('Заявка успешно отправлена!')
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <div className={styles.container} id='form'>
            <h2 className={styles.title}>Оформление заявки</h2>
            <form className={styles.form} ref={form} onSubmit={sendDataToServer}>
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
                    <input className={styles.field} name='name' type='text' value={form.name} onChange={handleInputChange} maxLength={20} required></input>
                    <label htmlFor='phone'>&nbsp;Телефон:</label>
                    <input className={styles.field} name='phone' type='text' value={form.phone} onChange={handleInputChange} required></input>
                </div>
                <div className={styles.btn_line}>
                    <SendFormButton/>
                </div>
            </form>
        </div>
    )
}

export default Form