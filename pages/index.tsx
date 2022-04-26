import type { NextPage } from 'next'
import { ImageSection } from '../components/imageSection';
import { About } from '../components/About';
import { Projects } from '../components/Projects';

const Home: NextPage = () => {
  return (
    <>     
      <main>
        <ImageSection />
        <About />
        <Projects />
      </main>
    </>

  )
}

export default Home
