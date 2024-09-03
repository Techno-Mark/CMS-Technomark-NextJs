import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./client.module.css";
import Image from "next/image";

interface ClientItem {
  name?: string;
  testimonial?: string;
  designation?: string;
  profileImage?: string;
  companyLogo?: string;
}

interface ClientData {
  items: ClientItem[];
  keyMultiple: number;
}

interface TestimonialsProps {
  props: ClientData[];
}

const Client: React.FC<TestimonialsProps> = ({ props }) => {
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
          const { items } = clientData;
          const name = items.find((item) => item.name)?.name || "Anonymous";
          const testimonial =
            items.find((item) => item.testimonial)?.testimonial ||
            "No testimonial available.";
          const designation =
            items.find((item) => item.designation)?.designation ||
            "Designation not available.";
          const profileImage =
            items.find((item) => item.profileImage)?.profileImage || "";
          const companyLogo =
            items.find((item) => item.companyLogo)?.companyLogo || "";

          return (
            <div className={styles.clientslideinner} key={index}>
              <div className={styles.textarea}>
                <div className={styles.logobox}>
                  {companyLogo && (
                    <Image
                      src={companyLogo}
                      alt="Company Logo"
                      width={200}
                      height={45}
                    />
                  )}
                </div>
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

export default Client;
