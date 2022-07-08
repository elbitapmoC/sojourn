import { companies } from "../constants/constants";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const amazon = () => {
  console.log(companies[0]);
  const width = {
    width: "100%",
    marginBottom: "3.6rem",
  };
  return (
    <>
      <Header />
      <picture>
        <source
          style={width}
          srcSet={companies[0].case_webP}
          type="image/webp"
        />
        <source style={width} srcSet={companies[0].case_jp2} type="image/jp2" />
        <img
          style={width}
          src={companies[0].case_jxr}
          type="image/vnd.ms-photo"
        />
      </picture>
      <Footer />
    </>
  );
};

export default amazon;
