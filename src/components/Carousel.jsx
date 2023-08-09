import React, { useState, useEffect } from 'react';
import Arrow from './Arrow'

const photosData = [
  {
    id: 1,
    name: 'Cambodia',
    url: 'https://i.im.ge/2022/08/31/OE8zGY.cambodia.png',
    content: 'Siem Reap',
  },
  {
    id: 2,
    name: 'Indonesia',
    url: 'https://i.im.ge/2022/08/31/OE8kcM.baliTemple.png',
    content: 'Bali',
  },
  {
    id: 3,
    name: 'Tahiti',
    url: 'https://i.im.ge/2022/08/31/OE8fih.boraBora.png',
    content: 'Bora Bora Island',
  },
  {
    id: 4,
    name: 'Venezuela',
    url: 'https://i.im.ge/2022/08/31/OE8VX8.canaimaBolivar.png',
    content: 'Bolívar',
  },
      {id: 5,
    name: 'Japan',
    url: 'https://i.im.ge/2022/08/31/OE8ZKX.japanHonshuIsland.png',
    content: 'Honshu Island',
  },
  {
    id: 6,
    name: 'Maldives Republic',
    url: 'https://i.im.ge/2022/08/31/OE8p7D.maldives.png',
    content: 'Maldives Islands',
  },
  {
    id: 7,
    name: 'Argentina',
    url: 'https://i.im.ge/2022/08/31/OE8vA4.peritoMorenoCalafate.png',
    content: 'El Calafate',
  },
  {
    id: 8,
    name: 'Australia',
    url: 'https://i.im.ge/2022/08/31/OE8JpC.sidney.png',
    content: 'Sydney',
  },
    {
    id: 9,
    name: 'Mexico',
    url: 'https://i.im.ge/2022/08/31/OE842q.tenochtitlan.png',
    content: 'Tenochtitlan',
  },
        {
    id: 10,
    name: 'Chile',
    url: 'https://i.im.ge/2022/08/31/OE8Bwp.torresDelPaineMagallanesRegion.png',
    content: 'Magallanes Region',
  },
            {
    id: 11,
    name: 'Mexico',
    url: 'https://i.im.ge/2022/08/31/OE842q.tenochtitlan.png',
    content: 'Tenochtitlan',
  },
                {
    id: 12,
    name: 'Africa',
    url: 'https://i.im.ge/2022/08/31/OE8GKP.victoriaFallsZambia.png',
    content: 'Zambia',
  },

];
const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [];
  for (let i = 0; i < photosData.length; i += 4) {
    slides.push(photosData.slice(i, i + 4));
  }

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

return (
  <div className="relative">
      {/* Carousel items */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative ${
              index === currentSlide
                ? 'transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                : 'hidden'
            }`}
            data-te-carousel-item
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                {slide.slice(0, 2).map((photo) => (
                  <div key={photo.id} className="photo relative flex-1">
                    <img
                      src={photo.url}
                      alt={photo.name}
                      className="block w-full h-[200px]"
                    />
                    <div className="absolute inset-x-0 bottom-5 py-5 text-center text-white">
                      <h5 className="text-xl">{photo.name}</h5>
                      <p>{photo.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {slide.slice(2, 4).map((photo) => (
                  <div key={photo.id} className="photo relative flex-1">
                    <img
                      src={photo.url}
                      alt={photo.name}
                      className="block w-full h-[200px]"
                    />
                    <div className="absolute inset-x-0 bottom-5 py-5 text-center text-white">
                      <h5 className="text-xl">{photo.name}</h5>
                      <p>{photo.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-[2]"
        onClick={() => {
          prevSlide();
          clearInterval(interval);
          const newInterval = setInterval(nextSlide, 3000);
          setInterval(newInterval);
        }}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-[2]"
        onClick={() => {
          nextSlide();
          clearInterval(interval);
          const newInterval = setInterval(nextSlide, 3000);
          setInterval(newInterval);
        }}
      >
        &gt;
      </button>

{/* Slide Index */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setCurrentSlide(index);
                clearInterval(interval);
                const newInterval = setInterval(nextSlide, 3000);
                setInterval(newInterval);
              }}
              className={`box-content h-2 w-8 flex-initial cursor-pointer rounded-full ${
                currentSlide === index
                  ? 'bg-white'
                  : 'bg-gray-300'
              } transition-colors duration-300`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;