import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const carouselItems = [
  {
    id: 1,
    title: 'Trouvé grâce à notre TattooFinder',
    image: '/tatoos/tatoo9.webp',
    link: '/tattoo-finder',
  },
  {
    id: 2,
    title: 'Tatouages de mangas !',
    image: '/tatoos/jap.webp',
    link: '/tattoo-finder',
  },
  {
    id: 3,
    title: 'Inspiration pour vos prochains tattoos !',
    image: '/tatoos/jap3.webp',
    link: '/tattoo-finder',
  },
  // Ajoutez plus d'éléments ici
];

const ImageTextCarousel = () => {
  return (
    <div className="my-8 flex justify-center">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg" style={{ maxWidth: '800px' }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {carouselItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-10 p-4 rounded-lg">
                  <h2 className="text-xl font-bold text-white mb-4">{item.title}</h2>
                  <a href={item.link}>
                    <button className="bg-white text-black px-4 py-2 rounded shadow">Voir notre TattooFinder</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageTextCarousel;