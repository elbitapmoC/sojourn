import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import HeaderAlt from "../components/HeaderAlt/HeaderAlt";
import { Container } from "./../layout/LayoutStyles";
import { aboutImage } from "../constants/constants";

const about = () => {
  return (
    <>
      <HeaderAlt />
      <Container>
        <About />
      </Container>
      <img src={aboutImage.src} />
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default about;
