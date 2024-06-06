'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
//import { Autoplay, Pagination } from 'swiper/modules';
import { Autoplay, Pagination, Navigation, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css/bundle';
//import data from './data.json';

const Instagram = () => {
    return (
        <>
            <div className="instagram-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading">
                        <div className="heading5 text-center">Health Conditions!</div>
                    </div>
                    <div className="list-instagram md:mt-10 mt-6">
                        <Swiper
                            direction={'horizontal'}
                            spaceBetween={12}
                            slidesPerView={2}
                            mousewheel={true}   // Enable mousewheel control
                           // modules={[Navigation, Mousewheel]} // Include Mousewheel module
                            scrollbar={{
                                hide: false,
                            }}
                            loop={true}
                            modules={[Navigation, Scrollbar,Mousewheel]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                680: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 16,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 16,
                                },
                            }}
                            className='pb-4'
                        >
                            <SwiperSlide>
                                <Link href={'/shop/filter-canvas'} className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={'/images/instagram/christmas.jpg'}
                                        width={200}
                                        height={200}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                                <div className="product-infor mt-4">
                                        <span className="text-title">Christmas SVG</span>
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'/shop/filter-canvas'} className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={'/images/instagram/lakers.jpg'}
                                        width={200}
                                        height={200}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                                <div className="product-infor mt-4">
                                        <span className="text-title">Los Angeles Lakers</span>
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'/shop/filter-canvas'} className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={'/images/instagram/mothers.jpg'}
                                        width={200}
                                        height={200}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                                <div className="product-infor mt-4">
                                        <span className="text-title">Mothers Day SVG</span>
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'/shop/filter-canvas'} className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={'/images/instagram/patricks.jpg'}
                                        width={200}
                                        height={200}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                                <div className="product-infor mt-4">
                                        <span className="text-title">Fathers Day SVG</span>
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'/shop/filter-canvas'} className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={'/images/instagram/rugby.jpg'}
                                        width={200}
                                        height={200}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                                <div className="product-infor mt-4">
                                        <span className="text-title">Rugby</span>
                                    </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instagram