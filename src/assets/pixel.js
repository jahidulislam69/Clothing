import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false,     // enable logs for development
};

export const initPixel = (id) => {
  try {
    ReactPixel.init(id, {}, options);
    console.log('Facebook Pixel initialized with ID:', id);
  } catch (error) {
    console.error('Error initializing Facebook Pixel:', error);
  }
};

export const trackPageView = () => {
  try {
    ReactPixel.pageView();
    console.log('Facebook Pixel: PageView tracked');
  } catch (error) {
    console.error('Error tracking PageView:', error);
  }
};

export const trackProductView = (product) => {
  try {
    ReactPixel.trackCustom("ProductView", {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category || 'General',
      currency: 'USD'
    });
    console.log('Facebook Pixel: ProductView tracked for', product.name);
  } catch (error) {
    console.error('Error tracking ProductView:', error);
  }
};

export const trackAddToCart = (product, size = null) => {
  try {
    ReactPixel.trackCustom("AddToCart", {
      id: product.id,
      name: product.name,
      size: size,
      price: product.price,
      category: product.category || 'General',
      currency: 'USD'
    });
    console.log('Facebook Pixel: AddToCart tracked for', product.name);
  } catch (error) {
    console.error('Error tracking AddToCart:', error);
  }
};

export const trackPurchase = (orderId, value, currency = 'USD') => {
  try {
    ReactPixel.track('Purchase', {
      value: value,
      currency: currency,
      content_ids: [orderId],
      content_type: 'product'
    });
    console.log('Facebook Pixel: Purchase tracked for order', orderId);
  } catch (error) {
    console.error('Error tracking Purchase:', error);
  }
};

export const trackInitiateCheckout = (products, value, currency = 'USD') => {
  try {
    ReactPixel.track('InitiateCheckout', {
      value: value,
      currency: currency,
      content_ids: products.map(p => p.id),
      content_type: 'product'
    });
    console.log('Facebook Pixel: InitiateCheckout tracked');
  } catch (error) {
    console.error('Error tracking InitiateCheckout:', error);
  }
};