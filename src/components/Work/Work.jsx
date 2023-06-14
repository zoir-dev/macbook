import { useTranslation } from "react-i18next";
import "./style.scss";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";

const Work = () => {
  const { t } = useTranslation();
  return (
    <div id="work" className="work_div container">
      <img src={four} className="absolute4" alt="" loading="lazy" />
      <img src={five} className="absolute5" alt="" loading="lazy" />
      <img src={six} className="absolute6" alt="" loading="lazy" />
      <h1>{t("Stages of work")}</h1>
      <Timeline position="alternate" className="steps">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("step1")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("step2")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("step3")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("step4")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("step5")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>{t("step6")}</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Work;
