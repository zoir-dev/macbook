import { useTranslation } from "react-i18next";
import "./style.scss";
import seven from "../../assets/7.png";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div id="portfolio" className="portfolio_div container">
      <h1>{t("Portfolio")}</h1>
      <div className="logos">
        <h2>Logo</h2>
        <h2>Logo</h2>
        <h2>Logo</h2>
        <h2>Logo</h2>
        <h2>Logo</h2>
        <h2>Logo</h2>
      </div>
      <img className="absolute7" src={seven} alt="" />
    </div>
  );
};

export default Portfolio;
