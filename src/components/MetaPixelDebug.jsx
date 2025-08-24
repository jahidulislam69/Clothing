import React, { useState } from 'react';
import { trackProductView, trackAddToCart, trackPurchase, trackInitiateCheckout, isAutomaticTrackingDisabled, disableAutomaticTracking } from '@/assets/pixel';

const MetaPixelDebug = () => {
  const [debugMode, setDebugMode] = useState(false);
  const [trackingStatus, setTrackingStatus] = useState('Unknown');

  const testProduct = {
    id: 'test-123',
    name: 'Test Product',
    price: 99.99,
    category: 'Test Category'
  };

  const testProducts = [testProduct];

  const handleTestProductView = () => {
    trackProductView(testProduct);
  };

  const handleTestAddToCart = () => {
    trackAddToCart(testProduct, 'M');
  };

  const handleTestPurchase = () => {
    trackPurchase('order-123', 99.99);
  };

  const handleTestCheckout = () => {
    trackInitiateCheckout(testProducts, 99.99);
  };

  const handleCheckTrackingStatus = () => {
    const isDisabled = isAutomaticTrackingDisabled();
    setTrackingStatus(isDisabled ? 'Disabled ✅' : 'Enabled ❌');
  };

  const handleDisableTracking = () => {
    disableAutomaticTracking();
    handleCheckTrackingStatus();
  };

  if (!debugMode) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setDebugMode(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600"
        >
          🐛 Debug Pixel
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-800">Meta Pixel Debug</h3>
        <button
          onClick={() => setDebugMode(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="mb-3 p-2 bg-gray-100 rounded text-sm">
        <div className="font-medium">Auto Tracking: {trackingStatus}</div>
        <div className="text-xs text-gray-600 mt-1">Status: {trackingStatus}</div>
      </div>
      
      <div className="space-y-2 mb-3">
        <button
          onClick={handleCheckTrackingStatus}
          className="w-full bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600"
        >
          Check Tracking Status
        </button>
        
        <button
          onClick={handleDisableTracking}
          className="w-full bg-red-500 text-white px-3 py-2 rounded text-sm hover:bg-red-600"
        >
          Disable Auto Tracking
        </button>
      </div>
      
      <div className="space-y-2">
        <button
          onClick={handleTestProductView}
          className="w-full bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600"
        >
          Test ProductView
        </button>
        
        <button
          onClick={handleTestAddToCart}
          className="w-full bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600"
        >
          Test AddToCart
        </button>
        
        <button
          onClick={handleTestCheckout}
          className="w-full bg-yellow-500 text-white px-3 py-2 rounded text-sm hover:bg-yellow-600"
        >
          Test InitiateCheckout
        </button>
        
        <button
          onClick={handleTestPurchase}
          className="w-full bg-red-500 text-white px-3 py-2 rounded text-sm hover:bg-red-600"
        >
          Test Purchase
        </button>
      </div>
      
      <div className="mt-3 text-xs text-gray-600">
        Check browser console for tracking logs
      </div>
    </div>
  );
};

export default MetaPixelDebug;
