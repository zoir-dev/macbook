import { Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { data } from ".";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Menu as Menuu } from "@mui/icons-material";
import HeaderDrawer from "./HeaderDrawer";
import gg from "../../assets/гг.png";
import arrow from "../../assets/arrow.png";

const Header = () => {
  const [lang, setLang] = useState(localStorage.getItem("language") || "ru");
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLang = (newLang) => {
    setLang(newLang.name);
    handleClose();
  };
  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  }, [lang, i18n]);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenu(true);
  };
  const handleClose = () => {
    setMenu(false);
    // setAnchorEl(null);
  };

  function scrollToComponent(id) {
    const targetComponent = document.getElementById(id);
    targetComponent.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="header_div">
      <img src={gg} className="logo" alt="" />
      <div className="header_links">
        <button onClick={() => scrollToComponent("get")}>
          {t("What will you get")}
        </button>
        <button onClick={() => scrollToComponent("work")}>
          {t("Stages of work")}
        </button>
        <button onClick={() => scrollToComponent("portfolio")}>
          {t("Portfolio")}
        </button>
      </div>
      <div className="header_translation">
        <div onClick={handleOpen}>
          <img
            className="flag"
            src={data?.filter((d) => d.name === lang)[0].img}
            alt="flag"
          />
          <img className={`arrow ${menu && "open_menu "}`} src={arrow} alt="" />
        </div>
        <Menu anchorEl={anchorEl} keepMounted open={menu} onClose={handleClose}>
          {data.map((d) => (
            <MenuItem key={d.name} onClick={() => changeLang(d)}>
              <img className="flag menuFlag" src={d.img} alt="" />
            </MenuItem>
          ))}
        </Menu>

        <Menuu className="header_menu_icon" onClick={() => setDrawer(true)} />
      </div>
      <HeaderDrawer
        open={drawer}
        setOpen={setDrawer}
        scrollToComponent={scrollToComponent}
      />
    </div>
  );
};

export default Header;
