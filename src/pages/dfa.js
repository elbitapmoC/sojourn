import Footer from "../components/Footer/Footer";
import { Container } from "../layout/LayoutStyles";
import Case from "../components/Case/Case";
import HeaderAlt from "../components/HeaderAlt/HeaderAlt";
import { lr, lr_thumbnail } from "../constants/constants";
const dfa = () => {
  const Image = {
    width: "100%",
  };

  return (
    <>
      <HeaderAlt />
      <img style={Image} src={lr_thumbnail.thumbnail}></img>
      <Container>
        <Case content={lr} />
        <Footer />
      </Container>
    </>
  );
};

export default dfa;
