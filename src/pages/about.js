import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import HeaderAlt from "../components/HeaderAlt/HeaderAlt";
import { Container } from "./../layout/LayoutStyles";
import { aboutImage } from "../constants/constants";

const about = () => {
  const fullWidth = {
    width: "100%",
  };

  return (
    <>
      <HeaderAlt />
      <Container>
        <About />
      </Container>
      <img style={fullWidth} src={aboutImage.src} />
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default about;
