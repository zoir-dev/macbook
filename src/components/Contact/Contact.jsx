import { useTranslation } from "react-i18next";
import "./style.scss";
import { useState } from "react";
import DirectionSnackbar from "../Alert/Alert";
import { CircularProgress } from "@mui/material";
import ReactInputMask from "react-input-mask";
// import emailjs from "emailjs-com";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("+998");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [isValid, setIsValid] = useState(false);
  const { t } = useTranslation();

  const handleSend = () => {
    setLoading(true);
    setAlert(true);
  };
  const handleKeyDown = (e) => {
    // Prevent the user from deleting the country code "(+998) ("
    if (e.key === "Backspace" && tel === "+998") {
      e.preventDefault();
    }
  };
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
          <label
            htmlFor="input2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            {t("label2")}
          </label>
          <ReactInputMask
            id="input2"
            mask="(+999) (99) 999-99-99"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            maskPlaceholder="_"
            alwaysShowMask
          />
        </div>
      </div>
      <button
        className={`main_button ${loading && "loading_button"}`}
        onClick={handleSend}
      >
        {!loading ? t("home_button") : t("submitting")}
        {loading && (
          <CircularProgress color="inherit" className="loading_icon" />
        )}
      </button>
      <DirectionSnackbar
        open={alert}
        setOpen={setAlert}
        message={t("application")}
      />
    </div>
  );
};

export default Contact;
