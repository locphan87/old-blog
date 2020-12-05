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
};
const Icon = ({ name }) => {
  const source = iconMaps[name];
  if (!source) return null;
  return <img src={source} style={style} />;
};

export default Icon;
