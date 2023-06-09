import { useTranslation } from "react-i18next";
import "./style.scss";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
const Get = () => {
  const { t } = useTranslation();
  return (
    <div id="get" className="get_div container">
      <img className="absolute1" src={one} alt="" />
      <img className="absolute2" src={two} alt="" />
      <h1>{t("What will you get")} ?</h1>
      <div className="gets">
        <div className="get">
          <div className="infinite_div"></div>
          <p>{t("1")}</p>
        </div>
        <div className="get">
          <div className="infinite_div"></div>
          <p>{t("2")}</p>
        </div>
        <div className="get">
          <div className="infinite_div"></div>
          <p>{t("3")}</p>
        </div>
        <div className="get">
          <div className="infinite_div"></div>
          <p>{t("4")}</p>
        </div>
        <div className="get">
          <div className="infinite_div"></div>
          <p>{t("5")}</p>
        </div>
      </div>
      <button className="main_button">{t("home_button")}</button>
      <img className="absolute3" src={three} alt="" />
    </div>
  );
};

export default Get;
