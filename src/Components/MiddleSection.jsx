import { Box, Divider, Stack, Text, Image, SimpleGrid, Flex, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AppContext'
import Fruits from './Fruits'
import Vegetables from './Vegetables'

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Portal
} from '@chakra-ui/react'

const MiddleSection = () => {
    const [data, setData] = useState([])
    const { count, addCount, subCount } = useContext(AuthContext)
    useEffect(() => {
        //axios(`https://fraazo-api.herokuapp.com/api/products?_start=140&_end=142&_limit=2`)
        axios(`https://nice-sandals-pig.cyclic.app/api/products?_start=140&_end=144&_limit=4`)
            .then((res) => {
                //console.log(res)
                setData(res.data)
            })
            .catch((err) => alert("Error"))
    }, [])
    //console.log("final", data)
    return (
        <>
            <Text fontSize='3xl' fontWeight={"light"} textAlign={"start"} pl={10} color={"GrayText"}>BEST DEALS</Text>

            <Divider />
            <br />
            <SimpleGrid columns={[1, 2, 3, 4]} ml={10} spacing={5} >


                {
                    data.map((item) => (
                        <Box boxShadow='xl' p='6' rounded='md' bg='white' key={item.id} >

                            <Stack>
                                <Link to={`/products/${item.id}`}><Image w={250} h={200} bg={"#f9f9f9"} src={item.imgUrl} /></Link>
                                <Text textAlign={"start"} fontSize='sm' color={"GrayText"}>{item.name}</Text>
                                <br />
                                <Flex justifyContent={"space-between"} gap={20}>
                                    <Box w={10}>
                                        <Text textAlign={"start"} fontSize='xs' color={"GrayText"}>{item.packSize}</Text>
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
                                                <Button variant='ghost' colorScheme='white' borderRadius={25} border={"0.5px solid green"} color={"green"} gap={"2"}
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
                    ))}
            </SimpleGrid>
            <br /><br /><br />
            <Flex justifyContent={'center'} gap={10} flexDirection={{ base: "column", md: "row"}}>
                {/* <SimpleGrid columns={[1, 2, 4, 4]}  spacing={1} ml={500}> */}
                    
                    <Link to="/fruits">
                        <Image w={300} h={280} src="https://askmeguy.com/wp-content/uploads/2021/11/Fraazo-Referral-Code.jpg" />
                    </Link>
                    <Link to="/vegetables">
                        <Image w={300} h={280} src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-04/fraazo.jpg" />
                    </Link>
                    
                {/* </SimpleGrid> */}
            </Flex>
            <br />
            <Fruits />
            <br />
            <Vegetables />


        </>
    )
}

export default MiddleSection