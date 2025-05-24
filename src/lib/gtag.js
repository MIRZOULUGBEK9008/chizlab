export const GA_MEASUREMENT_ID = "G-XFC7PF8NCZ";

export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
