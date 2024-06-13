'use client'
import React from "react";
import { ReactTyped } from "react-typed";

import { useRouter } from "next/navigation"
import "../../styles/hero.css";
import Link from "next/link";
const Hero = () => {
    const router = useRouter();
  return (
    <section>
      <div className="container">
        <div className="hero__wrapper d-flex flex-wrap flex-md-nowrap justify-content-md-start justify-content-center gap-5">
          {/**________hero content______________ */}

          <div className="hero__content" >
            <h2 className="section__title"style={{height:"27%"}}>
                 
              <span className="highlights">Exercise is </span> 
                <ReactTyped strings={['the key  to a Healthy life style']} typeSpeed={55}  loop />
            </h2>

            <p>
              Unlock your full potential with tailored coaching plans designed{" "}
              <br />
              to boost your fitness and enhance your well-being
            </p>

            <div className="hero__btns">
              <Link href={"./Start"}>
                <button className="register__btn  ">Get Started</button>
              </Link>
              <button
                className="watch__btn btn btn-light py-2"
                onClick={() =>
                  router.push("https://www.youtube.com/watch?v=JwTWvK0iaB8")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  width={30}
                  height={30}
                  viewBox="0 0 1920 1920"
                >
                  <path
                    d="M694.018 926.244c-27.296 18.796-27.3 49.269 0 68.067l509.836 351.074c27.296 18.797 49.424 7.18 49.424-25.959V601.13c0-33.133-22.125-44.757-49.424-25.959L694.018 926.244Z"
                    fill-rule="evenodd"
                  />
                </svg>
                watch video
              </button>
            </div>
          </div>
          {/**___________hero img__________________ */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={"./assets/img/gym-02.png"} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="heart__rate" data-aos="fade-right" data-aos-duration="1100">
                <h5>Heart Rate</h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2.34594 11.2501C2.12458 10.5866 2 9.92019 2 9.26044C2 3.3495 7.50016 0.662637 12 5.49877C16.4998 0.662637 22 3.34931 22 9.2604C22 9.92017 21.8754 10.5866 21.6541 11.2501H18.6361L18.5241 11.25C17.9784 11.2491 17.4937 11.2483 17.0527 11.4447C16.6116 11.6411 16.2879 12.002 15.9233 12.4084L15.8485 12.4918L14.8192 13.6354C14.7426 13.7205 14.68 13.79 14.6247 13.8493C14.5723 13.7879 14.5128 13.7159 14.4401 13.6277L10.8889 9.32318C10.7493 9.15391 10.6 8.97281 10.454 8.8384C10.2839 8.68188 10.0325 8.50581 9.68096 8.4847C9.32945 8.46359 9.05875 8.60829 8.87115 8.74333C8.71006 8.8593 8.54016 9.02123 8.38136 9.17258L6.85172 10.6294C6.37995 11.0787 6.28151 11.1553 6.17854 11.1964C6.07557 11.2376 5.9515 11.2501 5.3 11.2501H2.34594Z"
                    fill="#FF7ED4"
                  />
                  <path
                    d="M3.00441 12.7501C4.38539 15.312 6.93029 17.7142 8.96173 19.3707C10.2937 20.4569 10.9597 21 12 21C13.0403 21 13.7063 20.4569 15.0383 19.3707C17.0697 17.7142 19.6146 15.312 20.9956 12.7501H18.6361C17.9119 12.7501 17.7746 12.7652 17.6629 12.815C17.5513 12.8647 17.4481 12.9567 16.9634 13.4952L15.9086 14.6672C15.7507 14.8428 15.5839 15.0283 15.4235 15.1628C15.2384 15.318 14.9627 15.4921 14.5896 15.4841C14.2166 15.476 13.9488 15.2904 13.7704 15.1274C13.616 14.9862 13.4574 14.7938 13.3074 14.6118L9.75487 10.3057C9.68734 10.2239 9.63239 10.1573 9.5839 10.1005C9.52897 10.1511 9.46645 10.2106 9.38961 10.2838L7.81346 11.785C7.4575 12.125 7.14165 12.4267 6.73563 12.5892C6.32961 12.7516 5.89282 12.7509 5.40054 12.7502L3.00441 12.7501Z"
                    fill="#FF7ED4"
                  />
                </svg>
                <h5>2567 BPM</h5>
              </div>

              <div className="gym__location" data-aos="fade-left" data-aos-duration="1100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                    stroke="#FF7ED4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                    stroke="#FF7ED4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h5>
                Bring the gym <br /> to your home{" "}
                </h5>
              </div>

              <div className="dumble__icon" data-aos="fade-down" data-aos-duration="1100">
                <img src={"./assets/img/dumble.png"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
