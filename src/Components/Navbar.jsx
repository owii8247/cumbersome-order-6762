import React from 'react'
import { SimpleGrid, Box, Input, Image, Flex, Stack } from '@chakra-ui/react'
import { FaMapMarkerAlt, FaShoppingCart, FaUserAlt, FaCreditCard, FaSearch } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <SimpleGrid columns={[3, 3, 2, 1]} spacing={10}>
                <Box>
                    <Stack>
                        <Flex justifyContent={"space-around"} padding={"1rem"}>
                            <Flex gap={"15px"} cursor={"pointer"}>
                                <Box><Image height='40px' width='140px' src="https://webasset.fraazo.com/production/b70a67f4e825e3d388ac4466952c20a8.svg" /></Box>
                                <Flex gap={"2"}>
                                    <Box><FaMapMarkerAlt /></Box>
                                    <Box>Mumbai</Box>
                                </Flex>
                            </Flex>
                            <Input width='600px' padding={"1.5rem"} borderRadius={"2rem"} placeholder='Find fresh vegetables, fruits, dairy...' />
                            <Flex justifyContent='space-between' gap={"20px"} cursor={"pointer"}>
                                <Flex gap={"2"}>
                                    <Box><FaShoppingCart /></Box>
                                    <Box>Cart</Box>
                                </Flex>
                                <Flex gap={"2"}>
                                    <Box><FaCreditCard /></Box>
                                    <Box>Credit</Box>
                                </Flex>
                                <Flex gap={"2"}>
                                    <Box><FaUserAlt /></Box>
                                    <Box>Login</Box>
                                </Flex>

                            </Flex>
                        </Flex>

                    </Stack>
                </Box>
            </SimpleGrid>
            <hr />
        </>
    )
}

export default Navbar