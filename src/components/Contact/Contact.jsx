import { useTranslation } from "react-i18next";
import "./style.scss";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact_div container" id="contact">
      <h1>{t("contacth1")}</h1>
      <h2>{t("contacth2")}</h2>
      <div className="inputs">
        <div className="input">
          <label htmlFor="input1">{t("label1")}</label>
          <input type="text" id="input1" />
        </div>
        <div className="input">
          <label htmlFor="input2">{t("label2")}</label>
          <input type="tel" id="input2" />
        </div>
      </div>
      <button className="main_button">{t("home_button")}</button>
    </div>
  );
};

export default Contact;
