"use client"
import React,{useState} from 'react';
import "../../styles/hometraining.css"
import { testimonialsData } from '../../public/data/TestimonialsData';
import {coaches} from '../../public/data/coaches';


export default function Hometraining() {
    const [selected,setSelected] = useState(0);
    const tLength=testimonialsData.length;
  return (
    <div className="container">
        <div className="htraining__top text-center">
            <h2 className="section__title">
              Home <span className="highlights">Training</span> Program
            </h2>
            <p>Please fill out the form below to get started on your fitness journey today!<br/></p>
    </div>
    <div className="htraining__form  p-3 rounded">
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
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="firstName" className="form-label">
                  Address
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
                  ID card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
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
            <div className="mb-3">
              <label htmlFor="goal" className="form-label">
                Social status
              </label>
              <input
                type="text"
                className="form-control"
                id="goal"
                name="goal"
              />
            </div>
            <div className="row mb-3">
              <label className="form-label col">Do you have sport material :</label>
              <div className="col">
                <input
                  className="form-check-input mx-2"
                  type="checkbox"
                  id="oneMonth"
                  name="programs"
                  value="1 month"
                />
                <label className="form-check-label" htmlFor="oneMonth">
                  Yes
                  
                </label>
              </div>
              <div className="col">
                <input
                  className="form-check-input mx-2"
                  type="checkbox"
                  id="twoMonth"
                  name="programs"
                  value="2 months"
                />
                <label className="form-check-label" htmlFor="twoMonth">
                  NO
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
            name="programs"
            value="1 month"
          />
          <label className="form-check-label d-block" htmlFor="oneMonth">
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
            name="programs"
            value="2 months"
          />
          <label className="form-check-label d-block" htmlFor="twoMonth">
            8 sessions/month
          </label>
          <div className="text-muted">10000 DA</div>
        </div>
      </div>
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

             <label htmlFor="">Choise your cooch :</label>

    <div className="coachs mt-4 d-flex flex-wrap-reverse flex-md-nowrap">
      <div className="left-tt">
        <h2>{coaches[selected].name}</h2>
        <span>{coaches[selected].review}</span>
        <h5>
          {coaches[selected].name}
          {" "}
          - {coaches[selected].status}
        </h5>
      </div>
      <div className="right-tt">
        <div></div>
        <div></div>
        <img src={coaches[selected].image} alt="" />
        <div className="arrowss mt-3">
        <svg 
        onClick={() => {
          selected===0
          ? setSelected(tLength-1)
          : setSelected((prev) => prev-1)
        }}
         xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none">
            <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#6f55f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg 
        onClick={() => {
          selected===tLength-1
         ? setSelected(0)
          : setSelected((prev) => prev+1)
        }}
        xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none">
            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#6f55f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      </div>
    </div>


            <button
              type="submit"
              className=" register__btn  mt-5 "
            >
              Send
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
