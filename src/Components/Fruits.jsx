import { Box, Button, Container, Divider, Flex, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import axios from "axios"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle"
import { Navigation } from "swiper";
import { AuthContext } from '../Context/AppContext'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal
  } from '@chakra-ui/react'


const Fruits = () => {
    const [data, setData] = useState([])
    const {count, addCount, subCount} = useContext(AuthContext)
    
    useEffect(() => {
        axios(`https://fraazo-api.herokuapp.com/api/products?_start=89&_end=120&_limit=20`)
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
            .catch((err) => alert("Error"))
    }, [])
    console.log("final", data)
    return (
        <>
            <Text fontSize='3xl' fontWeight={"light"} textAlign={"start"} pl={10}>FRUITS</Text>

            <Divider />
            <br />

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                
                loop={true}
                loopFillGroupWithBlank={true}
                
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                    <Container maxW={"100%"}>
                {
                    data.map((item) => (
                        <SwiperSlide>


                            <Box boxShadow='xl' p='6' rounded='md' bg='white' key={item.id}>
                                
                                    <Stack>
                                    <Link to={`/products/${item.id}`}><Image w={250} h={200} bg={"#f9f9f9"} src={item.imgUrl} /></Link>
                                        <Text textAlign={"start"} fontSize='sm'>{item.name}</Text>
                                        <br />
                                        <Flex justifyContent={"space-around"} gap={20}>
                                            <Box w={10}>
                                                <Text textAlign={"start"} fontSize='xs'>{item.packSize}</Text>
                                                <Text fontWeight={"bold"} textAlign={"start"} fontSize='sm'>₹ {item.price}</Text>
                                            </Box>
                                            {/* <Button variant='ghost' colorScheme='white' borderRadius={25} border={"0.5px solid green"} color={"green"} gap={"2"}
                                            _hover={{ backgroundColor:"green", color:"white"}}>

                                                <Box><FaShoppingCart /></Box>
                                                <Text fontSize='xs'>ADD</Text>
                                            </Button> */}
                                            <Button colorScheme='white'>
                                        <Popover>
                                            <PopoverTrigger>
                                                <Button variant='ghost' colorScheme='white' borderRadius={25} border={"0.5px solid green"} color={"green"} gap={"4"}
                                                    _hover={{ backgroundColor: "green", color: "white" }}>

                                                    <Box><FaShoppingCart /></Box>
                                                    <Text fontSize='xs'>ADD</Text></Button>
                                            </PopoverTrigger>
                                            <Portal >
                                                <PopoverContent bg={"red.50"}>
                                                    <PopoverArrow />
                                                    <PopoverHeader>Add To Cart</PopoverHeader>
                                                    <PopoverCloseButton />
                                                    <PopoverBody>
                                                        <Button colorScheme='green' disabled={count === 0} onClick={subCount}>-</Button>
                                                        <Button colorScheme='white' color={"green"}>{count}</Button>
                                                        <Button colorScheme='green' onClick={addCount}>+</Button>
                                                    </PopoverBody>
                                                </PopoverContent>
                                            </Portal>
                                        </Popover>

                                    </Button>

                                        </Flex>
                                        <br />
                                    </Stack>
                                
                            </Box>


                        </SwiperSlide>
                    ))}
                    </Container>

            </Swiper>

        </>
    )
}

export default Fruits