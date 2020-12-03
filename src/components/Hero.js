import React from "react";

function Hero({ children, hero }) {
  return <div className={hero}>{children}</div>;
}

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero",
};
