import React from 'react';
import '../../styles/pricing.css';
import Link from 'next/link';

const Pricing = ()=>{
    return <section>
        <div className="container" id='pricing'>
            <div className="pricing__top">
                <h2 className="section__title">Gym <span 
                className='highlights'>Pricing</span> Plan</h2>
                <p>Here you will find training programs made by specialized coaches <br/>
                to help you achieve your goals and build a healthy athletic body .</p>
            </div>
            {/**___________pricing wrapper__________ */}
            <div className="pricing__wrapper d-flex flex-wrap flex-md-nowrap gap-3">
                <div className="pricing__item w-100 w-md-auto">
                    <div className="pricing__card-top">
                        <h2 className='section__title'>Regular Member</h2>
                        <h2 className="pricing section__title">1500 DA <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>2 classes par week</li>
                        </ul>
                        <Link href={"./Pricing"}><button className='register__btn'>Join No</button></Link>
                    </div>
                </div>


                <div className="pricing__item pricing__item-02 w-100 w-md-auto">
                    <div className="pricing__card-top">
                        <h2 className='section__title'>Primure Member</h2>
                        <h2 className="pricing section__title">2000 DA <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>3 classes par week</li>
                        </ul>
                        <Link href={"./Pricing"}><button className='register__btn'>Join No</button></Link>
                    </div>
                </div>


                <div className="pricing__item w-100 w-md-auto">
                    <div className="pricing__card-top">
                        <h2 className='section__title'>Standard Member</h2>
                        <h2 className="pricing section__title">2500 DA <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>5 classes par week</li>
                        </ul>
                        <Link href={"./Pricing"}><button className='register__btn'>Join No</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Pricing;