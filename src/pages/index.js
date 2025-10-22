import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Testimonials from "../components/Testimonials/Testimonials";
import { Layout } from "../layout/Layout";
import CTA from "../components/CTA/CTA";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <Layout>
      <Hero />
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Projects />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Testimonials />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <CTA />
      </motion.div>
    </Layout>
  );
};

export default Home;
