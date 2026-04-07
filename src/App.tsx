import { Hero } from '@/widgets/Hero';
import '@/styles/globals.scss';
import { About } from '@/widgets/About';
import { Skills } from '@/widgets/Skills';
import { Projects } from '@/widgets/Projects';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
