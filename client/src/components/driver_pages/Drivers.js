import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';

export default function Drivers() {
  const context = useOutletContext();
  console.log(context);

  return (
    <>
      <div
        className={`card-container${
          context ? (context[0].user ? '__booking' : '__driver') : '__driver'
        }`}
      >
        {context?.map((driver) => {
          return (
            <div key={driver._id} className="card">
              <div className="card__header">
                <div className=".card__picture">
                  <div className="card__picture-overlay">&nbsp;</div>
                  <img
                    className="card__picture-img"
                    src={`/img/drivers/${
                      driver.photo
                        ? driver.photo
                        : driver.driver.photo
                        ? driver.driver.photo
                        : 'default.jpg'
                    }`}
                    alt={driver.name ? driver.name : driver.driver.name}
                  />
                </div>
                <h3 className="heading-tertirary">
                  <span>{driver.name ? driver.name : driver.driver.name}</span>
                </h3>
              </div>
              <div className="card__details">
                <h4 className="card__sub-heading">
                  {driver.place ? driver.place : driver.driver.place}
                </h4>
                {/* <p className="card__text">${driver.summary}</p> */}
                <div className="card__data">
                  <svg className="card__icon">
                    <use href="/img/icons.svg#icon-map-pin"></use>
                  </svg>
                  <span>
                    {driver.drives ? driver.drives : driver.driver.drives}
                  </span>
                </div>
              </div>
              <div className="card__footer">
                <p>
                  <span className="card__footer-value">
                    ₹{driver.price}&nbsp;
                  </span>
                  | <span className="card__footer-text">&nbsp;minimum</span>
                </p>
                {driver.pricePerKm ? (
                  <p>
                    <span className="card__footer-value">
                      ₹{driver.pricePerKm}
                      &nbsp;
                    </span>
                    | <span className="card__footer-text">&nbsp;km</span>
                  </p>
                ) : (
                  ''
                )}
                <p className="card__ratings">
                  <svg className="overview-box__icon">
                    <use href="/img/icons.svg#icon-star"></use>
                  </svg>
                  <span className="card__footer-value">
                    {driver.rating ? driver.rating : driver.driver.rating}&nbsp;
                  </span>
                  |
                  <span className="card__footer-text">
                    &nbsp;rating (
                    {driver.ratingsQuantity
                      ? driver.ratingsQuantity
                      : driver.driver.ratingsQuantity}
                    )
                  </span>
                </p>

                <NavLink
                  className="btn btn--green btn--small"
                  to={
                    !driver.user
                      ? `${driver._id}`
                      : `../../drivers/${driver.driver._id}`
                  }
                >
                  Details
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
