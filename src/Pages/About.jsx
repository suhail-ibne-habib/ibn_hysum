import React from 'react'
import { BreadCrumb, AboutUs, Section, Characteristics } from '../components'

function About() {
  return (
    <div>
        <BreadCrumb />
        <div className="container">
        <Section>
            <AboutUs />
        </Section>
        <Section>
            <Characteristics />
        </Section>
        </div>
    </div>
  )
}

export default About