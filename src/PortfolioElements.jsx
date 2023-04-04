import React, { useState } from 'react'

export default function PortfolioElements({portfElm}) {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='portfolio_element_section'>
        <div className="portfolio_element"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                className={`portfolio_image ${isHovered && 'hovered'} `}
                src={portfElm.image} alt="" 
            />
            <a href={portfElm.link} className={`portfolio_title ${isHovered && 'hovered'}`}>
                <h1>{portfElm.title}</h1>
            </a>
        </div>

    </div>
  )
}
