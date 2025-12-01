import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const SimpleSwiper = ({slides}) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      modules={[Pagination, Autoplay]}
      className='w-auto'
      wrapperClass='items-center'
    >
      {
        Object.values(slides).map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className='w-60 sm:w-40 h-32 flex items-center justify-center sm:h-20 p-3 mx-auto aspect-3/1'>
             <img src={slide} className='max-h-16' />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default SimpleSwiper;
