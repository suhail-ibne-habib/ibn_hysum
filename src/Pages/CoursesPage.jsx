import React from 'react'
import { BreadCrumb, Courses, Section } from '../components'

function CoursesPage() {
  return (
    <div>
        <BreadCrumb />
        <Section>
            <Courses />
        </Section>
    </div>
  )
}

export default CoursesPage