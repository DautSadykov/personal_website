import React from 'react'
import portfolio from "./portfolioData.js"
import PortfolioElements from './PortfolioElements.jsx'

export default function PortfolioSection() {
  const portfolioElements = portfolio.map(portfElm => {
    return (
        <PortfolioElements 
            key = {portfElm.id}
            portfElm = {portfElm}
        />
    )
  })
  
    return (
    <div className='portfolio_section'>
      <h1>PORTFOLIOS</h1>
      <div className="portfolio_elements">
        {portfolioElements}
      </div>
    </div>
  )
}
