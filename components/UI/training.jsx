import React from 'react';
import "../../styles/training.css";  

export default function Training() {
  return (
    <div className="container mt-4">
        <div className="training__top text-center">
            <h2 className="section__title">
                <span className="highlights">Training</span> Program
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/></p>
        </div>
        <div className="training__form  p-3 rounded">
            <div className="form bg-light" style={{position : 'relative',zIndex:'2'}} >
                
            
            
            <form > 
                
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" />
                    </div>
                    <div className="col">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="goal" className="form-label">Email</label>
                    <input type="email" className="form-control" id="goal" name="goal" />
                </div>
                <div className="mb-3">
                    <label htmlFor="goal" className="form-label">Gool</label>
                    <input type="text" className="form-control" id="goal" name="goal" />
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="number" className="form-control" id="age" name="age" />
                    </div>
                    <div className="col">
                        <label htmlFor="height" className="form-label">Height</label>
                        <input type="number" className="form-control" id="height" name="height" />
                    </div>
                    <div className="col">
                        <label htmlFor="weight" className="form-label">Weight</label>
                        <input type="number" className="form-control" id="weight" name="weight" />
                    </div>
                </div>
                
                
                <button type="submit" className=" register__btn btn btn-primary mt-5 ">Send</button>
            </form>
        </div>
        </div>
    </div>
  )
}
