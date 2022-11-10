import React, { useRef, useEffect } from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import { useParams } from 'react-router-dom'
function Home() {
  const aboutRef = useRef()

   const executeScroll = () => aboutRef.current.scrollIntoView()
  
  const { about } = useParams()

  useEffect(() => {
    if(about === "about") {
      window.scrollTo({ behavior: 'smooth', top: aboutRef.current.offsetTop });
    }
  }, [])

  return (
    <>
        <Hero />
        <div ref={aboutRef}>
          <About />
        </div>
    </>
  )
}

export default Home