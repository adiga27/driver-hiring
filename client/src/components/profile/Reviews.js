import React from 'react';

export default function Reviews({ reviews }) {
  const stars = [1, 2, 3, 4, 5];
  console.log(reviews);
  return (
    <>
      <h2 className="heading-secondary ma-bt-md">My Reviews</h2>
      {reviews?.map((review) => (
        <div className="reviews__card" key={review?._id}>
          <div className="reviews__avatar">
            <img
              className="reviews__avatar-img"
              src={`../img/users/${
                review?.user?.photo ? review.user.photo : 'default.jpg'
              }`}
              alt={`${review?.user?.name}`}
            />
            <h6 className="reviews__user">{review?.user?.name}</h6>
          </div>
          <p className="reviews__text">{review?.review}</p>
          <div className="reviews__rating">
            {stars.map((star) => (
              <svg
                className={`reviews__star reviews__star--${
                  review?.rating >= star ? 'active' : 'inactive'
                }`}
                key={review.star}
              >
                <use href="/img/icons.svg#icon-star"></use>
              </svg>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
