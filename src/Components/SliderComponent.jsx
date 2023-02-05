import React from 'react'
import { Flex, Image , Stack, Divider, Box} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles.css';
import "swiper/css/bundle"


import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import styles from "./SliderComponent.module.css"
const SliderComponent = () => {
    return (
        <>
            
            <Flex justifyContent={"space-between"} p={10} gap={40}>
                <Box w={700} h={350} className={styles.slider}>
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
                    
                    
                    {/* <SwiperSlide> */}
                        
                    {/* <Link to="/products">
                        <Image src="https://assets.entrepreneur.com/content/3x2/2000/1625220693-nrd-D6Tu-L3chLE-unsplash.jpg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://p0.piqsels.com/preview/350/716/16/bunch-of-vegetables.jpg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://pbs.twimg.com/media/EWihQMMU0AYlDHD.jpg" />
                        </Link>
                    </SwiperSlide> */}

                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://referralcode.in/wp-content/uploads/2020/10/Banner_Fraazo.png" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://referralcode.in/wp-content/uploads/2020/10/Banner_Fraazo.png" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://referralcode.in/wp-content/uploads/2020/10/Banner_Fraazo.png" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://referralcode.in/wp-content/uploads/2020/10/Banner_Fraazo.png" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://referralcode.in/wp-content/uploads/2020/10/Banner_Fraazo.png" />
                        </Link>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                    <Link to="/products">
                        <Image src="https://pbs.twimg.com/media/EWihQMMU0AYlDHD.jpg" />
                        </Link>
                    </SwiperSlide> */}
                    
                    
                </Swiper>
                </Box> 
                <Box className={styles.farm}>
                <Stack mr={10}>
                        <Link to="/fruits">
                        <Image w={400} h={90} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7B8F1U75-fRZBV8pC6IkDTPaOm2-IcnY7hK4ojBLJIk1fPSiA_R9P2pYYCNTQocinPlU&usqp=CAU" />
                        </Link>
                        <br />
                    
                        <Link to="/vegetables">
                        <Image w={400} h={90} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3haHIyMz1HwsdTeh4b9CFqrLYHoNN92skXXhPZDB1Nr_cAN5w_C2flSq8kpaJm4CnzD4&usqp=CAU" />
                        </Link>
                        <br />
                        <Link to="/vegetables">
                        <Image w={400} h={90} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavioFtspdzG1RxjvZITR6kYlR-KQGg5hcPSSW20yl_9kRWu6-Y73zRpezEiXfaYSCcnY&usqp=CAU" />
                        </Link>
                        <br />
                </Stack>
                </Box>
            </Flex>
            <Divider />
        </>
    )
}

export default SliderComponent