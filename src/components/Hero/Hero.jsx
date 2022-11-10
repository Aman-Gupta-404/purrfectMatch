import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='hero'>
        <div className="hero__overlay">
            <div className="hero__content">
                <div className="hero__section hero__heading">
                    <h1 className="hero__heading--text">
                        Purrfect Match
                    </h1>
                </div>
                <div className="hero__section hero__para">
                    <p className="hero__para--text">
                        One stop solution for all you catly needs!
                    </p>
                </div>
                <div className="hero__section hero__button">
                    <button className="btn">Start shopping</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero