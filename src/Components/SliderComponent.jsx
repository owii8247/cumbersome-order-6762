import React from 'react'
import { Flex, Image , Stack, Divider} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles.css';
import "swiper/css/bundle"


import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

const SliderComponent = () => {
    return (
        <>
            
            <Flex justifyContent={"space-between"} p={10} gap={40}>
                
                <Swiper
                    
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
                    <Link to="/products">
                        <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/4985.png" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/4986.png" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/4820.png" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/4923.png" />
                        </Link>
                    </SwiperSlide>
                    
                    
                </Swiper>
                
                <Stack mr={10}>
                        <Link to="/fruits">
                        <Image w={400} h={90} src="https://webasset.fraazo.com/production/Web1.ab035db9ab9fe7b21326.png" />
                        </Link>
                        <br />
                    
                        <Link to="/vegetables">
                        <Image w={400} h={90} src="https://webasset.fraazo.com/production/Web2.3f0b675c24dcb702b13d.png" />
                        </Link>
                        <br />
                        <Link to="/vegetables">
                        <Image w={400} h={90} src="https://webasset.fraazo.com/production/Web3.e2495d9eb26022ba0363.png" />
                        </Link>
                        <br />
                </Stack>
            </Flex>
            <Divider />
        </>
    )
}

export default SliderComponent