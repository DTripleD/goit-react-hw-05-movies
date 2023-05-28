import { useEffect, useState } from 'react';
import { getMovieReview } from 'services/api';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReview(movieId)
      .then(response => setReviews(response.results))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length ? (
          reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <div>We don't have any reviews for this movie.</div>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
