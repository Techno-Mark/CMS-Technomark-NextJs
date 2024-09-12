import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./team.module.css";
import Image from "next/image";

interface TeamItem {
  name?: string;
  description?: string;
  position?: string;
  profileImage?: string;
}

interface TestimonialsProps {
  props: TeamItem[];
}

const Team: React.FC<TestimonialsProps> = ({ props }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <div className={styles.clientcontainer}>
      <Slider {...settings}>
        {props.map((clientData, index) => {
          const items = clientData;
          const name = items?.name || "";
          const testimonial = items?.description || "";
          const designation = items?.position || "";
          const profileImage = items?.profileImage || "";

          return (
            <div className={styles.clientslideinner} key={index}>
              <div className={styles.textarea}>
                <div className={styles.textbox}>
                  <p>{testimonial}</p>
                  <h4>{name}</h4>
                  <h6>{designation}</h6>
                </div>
              </div>
              <div className={styles.clientpic}>
                {profileImage && (
                  <Image
                    src={profileImage}
                    width={420}
                    height={560}
                    alt={`Profile picture of ${name}`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Team;
