import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

function Slider1NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`cursor-pointer absolute top-1/2 right-2.5 w-[30px] h-[30px] rounded-full bg-[#ffffff99]`}
      onClick={onClick}
    >
      <img src="/images/Arrow-slideright.png" alt="" />
    </div>
  );
}

function Slider1PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`cursor-pointer absolute top-1/2 left-2.5 w-[30px] h-[30px] rounded-full bg-[#ffffff99]`}
      onClick={onClick}
    >
      <img src="/images/Arrow-slideleft.png" alt="" />
    </div>
  );
}

function Slider2NextArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={`hidden`}></div>;
}

function Slider2PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={`hidden`}></div>;
}

const MaximizedSlider = ({
  isOpen,
  images,
  onClose,
}: {
  isOpen: boolean;
  images: string[];
  onClose: () => void;
}) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);

  const slider1Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <Slider1NextArrow />,
    prevArrow: <Slider1PrevArrow />,
  };

  const slider2Settings = {
    slidesToShow: images.length,
    nextArrow: <Slider2NextArrow />,
    prevArrow: <Slider2PrevArrow />,
  };

  const handleSlideClick = (index: number) => {
    // Use slickGoTo to navigate to the clicked slide in the first slider
    if (sliderRef1.current) {
      (sliderRef1.current as any).slickGoTo(index);
    }
  };

  if (isOpen)
    return (
      <div className="fixed top-0 left-0 bg-[#000000e6] !h-[100%] !w-[100%] z-[999] ">
        <div className="">
          <div
            className={`cursor-pointer absolute top-2.5 right-2.5 w-[30px] h-[30px] rounded-full bg-[#ffffff99] z-[1000] flex justify-center items-center`}
            onClick={onClose}
          >
            <img
              height={15}
              width={15}
              src="/images/close-circle.png"
              alt="close"
            />
          </div>
          <Slider ref={sliderRef1} asNavFor={nav2} {...slider1Settings}>
            {images.map((item, i: number) => (
              <div className="px-60 h-[85vh]" key={i}>
                <img src={item} alt="" />
              </div>
            ))}
          </Slider>
          <div className="mx-72 mt-8">
            <Slider ref={sliderRef2} asNavFor={nav1} {...slider2Settings}>
              {images.map((item, i: number) => (
                <div
                  className="cursor-pointer py-1 bg-[#ffffffb3] rounded-sm !w-[50px] !h-[50px] !flex items-center"
                  key={i}
                  onClick={() => handleSlideClick(i)}
                >
                  <img src={item} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
};

export default MaximizedSlider;