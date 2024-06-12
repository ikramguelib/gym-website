import React from "react";
import "../../styles/pricing.css";
import Link from "next/link";

const Pricing = () => {
  return (
    <section>
      <div className="container" id="pricing">
        <div className="pricing__top">
          <h2 className="section__title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Here you will find training programs made by specialized coaches{" "}
            <br />
            to help you achieve your goals and build a healthy athletic body .
          </p>
        </div>
        {/**___________pricing wrapper__________ */}
        <div className="pricing__wrapper d-flex flex-wrap flex-md-nowrap gap-3">
          <div
            className="pricing__item w-100 w-md-auto"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Regular Member</h2>
              <h2 className="pricing section__title">
                1500 DA <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Unlimited access to the gym
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Customer support
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Personal trainer
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Standard options
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  2 classes par week
                </li>
              </ul>
              <Link href={"./Pricing"}>
                <button className="register__btn">Join No</button>
              </Link>
            </div>
          </div>

          <div
            className="pricing__item pricing__item-02 w-100 w-md-auto"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Primure Member</h2>
              <h2 className="pricing section__title">
                2000 DA <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Unlimited access to the gym
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Customer support
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Personal trainer
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Standard options
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  3 classes par week
                </li>
              </ul>
              <Link href={"./Pricing"}>
                <button className="register__btn">Join No</button>
              </Link>
            </div>
          </div>

          <div
            className="pricing__item w-100 w-md-auto"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Standard Member</h2>
              <h2 className="pricing section__title">
                2500 DA <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Unlimited access to the gym
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Customer support
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Personal trainer
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Standard options
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="#C65BCF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  5 classes par week
                </li>
              </ul>
              <Link href={"./Pricing"}>
                <button className="register__btn">Join No</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
