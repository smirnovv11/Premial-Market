import styles from './Header.module.css'
import React, { useState, useEffect } from 'react';

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const containerStyle = {
        transition: 'all 1s ease-in-out',
        backgroundColor: scrolled ? 'var(--main)' : 'transparent',
        opacity: scrolled ? '0.98' : '1',
    };

    return (
        <>
            <div className={styles.container} style={containerStyle}>
                <h2 className={styles.title}>Премиал Маркет</h2>
                <div className={styles.menu}>
                    <a className={scrolled ? styles.menu_btn_scrolled : styles.menu_btn}>Главная</a>
                    <a className={scrolled ? styles.menu_btn_scrolled : styles.menu_btn}>О нас</a>
                    <a className={scrolled ? styles.menu_btn_scrolled : styles.menu_btn}>Услуги</a>
                    <a className={scrolled ? styles.menu_btn_scrolled : styles.menu_btn}>Контакты</a>
                </div>
            </div>
        </>
    )
}

export default Header