import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Capabilities from "../components/Capabilities/Capabilities";
import Testimonials from "../components/Testimonials/Testimonials";
import { Layout } from "../layout/Layout";
import CTA from "../components/CTA/CTA";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Fade bottom>
        <Projects />
      </Fade>
      <Fade bottom>
        <Testimonials />
      </Fade>
      <Fade bottom>
        <CTA />
      </Fade>
    </Layout>
  );
};

export default Home;
