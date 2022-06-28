import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Capabilities from "../components/Capabilities/Capabilities";
import Testimonials from "../components/Testimonials/Testimonials";
import { Layout } from "../layout/Layout";
import CTA from "../components/CTA/CTA";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Capabilities />
      <Acomplishments />
      <Projects />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Home;
