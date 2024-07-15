import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from './client.module.css'
import Image from 'next/image';

interface client {
  name: string;
  testimonial: string;
  designation: string;
  profileImage: string;
  companyLogo: string;
}

 interface TestimonialsProps {
   props?: any
 }

const Client: React.FC<TestimonialsProps> = ({ props }:any) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
          infinite: false,
        }
      }
    ]
  };

  return (
      <Slider {...settings}>
        {props?.data?.map((testimonial: any, index: any) => (
          <div className={styles.clientslideinner} key={index}>
            <div className={styles.textarea}>
              <div className={styles.logobox}>
                <Image src={testimonial.companyLogo} alt="logo" width={200} height={45} />
              </div>
              <div className={styles.textbox}>
                <p>{testimonial.testimonial}</p>
                <h4>{testimonial.name}</h4>
                <h6>{testimonial.designation}</h6>
              </div>
            </div>
            <div className={styles.clientpic}>
              <Image src={testimonial.profileImage} width={420} height={560} alt="client"/>
            </div>  
          </div>
        ))}
      </Slider>
  );
};

export default Client;
