import React, { useEffect, useRef } from 'react'
import './Form.css'
import { useTranslation } from 'react-i18next';

export const Form: React.FC = () => {
    const form = useRef<HTMLDivElement>(null);
    
    const { t } = useTranslation();
    
    useEffect(() => {
        
        setTimeout(() => {  form.current!.classList.add('show-form'); }, 800);
       
    })

    return (


      <div className="form-container" ref={ form }>
          <form action="POST">
              <div className="form-contact-container">
                      <h3 className="form-contact-title">{ t('contactForm') }</h3>
                      <div className="form-contact-row1">
                          <input name="name" className="form-contact-name input" type="text" placeholder={ t('fullName') } />
                          <input name="email" className="form-contact-email input" type="email" placeholder="Email" />
                      </div>
                      <input name="subject" className="form-contact-subject input" type="text" placeholder={ t('subject') } />
                      <textarea id="" cols={ 30 } rows={ 10 } placeholder={ t('message') } className="form-contact-message input"></textarea>
                      <button className="form-contact-send">{ t('sendForm') }</button>
              </div>
          </form>
      </div>
    )
}

export default Form