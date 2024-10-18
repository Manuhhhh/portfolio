import React from 'react'
import './AbtmeCard.css'

interface cardProps {
    route: string;
    title: string;
}

const AbtmeCard: React.FC<cardProps> = ({ route, title }) => {
  return (
    <div className="abtme-card-hitbox">
        <div className="abtme-card">
            <div className="abtme-logo">
            <img src= { route } alt="Programming language logo" />
            </div>
            <div className="abtme-card-content"><p><b>{ title }</b></p></div>
        </div>
    </div>
  )
}

export default AbtmeCard