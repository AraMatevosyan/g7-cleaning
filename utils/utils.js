export const animationCreate = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW({ live: false }).init();
};

export const ScrollToTopHandler = () => window.scrollTo(0, 0);

