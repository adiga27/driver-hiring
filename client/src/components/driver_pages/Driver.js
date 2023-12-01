import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div className="heading-box">
          <div className="heading-img__box">
            <img
              src={`../img/drivers/${
                driver.photo ? driver.photo : 'default.jpg'
              }`}
              alt={`${driver?.name}`}
              className="heading-img"
            />
          </div>
          <h1 className="heading-primary">
            <span>{driver.name}</span>
          </h1>
        </div>
        <div className="overview-box">
          <h2 className="overview-heading">Details</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            magni, accusamus nesciunt sed labore animi, consequuntur consequatur
            facere ab quis eum? Non quam laborum dolorem temporibus!
            Perspiciatis ab cupiditate optio.
          </p>
          <div className="overview-driver-flex ">
            <ion-icon name="location-outline"></ion-icon>
            <span>{driver.place}</span>
          </div>
          <div className="overview-driver-flex ">
            <ion-icon name="car-sport-outline"></ion-icon>
            <span>{driver.drives}</span>
          </div>
          <div className="overview-driver-flex ">
            <ion-icon name="card-outline"></ion-icon>
            <span>₹{driver.price}/minimum</span>
          </div>
          <div className="overview-driver-flex ">
            <ion-icon name="star-half-outline"></ion-icon>
            <span>{driver.rating}/5</span>
          </div>
          <div className="overview-driver-flex ">
            <ion-icon name="cash-outline"></ion-icon>
            <span>₹{driver.pricePerKm}/km</span>
          </div>
        </div>
      </section>
      <section className="section-reviews">
        <h2 className="review-heading">Reviews</h2>
        <div className="reviews"></div>
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
