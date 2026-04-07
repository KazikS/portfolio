import { Hero } from '@/widgets/Hero';
import '@/styles/globals.scss';
import { About } from '@/widgets/About';
import { Skills } from '@/widgets/Skills';
import { Projects } from '@/widgets/Projects';
import { Contact } from '@/widgets/Contact';
import { DotNav } from '@/widgets/DotNav';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <DotNav />
    </>
  );
}

export default App;
