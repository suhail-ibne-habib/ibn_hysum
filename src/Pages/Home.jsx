import React from 'react'
import { Hero, SecondSection, Section, Notices, AboutUs, Characteristics, Courses } from '../components/index';


function Home() {
  return (
    <>
      
      <Hero />
      <Section title="Featured topics">
        <SecondSection />
      </Section>
      <Section title="Notices">
        <Notices />
      </Section>
      <Section>
        <AboutUs />
      </Section>
      <Section title="আমাদের বৈশিষ্ট্য">
        <Characteristics />
      </Section>
      <Section>
        <Courses />
      </Section>
      
    </>
  )
}

export default Home