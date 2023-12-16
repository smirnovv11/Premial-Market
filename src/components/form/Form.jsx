import { useState } from 'react'
import styles from './Form.module.css'
import SendFormButton from '../controls/sendFormButton/SendFormButton'
import axios from "axios";

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
        
        let fdata = new FormData();
        fdata.append('name', form.name)
        fdata.append('service', form.service)
        fdata.append('phone', form.phone)

        axios
        .post("http://test1.loc/text.php", fdata)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };


    return (
        <div className={styles.container} id='form'>
            <h2 className={styles.title}>Оформление заявки</h2>
            <form className={styles.form} onSubmit={sendDataToServer}>
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