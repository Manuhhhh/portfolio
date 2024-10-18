import React, { useRef, useEffect } from "react"        
import { useTranslation } from 'react-i18next';
import './PortfolioHeader.css'
import arrowLangSvg from '../../assets/images/svg/arrow_lang.svg';

const PortfolioHeader: React.FC = () => {
   

    const selectorRef = useRef<HTMLDivElement>(null);
    const button1 = useRef<HTMLLIElement>(null);
    const button2 = useRef<HTMLLIElement>(null);
    const button3 = useRef<HTMLLIElement>(null);
    const button4 = useRef<HTMLLIElement>(null);
    const button5 = useRef<HTMLLIElement>(null);

    const openSelector = () => {
        if (selectorRef.current) {
        selectorRef.current.classList.toggle('show-selector');
        }
    };
    
    const { i18n, t } = useTranslation();

    const changeLanguage = (lang: string) => {
        localStorage.setItem('lang', lang)
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
    };

    const showButton = (button: React.RefObject<HTMLLIElement>) => {
        button.current!.classList.add('show-button')
    }

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetPosition = section.offsetTop - 58;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    useEffect(() => {
        setTimeout(() => { showButton(button1); }, 1000);
        setTimeout(function () { showButton(button2); }, 1100);
        setTimeout(function () { showButton(button3); }, 1200);
        setTimeout(function () { showButton(button4); }, 1300);
        setTimeout(function () { showButton(button5); }, 1400);
    
      });

    return (
        <header id="header">
                <input  type="checkbox" className="open-menu" />
                <nav>
                    <ul className="header-links">
                        <div className="lang" onClick={openSelector}>
                            <div className="lang-button-container">
                                <button className="lang-button" >{ t('changeLanguage') }</button>
                                <img className="lang-arrow" src={arrowLangSvg} alt="Desplegar" />
                            </div>
                            <div className="options" ref={selectorRef}>
                                <button onClick= { () => changeLanguage('es') } >Español</button>
                                <button onClick= { () => changeLanguage('en') } >English</button>
                            </div>
                        </div>
                        <li className="home" ref={ button1 } ><a className="head-button" href= { "/?scrollTo=main" } >{ t('home') }</a></li>
                        <li className="services" ref={ button2 }><a className="head-button" href= { "/?scrollTo=services" } >{ t('services') }</a></li>
                        <li className="about-me" ref={ button3 }><a className="head-button" href= { "/?scrollTo=abtme" } >{ t('aboutMe') }</a></li>
                        <li className="portfolio" ref={ button4 }><button className="head-button" onClick= { () => scrollToSection('main') } >{ t('portfolio') }</button></li>
                        <li className="contact" ref={ button5 }><a className="head-button" href= { "/contacto" } > { t('contact') }</a></li>
                    </ul>
                </nav>
            </header>
            );}

export default PortfolioHeader
