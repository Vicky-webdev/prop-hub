import { CustomArrowProps } from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <div onClick={onClick} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full hover:scale-110 transition">
    <FaChevronRight className="text-blue-600" />
  </div>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <div onClick={onClick} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full hover:scale-110 transition">
    <FaChevronLeft className="text-blue-600" />
  </div>
);

export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};
