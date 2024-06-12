"use client";
import React, { useState } from "react";
import "../../styles/hometraining.css";
import { testimonialsData } from "../../public/data/TestimonialsData";
import { coaches } from "../../public/data/coaches";

export default function Hometraining() {
  const [selected, setSelected] = useState(0);
  const [selectedCoach, setSelectedCoach] = useState(coaches[0].name);
  const tLength = testimonialsData.length;

  const handlePreviousCoach = () => {
    const newIndex = selected === 0 ? tLength - 1 : selected - 1;
    setSelected(newIndex);
    setSelectedCoach(coaches[newIndex].name);
  };

  const handleNextCoach = () => {
    const newIndex = selected === tLength - 1 ? 0 : selected + 1;
    setSelected(newIndex);
    setSelectedCoach(coaches[newIndex].name);
  };

  return (
    <div className="container">
      <div className="htraining__top text-center">
        <h2 className="section__title">
          Home <span className="highlights">Training</span> Program
        </h2>
        <p>
          Please fill out the form below to get started on your fitness journey
          today!
          <br />
        </p>
      </div>
      <div className="htraining__form p-3 rounded">
        <div className="form bg-light" style={{ position: "relative" }}>
          <form
            action="https://formsubmit.co/f7a1ee08534903dd0a8e158181025c8c"
            method="POST"
          >
            <input type="hidden" name="_template" value="table"></input>
            <input type="hidden" name="_subject" value="New Home Training!"></input>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="FirstName"
                />
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="LastName"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="goal" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="Email"
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="Address"
                />
              </div>
              <div className="col">
                <label htmlFor="idcard" className="form-label">
                  ID card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idcard"
                  name="IdCard"
                />
              </div>
              <div className="col">
                <label htmlFor="address" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="Phone Number"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="Age"
                />
              </div>
              <div className="col">
                <label htmlFor="height" className="form-label">
                  Height
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="height"
                  name="Height"
                />
              </div>
              <div className="col">
                <label htmlFor="weight" className="form-label">
                  Weight
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  name="Weight"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Social status
              </label>
              <input
                type="text"
                className="form-control"
                id="status"
                name="Social status"
              />
            </div>
            <div className="row mb-3">
              <label className="form-label col">
                Do you have sport material :
              </label>
              <div className="col">
                <input
                  className="form-check-input mx-2"
                  type="checkbox"
                  id="materialYes"
                  name="Material"
                  value="Yes"
                />
                <label className="form-check-label" htmlFor="materialYes">
                  Yes
                </label>
              </div>
              <div className="col">
                <input
                  className="form-check-input mx-2"
                  type="checkbox"
                  id="materialNo"
                  name="Material"
                  value="No"
                />
                <label className="form-check-label" htmlFor="materialNo">
                  No
                </label>
              </div>
            </div>
            <div className="row mb-3">
              <label className="form-label col">Pricing</label>
              <div className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="oneMonth"
                    name="Pricing"
                    value="4 sessions/month , 6000 DA"
                  />
                  <label
                    className="form-check-label d-block"
                    htmlFor="oneMonth"
                  >
                    4 sessions/month
                  </label>
                  <div className="text-muted">6000 DA</div>
                </div>
              </div>
              <div className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="twoMonth"
                    name="Pricing"
                    value="8 sessions/month , 10000 DA"
                  />
                  <label
                    className="form-check-label d-block"
                    htmlFor="twoMonth"
                  >
                    8 sessions/month
                  </label>
                  <div className="text-muted">10000 DA</div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="goal" className="form-label">
                Goal
              </label>
              <input
                type="text"
                className="form-control"
                id="goal"
                name="Goal"
              />
            </div>
            <input type="hidden" name="SelectedCoach" value={selectedCoach} />

            <label htmlFor="">Choose your coach:</label>

            <div className="coachs mt-4 d-flex flex-wrap-reverse flex-md-nowrap">
              <div className="left-tt">
                <h2 name="Coach">{coaches[selected].name}</h2>
                <ul>
                  {coaches[selected].review.split(" - ").map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
                <h5>
                  {coaches[selected].name} - {coaches[selected].status}
                </h5>
              </div>
              <div className="right-tt">
                <div></div>
                <div></div>
                <img src={coaches[selected].image} alt="" />
                
              </div>
              
            </div>
            <div className="arrowss mt-1 d-flex justify-content-center align-items-center">
                  <svg
                    onClick={handlePreviousCoach}
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12H18M6 12L11 7M6 12L11 17"
                      stroke="#6f55f2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    onClick={handleNextCoach}
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      stroke="#6f55f2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

            <button type="submit" className="register__btn mt-5">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
