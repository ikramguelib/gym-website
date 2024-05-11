import React from 'react';
import "../../styles/comment.css";

const Comment = () => {
  return (
    <div className='container'>
      <div className="comment__wrapper d-flex flex-wrap-reverse flex-md-nowrap">
        <div className="comment__img">
          <img src={"./assets/img/think2.webp"} className='rounded' alt="" />
        </div>
        <div className="comment__content">
          <h2 className='section__title'>
            What our clients <span className='highlights'>Say?</span>
          </h2>
          <div className="input-wrapper">
            <input type="text" className="comment__input border rounded" placeholder="Add a comment..." />
            <button className="comment__btn">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#6f55f2">
                <path d="M20 12L4 4l2 8m-2 0l2 8 16-8H6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="reviews" style={{ textAlign: 'right' }}> 
            <button className='px-2 py-1 border rounded text-capitalize' style={{backgroundColor : '#6f55f2',color : 'white'}}>see all comment ...</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;
