import React from 'react'
import { SimpleGrid, Flex, Box, Image , Container, Stack, Divider} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles.css';
import "swiper/css/bundle"


import { Autoplay, Pagination, Navigation } from "swiper";

const SliderComponent = () => {
    return (
        <>

            <Flex justifyContent={"space-between"}>

                <Swiper
                    // spaceBetween={5}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"

                    slidesPerView={1}

                    loop={true}
                    loopFillGroupWithBlank={true}


                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/4985.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/4986.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/4820.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/4923.png" />
                    </SwiperSlide>
                </Swiper>

                <Stack mr={10}>
                    
                        <Image w={"380"} h={"90"} src="https://webasset.fraazo.com/production/Web1.ab035db9ab9fe7b21326.png" />
                        <br />
                    
                    
                        <Image w={"380"} h={"90"} src="https://webasset.fraazo.com/production/Web2.3f0b675c24dcb702b13d.png" />
                        <br />
                    
                        <Image w={"380"} h={"90"} src="https://webasset.fraazo.com/production/Web3.e2495d9eb26022ba0363.png" />
                        <br />
                </Stack>
            </Flex>
            <br />
            <Divider />
        </>
    )
}

export default SliderComponent