import { useTranslation } from "react-i18next";
import "./style.scss";
import laptop from "../../assets/laptop.png";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home_div container">
      <div className="home_left">
        <h2>{t("home_title")}</h2>
        <button className="main_button">{t("home_button")}</button>
      </div>
      <img src={laptop} alt="" />
    </div>
  );
};

export default Home;
