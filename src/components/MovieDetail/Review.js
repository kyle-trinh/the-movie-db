import React from 'react';
import { shortenOverview } from '../../utils/utilities';
import { withDataFetch } from './context';

function Review({ data }) {
  return (
    <div className="movie__details__body-content-review">
      <h4 className="movie__details__body-content-title mt-4 mb-2">
        Featured Review
      </h4>
      {data.reviews.loading
        ? null
        : data.reviews.list.map(review => (
            <div className="review" key={review.id}>
              <img
                src="https://via.placeholder.com/300"
                alt={review.author}
                className="review-author-photo"
              />
              <div className="review-details">
                <h5 className="review-author">{review.author}</h5>
                <p className="text-desc">
                  {shortenOverview(review.content, 30)}
                </p>
                <a
                  className="review-link"
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more >>
                </a>
              </div>
            </div>
          ))}
    </div>
  );
}

export default withDataFetch(Review);
