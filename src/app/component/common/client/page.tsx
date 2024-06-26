// Testimonials.tsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './client.module.css'

interface client {
  name: string;
  testimonial: string;
  designation: string;
  profileImage: string;
  companyLogo: string;
}

interface TestimonialsProps {
  props?: {
    data: client[];
  };
}

const Testimonials: React.FC<TestimonialsProps> = ({ props }:any) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button type="button" className="slick-arrow slick-prev">Previous</button>,
    nextArrow: <button type="button" className="slick-arrow slick-next">Next</button>,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
          infinite: false
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        {props[0]?.data?.map((testimonial: any) => (
          <div className={styles.clientslideinner} key={testimonial}>
            <div className={styles.textarea}>
              <div className={styles.logobox}>
                <img src={testimonial.companyLogo} alt="logo" />
              </div>
              <div className={styles.textbox}>
                <p>{testimonial.testimonial}</p>
                <h4>{testimonial.name}</h4>
                <h6>{testimonial.designation}</h6>
              </div>
            </div>
            <div className={styles.clientpic}>
              <img src={testimonial.profileImage} alt="client" />
            </div>  
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
