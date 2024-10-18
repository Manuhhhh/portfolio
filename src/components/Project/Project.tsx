import React, { ReactNode, useRef } from 'react'
import './Project.css'
import closeBtnImg from '../../assets/images/svg/close_button.svg'
interface ParentProps {
    children: ReactNode;
    imgRoute: string;
    title: string;
    description: string;
  }

export const Project: React.FC<ParentProps> = ({ children, title, description, imgRoute }) => {
  const container = useRef<HTMLDivElement>(null);

  const showProject = () => {
    if (container.current) {
      container.current.style.display = 'block';
    }
  }

  const hideProject = () => {
    const handleClick = () => {
      if (container.current) {
        container.current.style.display = 'none';
      }
    }
    setTimeout(handleClick, 0)
  };


  return (

    <div className='project-container' onClick={ showProject }>
      <img src={imgRoute} alt="Project title" className='project-image' />
      <h2 className='project-title'>{ title }</h2>
      <p className='project-description'>{ description }</p>
      
      {/* Parte oculta */}
      <div className='project-presentation' ref={ container }>
        <div className='project-presentation-content'>
          <img src={ closeBtnImg } alt='Close button' onClick={hideProject} className='close-btn' />
          {/* Contenido del proyecto */}
          <div className='project-presentation-content-text'>
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;