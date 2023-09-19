import Footer from '@/components/Footer'
import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About

About.getLayout = function PageLayout(page){
    return (
        <>
            {page}
            <Footer />
        </>
    )
}