import React from 'react';
import '../../styles/exercises.css';
import Link from 'next/link';


const Exercises=()=>{
    return <section>
        <div className="container exercise__container" id='services'>
            <div className="exercise__top">
                <h2 className="section__title">
                    Our <span className="highlights">Services</span>
                </h2>
                <p>
                Explore our personalized coaching services designed <br/>to help you achieve your fitness goals.
                </p>
            </div>
            {/*______________ exercise list ____________*/}
            <div className='yahia_part bg-light d-flex flex-md-nowrap flex-wrap justify-content-between gap-3 align-items-center py-5 px-3 rounded'>
                
                <div className='partOne d-flex gap-4 align-items-center w-md-auto w-100'>
                    <Link href={'./Nutiration'}>
                        <img src={'./assets/img/nutiration.jpg'} className='rounded' alt="" loading='lazy'/>
                    </Link>
                    <div>
                        <Link href={'./Nutiration'} style={{textDecoration : 'none' , color : "black"}}>
                         <h5  className='fw-bold'>Nutiration Programs</h5>
                        </Link>
                        <p>
                             In this service you will find scientific nutrition programs prepared by experts ,
                             to help stay healthy, gain weight and lost weight.
                        </p>
                    </div>
                </div>

                <div className='partTwo d-flex gap-4 align-items-center w-md-auto w-100'>
                    <Link href={'./'}>
                        <img src={"./assets/img/cources.jpg"} className='rounded' alt="" loading='lazy'/>
                    </Link>
                    <div>
                        <Link href={'./'} style={{textDecoration : 'none' , color : "black"}}>
                         <h5  className='fw-bold'>Coursec</h5>
                        </Link>
                        <p>
                             In this service you will find scientific nutrition programs prepared by experts ,
                             to help stay healthy, gain weight and lost weight.
                        </p>
                    </div>
                </div>

                <div className='partThree d-flex gap-4 align-items-center w-md-auto w-100'>
                    <Link href={'./Sportshop'}>
                        <img src={"./assets/img/storshop.jpg"} className='rounded' alt="" loading='lazy'/>
                    </Link>
                    <div>
                        <Link href={'./Sportshop'} style={{textDecoration : 'none' , color : "black"}}>
                         <h5 className='fw-bold'>Sport Shop</h5>
                        </Link>
                        <p>
                             In this service you will find scientific nutrition programs prepared by experts ,
                             to help stay healthy, gain weight and lost weight.
                        </p>
                    </div>
                </div>

            </div>

        </div>
        
    </section>
}
export default Exercises