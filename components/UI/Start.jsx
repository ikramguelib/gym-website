
import '../../styles/start.css';
import Link from 'next/link';
const Start =()=>{
    return <section>
        <div className="container" id='start'>
            <div className="start__wrapper d-flex flex-wrap flex-md-nowrap ">
                <div className="start__img" data-aos="fade-right" data-aos-duration='1000'>
                    <img src={"./assets/img/trainer.jpg"} className='rounded' alt="" />

                </div>
                <div className="start__content w-100 w-md-auto" data-aos="fade-left" data-aos-duration='1000'>
                    <h2 className='section__title'>
                        Stay home and we will <span className='highlights'>Come to you </span>
                    </h2>
                    <p>
                        In In-home customer training service you can choose your personal coach who will come to your house and train you in addition of bringing sport equipment with her ,and all that in affordable prices.      
                    </p>
                    <Link href={'./Start'}><button className="register__btn  " >Get Started</button></Link>
                </div>
            </div>
        </div>
    </section>
}
export default Start