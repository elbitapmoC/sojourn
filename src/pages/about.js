import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const about = () => {
  const sectionHeight = {
    height: "90vh",
    position: "relative",
  };
  const sectionHead = {
    top: "50%",
    position: "absolute",
    transform: "translateY(50%)",
  };

  return (
    <>
      <Header />
      <section style={sectionHeight}>
        <h1 style={sectionHead}>ABOUT</h1>
      </section>
      <Footer />
    </>
  );
};

export default about;
