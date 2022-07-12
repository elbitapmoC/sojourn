import { companies } from "../constants/constants";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const pfizer = () => {
  const width = {
    width: "100%",
    marginBottom: "3.6rem",
  };
  return (
    <>
      <Header />
      <div className="columns">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
        <div className="column">4</div>
        <div className="column">5</div>
      </div>
      <Footer />
    </>
  );
};

export default pfizer;
