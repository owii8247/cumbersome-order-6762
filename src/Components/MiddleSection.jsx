import { Box, Container, Divider, Stack, Text, Image, SimpleGrid, Flex, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import Fruits from './Fruits'
import Vegetables from './Vegetables'


const MiddleSection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios(`https://fraazo-api.herokuapp.com/api/products?_start=140&_end=142&_limit=2`)
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
            .catch((err) => alert("Error"))
    }, [])
    console.log("final", data)
    return (
        <>
            <Text fontSize='3xl' fontWeight={"light"} textAlign={"start"} pl={10}>BEST DEALS</Text>

            <Divider />
            <br />
            <SimpleGrid columns={[1, 2, 4, 4]} ml={10} spacing={5} >


                {
                    data.map((item) => (
                        <Box boxShadow='xl' p='6' rounded='md' bg='white' key={item.id} >
                        
                            <Stack>
                            <Link to={`/products/${item.id}`}><Image w={250} h={200} bg={"#f9f9f9"} src={item.imgUrl} /></Link>
                                <Text textAlign={"start"} fontSize='sm'>{item.name}</Text>
                                <br />
                                <Flex justifyContent={"space-between"} gap={20}>
                                    <Box w={10}>
                                        <Text textAlign={"start"} fontSize='xs'>{item.packSize}</Text>
                                        <Text fontWeight={"bold"} textAlign={"start"} fontSize='sm'>₹ {item.price}</Text>
                                    </Box>
                                    <Button variant='ghost' colorScheme='white' borderRadius={25} border={"0.5px solid green"} color={"green"} gap={"2"}
                                    _hover={{ backgroundColor:"green", color:"white"}}>

                                        <Box><FaShoppingCart /></Box>
                                        <Text fontSize='xs'>ADD</Text>
                                    </Button>

                                </Flex>
                                <br />
                            </Stack>
                        
                    </Box>
                    ))}
            </SimpleGrid>
            <br /><br /><br />
           <Flex justifyContent={'center'} gap={10}>
            
                
                    <Image w={300} h={280} src="https://imagemaster.fraazo.com/fraazo-master/webban/Fruits.png" />
                    <Image w={300} h={280} src="https://imagemaster.fraazo.com/fraazo-master/webban/Vegetables.png" />
            
            
            </Flex>
            <br />
            <Fruits />
            <br />
            <Vegetables/>
                  

        </>
    )
}

export default MiddleSection