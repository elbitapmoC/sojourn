import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./../layout/LayoutStyles";
import { aboutImage } from "../constants/constants";

const about = () => {
  const fullWidth = {
    width: "100%",
  };

  return (
    <>
      <Header />
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
