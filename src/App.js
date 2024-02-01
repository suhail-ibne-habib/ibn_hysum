import Navbar from './components/Nav';
import AboutUs from './components/AboutUs';
import Characteristics from './components/Characteristics';
import Courses from './components/Courses';
import Hero from './components/Hero';
import Notices from './components/Notices';
import SecondSection from './components/SecondSection';
import Section from './components/templates/Section';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
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
      <Section>
        <Characteristics />
      </Section>
      <Section>
        <Courses />
      </Section>
      <Footer />
    </>
  );
}

export default App;
