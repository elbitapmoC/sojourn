import Footer from "../components/Footer/Footer";
import { Container } from "../layout/LayoutStyles";
import Case from "../components/Case/Case";
import { LayoutDark } from "../layoutDark/LayoutDark";

const dfa = () => {
  return (
    <>
      <LayoutDark>
        <Container>
          <Case />
          <Footer />
        </Container>
      </LayoutDark>
    </>
  );
};

export default dfa;
