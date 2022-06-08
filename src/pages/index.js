import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Capabilities from '../components/Capabilities/Capabilities';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
        <Hero />
        <Capabilities />
        <Acomplishments />
        <Projects />
    </Layout>
  );
};

export default Home;
