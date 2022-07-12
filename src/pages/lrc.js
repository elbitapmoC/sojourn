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
      <div class="columns">
        <div class="column">1</div>
        <div class="column">2</div>
        <div class="column">3</div>
        <div class="column">4</div>
        <div class="column">5</div>
      </div>
      <Footer />
    </>
  );
};

export default lrc;
