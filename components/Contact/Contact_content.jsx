'use client'
import React, { useState } from "react";
import "../../styles/contact.css";
import { Oval } from 'react-loader-spinner';

export default function ContactContent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    setIsLoading(true);
  };

  return (
    <div className="container">
      <div className="contact__top">
        <h2 className="section__title">
          Contact <span className="highlights"> Us</span>
        </h2>
        <p>
          Reach Out for More Information
        </p>
      </div>
      <div className="contact__form mb-5">
        <div className="form bg-light" style={{ position: "relative" }}>
          <form
            action="https://formsubmit.co/f7a1ee08534903dd0a8e158181025c8c"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
              ></textarea>
            </div>
            <input type="hidden" name="_subject" value="New Contact!"></input>
            <input type="hidden" name="_template" value="box"></input>
            <input type="hidden" name="_captcha" value="false"></input>

            <div className="call d-flex justify-content-center align-items-center mt-3" style={{ color: "#C65BCF" }}>
              <p>Or Call Us On </p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginRight: '10px' }}
              >
                <path
                  d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                  stroke="#54B435"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>031 726720</p>
            </div>

            {isLoading && (
              <div className="d-flex justify-content-center align-items-center mt-3">
                <Oval
                  height={50}
                  width={50}
                  color="#c62acb"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#c62acb"
                  strokeWidth={4}
                  strokeWidthSecondary={4}
                />
              </div>
            )}

            <div className="d-flex justify-content-center align-items-center">
              <button type="submit" className="register__btn mt-5 px-5" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
