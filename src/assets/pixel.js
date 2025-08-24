import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: false, // Disable automatic tracking to prevent unwanted events
  debug: false,     // enable logs for development
};

export const initPixel = (id) => {
  try {
    ReactPixel.init(id, {}, options);
    
    // Explicitly disable automatic tracking
    if (window.fbq) {
      window.fbq('consent', 'revoke');
      console.log('Facebook Pixel automatic tracking disabled');
    }
    
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
    // Use trackCustom instead of track to avoid automatic event detection
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

// Function to manually disable automatic tracking if needed
export const disableAutomaticTracking = () => {
  try {
    if (window.fbq) {
      window.fbq('consent', 'revoke');
      console.log('Facebook Pixel automatic tracking manually disabled');
    }
  } catch (error) {
    console.error('Error disabling automatic tracking:', error);
  }
};

// Function to check if automatic tracking is disabled
export const isAutomaticTrackingDisabled = () => {
  try {
    if (window.fbq && window.fbq.consent) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error checking automatic tracking status:', error);
    return false;
  }
};