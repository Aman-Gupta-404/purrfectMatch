import React from 'react'
import "./About.css"
import about1 from "../../img/about_1.png"
import about2 from "../../img/about2.png"

function About() {
  return (
    <div className='about'>
        <h1 className="about__heading">Do you love cats?</h1>
        <div className="about__para">
            <div className="about__para-text">
                <p className="about__text">
                    No matter what people say, cats are really adorable, we are a group of people who love cats and want to something to the cats of our planets, hence we created this website to provide the cat owners with all thir catly requirements.
                </p>
                <br/>
                <p className="about__text">
                    Taking care of a cat can really get hectic a lot of times, and that is where we come in, here you will find everything that can make your life as a cat owner easy and that too at the right cost.
                </p>    
            </div>
            <div className="about__para-image">
                <img src={about1} alt="" className='about__image'/>
            </div>
        </div>
        <br/><br/>
        <h1 className="about__heading">About the website</h1>
        <div className="about__para">
            <div className="about__para-image2">
                <img src={about2} alt="" className='about__image'/>
            </div>
            <div className="about__para-text">
                
                <p className="about__text--web">
                    This website is made completely using Reach Js framework. It's a website with multiple pages and does not hae any backent it runs on. The website also uses Redux as its state management library to manage all the states of the website.
                </p>
                {/* <br/> */}
            </div>
            
        </div>
    </div>
  )
}

export default About