import Footer from "../components/Footer/Footer";
import HeaderAlt from "../components/HeaderAlt/HeaderAlt";
const dfa = () => {
  const width = {
    width: "100%",
    marginBottom: "3.6rem",
  };

  const paddBottom = {
    marginBottom: "10rem",
  };

  const container = {
    position: "relative",
    height: "100vh",
    marginBottom: "4.8rem",
    // marginBottom: "4.8rem",
  };
  const oww = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    zIndex: 0,
  };
  return (
    <>
      <HeaderAlt />
      <section style={container}>
        <iframe
          style={oww}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUKGHN4VADahv9wpQMU0WJhZ3%2FDFA-Exploration%3Fpage-id%3D340%253A2%26node-id%3D491%253A15%26viewport%3D-3414%252C-50%252C0.36%26scaling%3Dscale-down%26starting-point-node-id%3D491%253A15%26show-proto-sidebar%3D1"
        ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default dfa;
