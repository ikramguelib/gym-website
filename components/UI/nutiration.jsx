import React from "react";
import "../../styles/nutiration.css";

export default function Nutrition() {
  return (
    <div className="container mt-4">
      <div className="nutrition__top text-center">
        <h2 className="section__title">
          <span className="highlights">Nutrition</span> Program
        </h2>
        <p>
        Ready to tailor your diet to your fitness goals?<br/> Please fill out the form below to customize your nutrition plan.
          <br />
        </p>
      </div>
      <div className="nutirition__form  p-3 rounded">
        <div className="form bg-light" style={{ position: "relative" }}>
          <form>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
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
                  name="lastName"
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
                id="goal"
                name="goal"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="goal" className="form-label">
                Gool
              </label>
              <input
                type="text"
                className="form-control"
                id="goal"
                name="goal"
              />
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
                  name="age"
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
                  name="height"
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
                  name="weight"
                />
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className="register__btn  mt-3 px-5"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
