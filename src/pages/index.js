import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Capabilities from '../components/Capabilities/Capabilities';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';

import styled from  'styled-components';

const Test1 = styled.span`
  font-size: 40px;
  font-family: 'apercu-rg'; 
  color: purple;
`;
const Test2 = styled.span`
  font-size: 40px;
  font-family: 'gallient'; 
  color: purple;
`;

const Home = () => {
  return (
    <Layout>
        <main>
          <Test1>Test1</Test1>
          <Test2>Test2</Test2>
        </main>
        <Hero />
        <Projects />
        <Capabilities />
        <Timeline />
        <Acomplishments />
    </Layout>
  );
};

export default Home;
