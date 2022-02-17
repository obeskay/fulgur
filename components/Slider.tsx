import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import { useState } from "react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/zoom";

const Slider = ({ content, productId = null }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="md:sticky md:top-24">
      <div className="grid gap-6 mb-auto">
        <Swiper
          className="w-full "
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          grabCursor
          centeredSlides
        >
          {content?.map((_, i) => (
            <SwiperSlide key={`${i}`}>
              <motion.div
                className="relative flex rounded pointer-events-none aspect-square "
                layoutId={`producto${productId}-photo${i}`}
              >
                <Image
                  src={`${_.node.url}`}
                  alt={`${_.node.altText}`}
                  height="800"
                  width="800"
                  priority
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="flex w-full"
          modules={[Thumbs]}
          spaceBetween={24}
          slidesPerView={3}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
        >
          {content?.map((_, i) => (
            <SwiperSlide
              key={`${i}`}
              className="relative flex items-center justify-center py-4 bg-gray-100 rounded cursor-pointer dark:bg-gray-700"
            >
              <Image
                src={`${_.node.url}`}
                alt={`${_.node.altText}`}
                height={80}
                width={80}
                quality={10}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
