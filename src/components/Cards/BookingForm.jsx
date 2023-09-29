import React from "react";

const BookingForm = () => {
  return (
    <div className="booking">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="booking-content">
              <div className="section-header">
                <p>Book A Event</p>
                <h2>Book Your Event For Private Dinners & Happy Hours</h2>
              </div>
              <div className="about-text">
                <p>
                  Ramu ki Sabji was born out of a passion for sharing the
                  diverse and vibrant flavors of Indian cuisine with people
                  around the world. The founder, Mr. Ram, a skilled chef with
                  years of experience in preparing Indian delicacies, envisioned
                  a service that could bring the essence of traditional Indian
                  meals to the doorstep of customers near and far.
                </p>
                <p>
                  The heart and soul of Ramu ki Sabji lie in its commitment to
                  providing an authentic taste that replicates the home-cooked
                  goodness of Indian dishes. The team of expert chefs takes
                  great pride in using fresh, locally sourced ingredients and
                  traditional cooking methods, ensuring that each dish retains
                  its original flavors and aromas.
                </p>
                <p>
                  Paneer Sabji, a vegetarian delight featuring cottage cheese
                  cooked with a blend of aromatic spices and herbs, holds a
                  special place in their menu, capturing the essence of Indian
                  gastronomy.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="booking-form">
              <form>
                <div className="control-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <i className="far fa-user"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control-group">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <i className="far fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile"
                      required="required"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <i className="fa fa-mobile-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control-group">
                  <div
                    className="input-group date"
                    id="date"
                    data-target-input="nearest"
                  >
                    <input
                      type="date"
                      className="form-control datetimepicker-input"
                      placeholder="Date"
                      data-target="#date"
                      data-toggle="datetimepicker"
                    />
                    <div
                      className="input-group-append"
                      data-target="#date"
                      data-toggle="datetimepicker"
                    >
                      <div className="input-group-text">
                        {/* <i className="far fa-calendar-alt"></i> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control-group">
                  <div
                    className="input-group time"
                    id="time"
                    data-target-input="nearest"
                  >
                    <input
                      type="time"
                      className="form-control datetimepicker-input"
                      placeholder="Time"
                      dataTarget="#time"
                      dataToggle="datetimepicker"
                    />
                    <div
                      className="input-group-append"
                      data-target="#time"
                      data-toggle="datetimepicker"
                    >
                      <div className="input-group-text">
                        {/* <i className="far fa-clock"></i> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control-group">
                  <div className="input-group">
                    <select
                      className="custom-select form-control"
                      defaultValue="1"
                    >
                      <option value="1">10-20 Guests</option>
                      <option value="2">20-30 Guests</option>
                      <option value="3">30-40 Guests</option>
                      <option value="4">50-70 Guests</option>
                      <option value="5">70-80 Guests</option>
                      <option value="6">100+ Guests</option>
                      </select>

                    <div className="input-group-append">
                      <div className="input-group-text">
                        <i className="fa fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn custom-btn" type="submit">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
