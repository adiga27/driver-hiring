import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Driver({ cookies }) {
  const { driverId } = useParams();

  const [driver, setDriver] = useState([]);

  useEffect(() => {
    function fetchDriver() {
      axios
        .get(`/api/v1/user/hireDriver/${driverId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + cookies.jwt,
          },
        })
        .then((res) => {
          setDriver(res.data.data.data);
          console.log(res.data.data.data);
        })
        .catch((e) => console.error(e));
    }
    fetchDriver();
  }, [cookies.jwt, driverId]);

  const handleBooking = () => {
    axios
      .get(`/api/v1/booking/checkout-session/${driverId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + cookies.jwt,
        },
      })
      .then((res) => {
        // setUrl(res.data.session.url);
        console.log(res.data.session.url);
        window.location.replace(res.data.session.url);
      })
      .catch((e) => console.error(e));
  };
  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay">&nbsp;</div>
          <img
            className="header__hero-img"
            src={`../img/drivers/${
              driver.drives ? driver.drives + '.webp' : 'default.jpg'
            }`}
            alt="#{driver.name}"
          />
        </div>
        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{driver.name}</span>
          </h1>
          <div className="heading-box__group">
            {/* <!-- .heading-box__detail -->
                <!--   <svg className="heading-box__icon"> -->
                <!--     <use xlink:href="/img/icons.svg#icon-clock"></use> -->
                <!--   </svg> -->
                <!--   <span className="heading-box__text">#{driver.duration} days</span> -->
                <!-- .heading-box__detail -->
                <!--   <svg className="heading-box__icon"> -->
                <!--     <use xlink:href="/img/icons.svg#icon-map-pin"></use> -->
                <!--   </svg> -->
                <!--   <span className="heading-box__text">driver.startLocation.description</span>  */}
          </div>
        </div>
      </section>
      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              {/* <!-- - const date = driver.startDates[0].toLocaleString('en-us', {month: 'long', year: 'numeric'}) -->
                  <!-- +overviewBox('Next date', date, 'calendar') -->
                  <!-- +overviewBox('Difficulty', driver.difficulty, 'trending-up') -->
                  <!-- +overviewBox('Participants', `${driver.maxGroupSize} people`, 'user') --> */}
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="/img/icons.svg#icon-star"></use>
                </svg>
                <span className="overview-box__label">Rating</span>
                <span className="overview-box__text">{driver.rating} / 5</span>
              </div>
            </div>
          </div>
          <div className="description-box">
            {/* <!-- h2.heading-secondary.ma-bt-lg= `About ${driver.name} driver` -->
              <!-- - const parapraphs = driver.description.split('\n'); -->
              <!-- each p in parapraphs -->
              <!--   p.description__text= p --> */}
          </div>
        </div>
      </section>
      <section className="section-cta">
        <div className="cta">
          {/* <!-- .cta__img.cta__img--logo -->
              <!--   img(src='/img/logo-white.png', alt='Nadrivers logo') -->
              <!-- img.cta__img.cta__img--1(src=`/img/drivers/${driver.images[1]}`, alt='driver picture') -->
              <!-- //- img.cta__img.cta__img--2(src=`/img/drivers/${driver.images[2]}`, alt='driver picture') --> */}
          <div className="cta__content">
            {/* <!-- h2.heading-secondary What are you waiting for? -->
                <!-- p.cta__text= `${driver.duration} days. 1 adventure. Infinite memories. Make it yours today!` --> */}
            <button
              className="btn btn--green span-all-rows"
              id="book-tour"
              data-driver-id={`${driver._id}`}
              onClick={handleBooking}
            >
              Book driver now!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
