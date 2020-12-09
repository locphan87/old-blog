import React from "react";

const style = {
  borderRadius: 0,
  width: "100%",
  height: "auto",
  maxWidth: "100px",
  margin: 0,
};
const iconMaps = {
  "polytech-nantes":
    "https://media.licdn.com/dms/image/C4E0BAQGGV9BX_tTmIw/company-logo_200_200/0?e=2159024400&v=beta&t=34nmGMnVsmHqMa_pNIpL6S5ER2wRTanEV_9snfTtExY",
  ctu: "https://heeap.org/sites/default/files/pictures/can-tho_0.jpg",
  ozerside:
    "https://media.licdn.com/dms/image/C4E0BAQEdvJtMbt7ehg/company-logo_200_200/0?e=2159024400&v=beta&t=gzeporDFfzNwQba9c_7lB_CJ1EsHP2syBuYOi6kMOO8",
  pyco:
    "https://pycogroup.com/resources/templating-kit/themes/theme-pyco/asset/img/PYCOGROUP_logo2020_blk.png",
  ibm:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/220px-IBM_logo.svg.png",
  nab:
    "https://media-exp1.licdn.com/dms/image/C4E0BAQE1rz180bOZUQ/company-logo_100_100/0/1519856308201?e=1615420800&v=beta&t=lP445JmRgVu3Ftll4tDps96kvOYkmjVmO83llswcmmw",
};
const Icon = ({ name, description = name }) => {
  const source = iconMaps[name];
  if (!source) return null;
  return <img src={source} alt={description} style={style} />;
};

export default Icon;
