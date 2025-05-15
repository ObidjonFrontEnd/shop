'use client'

import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import { Heart, Scale } from 'lucide-react'
import { ProductItem } from '@/app/fillter/components/cards'

interface Props {
  productData: ProductItem
}

const ProductImages = ({ productData }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const mainSwiperRef = useRef<any>(null)

  const images = Array(5).fill('/product.png') // real image data: productData.images

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index)
    mainSwiperRef.current?.swiper.slideTo(index)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">

      <div className="flex md:flex-col items-center flex-row gap-2 md:w-[80px] w-full overflow-x-auto md:overflow-visible">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-[60px] h-[80px] flex justify-center items-center rounded-[6px] cursor-pointer
              ${activeIndex === index ? 'ring-2 ring-blue-500' : 'bg-[#EBEFF3]'}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={img}
              alt={`thumb-${index}`}
              width={50}
              height={50}
              className="rounded-lg border object-contain"
            />
          </div>
        ))}
      </div>


      <div className="relative w-full max-w-[500px] h-[300px] sm:h-[410px] bg-[#f4f4f4] rounded-lg">
        <Swiper
          modules={[Navigation]}
          navigation
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-full"
          ref={mainSwiperRef}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`product-${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Action icons */}
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <Scale className="text-gray-500 hover:text-black cursor-pointer" />
          <Heart className="text-gray-500 hover:text-red-500 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default ProductImages
