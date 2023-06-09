import { Instagram } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import "./style.scss";
import telegram from "../../assets/telegram.png";
import utube from "../../assets/utube.png";
import gg from "../../assets/гг.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer_div">
      <img src={gg} alt="" />
      <div className="contacts">
        <p>{t("contact")}</p>
        <a href="tel:+998930045554">+998930045554</a>
        <a href="tel:+998994935584">+998994935584</a>
      </div>
      <div className="socials">
        <a href="https://t.me/uniagency">
          <img src={telegram} alt="" />
        </a>
        <a href="https://www.instagram.com/uniagency.uz/">
          <Instagram />
        </a>
        <a href="https://www.youtube.com/channel/UCpKe3MvpUghkvKn44Ke1suw">
          <img src={utube} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
