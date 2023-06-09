import { useTranslation } from "react-i18next";
import "./style.scss";
import seven from "../../assets/7.png";
import first from "../../assets/11.png";
import second from "../../assets/12.png";
import third from "../../assets/13.png";
import fourth from "../../assets/14.png";
import fivth from "../../assets/15.png";
import sixth from "../../assets/16.png";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div id="portfolio" className="portfolio_div container">
      <h1>{t("Portfolio")}</h1>
      <div className="logos">
        <img src={first} alt="logo" />
        <img src={second} alt="logo" />
        <img src={third} alt="logo" />
        <img src={fourth} alt="logo" />
        <img src={fivth} alt="logo" />
        <img src={sixth} alt="logo" />
      </div>
      <img className="absolute7" src={seven} alt="" />
    </div>
  );
};

export default Portfolio;
