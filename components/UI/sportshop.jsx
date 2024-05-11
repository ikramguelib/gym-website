import React from 'react';
import { ShopsportData } from "../../public/data/ShopsportData";
import "../../styles/shopsport.css";

const Sportshop = () => {
  return (
    <div className="container ">
      <div className="sportshop__top text-center mt-4">
        <h2 className="section__title">
          <span className="highlights">Sport</span> Shop
        </h2>
        <p>Find your perfect fitness gear with us! <br /></p>
      </div>
      <div className="shop--product mt-5">
        <div className="row">
          {ShopsportData.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card" >
                <img className="card-img-top" src={item.image} alt={item.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text mt-auto "><strong>Price:  {item.price}</strong> </p>
                  <button className="register__btn mt-auto ">Bay</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sportshop;
