import styles from './Header.module.css'
import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll'

const Header = () => {

    const scrollTo = (e) => {
        scroller.scrollTo(e.target.name, {
            duration: 100,
            delay: 0,
            smooth: 'easeInQuad',
        });
    }

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
        backgroundColor: scrolled ? 'rgb(23, 23, 23)' : 'transparent',
        opacity: scrolled ? '0.98' : '1',
    };

    return (
        <>
            <div className={styles.container} style={containerStyle}>
                <div className={styles.logo}>
                    <h2 className={styles.title}>Премиал Маркет<sup className={styles.subtitle}>©</sup></h2>
                </div>
                <div className={styles.menu}>
                    <a className={styles.menu_btn} name='main' onClick={scrollTo}>Главная</a>
                    <a className={styles.menu_btn} name='about' onClick={scrollTo}>О нас</a>
                    <a className={styles.menu_btn} name='services' onClick={scrollTo}>Услуги</a>
                    <a className={styles.menu_btn} name='contacts' onClick={scrollTo}>Контакты</a>
                    <a className={styles.menu_btn} name='form' onClick={scrollTo}>Заявка</a>
                </div>
            </div>
        </>
    )
}

export default Header