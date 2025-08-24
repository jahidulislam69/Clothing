// Facebook Pixel implementation using direct API calls
// This ensures more reliable tracking than the react-facebook-pixel package

const options = {
  autoConfig: false, // Disable automatic tracking to prevent unwanted events
  debug: false,     // enable logs for development
};

export const initPixel = (id) => {
  try {
    // Check if Facebook Pixel is loaded
    if (typeof window !== 'undefined' && window.fbq) {
      // Initialize the pixel
      window.fbq('init', id);
      console.log('Facebook Pixel initialized with ID:', id);
    } else {
      console.warn('Facebook Pixel not loaded yet, retrying...');
      // Retry after a short delay
      setTimeout(() => initPixel(id), 1000);
    }
  } catch (error) {
    console.error('Error initializing Facebook Pixel:', error);
  }
};

export const trackPageView = () => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
      console.log('Facebook Pixel: PageView tracked');
    } else {
      console.warn('Facebook Pixel not available for PageView tracking');
    }
  } catch (error) {
    console.error('Error tracking PageView:', error);
  }
};

export const trackProductView = (product) => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'ProductView', {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category || 'General',
        currency: 'USD'
      });
      console.log('Facebook Pixel: ProductView tracked for', product.name);
    } else {
      console.warn('Facebook Pixel not available for ProductView tracking');
    }
  } catch (error) {
    console.error('Error tracking ProductView:', error);
  }
};

export const trackAddToCart = (product, size = null) => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'AddToCart', {
        id: product.id,
        name: product.name,
        size: size,
        price: product.price,
        category: product.category || 'General',
        currency: 'USD'
      });
      console.log('Facebook Pixel: AddToCart tracked for', product.name);
    } else {
      console.warn('Facebook Pixel not available for AddToCart tracking');
    }
  } catch (error) {
    console.error('Error tracking AddToCart:', error);
  }
};

export const trackPurchase = (orderId, value, currency = 'USD') => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Purchase', {
        value: value,
        currency: currency,
        content_ids: [orderId],
        content_type: 'product'
      });
      console.log('Facebook Pixel: Purchase tracked for order', orderId);
    } else {
      console.warn('Facebook Pixel not available for Purchase tracking');
    }
  } catch (error) {
    console.error('Error tracking Purchase:', error);
  }
};

export const trackInitiateCheckout = (products, value, currency = 'USD') => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: value,
        currency: currency,
        content_ids: products.map(p => p.id),
        content_type: 'product'
      });
      console.log('Facebook Pixel: InitiateCheckout tracked');
    } else {
      console.warn('Facebook Pixel not available for InitiateCheckout tracking');
    }
  } catch (error) {
    console.error('Error tracking InitiateCheckout:', error);
  }
};

// Function to manually disable automatic tracking if needed
export const disableAutomaticTracking = () => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('consent', 'revoke');
      console.log('Facebook Pixel automatic tracking manually disabled');
    }
  } catch (error) {
    console.error('Error disabling automatic tracking:', error);
  }
};

// Function to re-enable tracking for custom events
export const enableCustomTracking = () => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('consent', 'grant');
      console.log('Facebook Pixel custom tracking enabled');
    }
  } catch (error) {
    console.error('Error enabling custom tracking:', error);
  }
};

// Function to check if automatic tracking is disabled
export const isAutomaticTrackingDisabled = () => {
  try {
    if (typeof window !== 'undefined' && window.fbq && window.fbq.consent) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error checking automatic tracking status:', error);
    return false;
  }
};

// Function to check if pixel is loaded and ready
export const isPixelReady = () => {
  return typeof window !== 'undefined' && window.fbq;
};