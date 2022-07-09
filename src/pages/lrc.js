import Footer from "../components/Footer/Footer";
import HeaderAlt from "../components/HeaderAlt/HeaderAlt";
const lrc = () => {
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
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0EABMJFFcUdXWBQYdTE9dx%2FCreed%3Fpage-id%3D2530%253A79%26node-id%3D2530%253A80%26viewport%3D1049%252C675%252C0.21%26scaling%3Dmin-zoom"
          allowFullScreen
        ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default lrc;
