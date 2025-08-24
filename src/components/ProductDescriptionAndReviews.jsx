import React, { useState } from 'react';
import { StarIcon } from 'lucide-react';

const ProductDescriptionAndReviews = ({ productData }) => {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <div className="mt-20">
      <div className="flex">
        <b
          className="border px-5 py-3 text-sm cursor-pointer"
          onClick={() => setActiveTab(true)}
        >
          Description
        </b>
        <b
          className="border px-5 py-3 text-sm cursor-pointer"
          onClick={() => setActiveTab(false)}
        >
          Reviews ({productData.reviews.length})
        </b>
      </div>
      {activeTab === true ? (
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            {productData.description}
          </p>
        </div>
      ) : (
        <div>
          {productData.reviews.map((review) => (
            <div key={review.reviewId} className="border px-6 py-4 mb-4">
              <div className="flex items-center mb-2">
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="text-yellow-500 mr-2" />
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  {review.author} - {review.date}
                </p>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDescriptionAndReviews;