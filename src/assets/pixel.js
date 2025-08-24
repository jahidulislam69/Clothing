import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false,     // enable logs for development
};

export const initPixel = (id) => {
  ReactPixel.init(id, {}, options);
};

export const trackPageView = () => {
  ReactPixel.pageView();
};

export const trackProductView = (product) => {
  ReactPixel.trackCustom("ProductView", {
    id: product.id,
    name: product.name,
    price: product.price,
  });
};



export const trackAddToCart = (product, size = null) => {
  ReactPixel.trackCustom("AddToCart", {
    id: product.id,
    name: product.name,
    size: size,
    price: product.price,
  });
};