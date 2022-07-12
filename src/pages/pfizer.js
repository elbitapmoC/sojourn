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

export default pfizer;
