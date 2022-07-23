import { useLocation } from "react-router-dom";
import ArabicFooter from "./arabic/Footer";
import EnglishFooter from "./english";

const FooterNew = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get("lang");

  if (lang === "eng") return <EnglishFooter />;
  else if (lang === "ar") return <ArabicFooter />;
  else return <EnglishFooter />;
};

export default FooterNew;
