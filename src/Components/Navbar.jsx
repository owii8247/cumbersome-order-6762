import React, { useState, useContext, useEffect } from 'react'
import { SimpleGrid, Box, Input, Image, Flex, Stack, Button, useDisclosure, Text } from '@chakra-ui/react'
import { FaMapMarkerAlt, FaShoppingCart, FaUserAlt, FaCreditCard } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormHelperText
} from '@chakra-ui/react'

import { AuthContext } from "../Context/AppContext";



const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
    const {state, isAuth, dispatch, count } = useContext(AuthContext)
    const [formData, setFormData] = useState(
        {
            name: "",
            number: ""
           

        })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }




    return (
    
        <div >
            <SimpleGrid columns={[3, 3, 2, 1]} spacing={10}>
                <Box>
                    <Stack>
                        <Flex justifyContent={"space-around"} padding={"1rem"} color={"GrayText"}>
                            <Flex gap={"15px"} cursor={"pointer"}>
                                <Link to="/"><Box><Image height='40px' width='140px' src="https://entrackr-bucket.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/06/17155240/fraazo.jpg" /></Box></Link>
                                <Button variant='ghost' colorScheme='white' gap={"2"}>
                                    <Box fontSize={"sm"}><FaMapMarkerAlt /></Box>
                                    <Box fontSize={"sm"}>Mumbai</Box>
                                </Button>
                            </Flex>
                            <Input width='600px' padding={"1.5rem"} borderRadius={"2rem"} color={"GrayText"} fontSize={"sm"} placeholder='Find fresh vegetables, fruits, dairy...' />
                            <Flex justifyContent='space-between' gap={"20px"} cursor={"pointer"}>
                                <Button variant='ghost' colorScheme='white' gap={"2"}>
                                    <Box fontSize={"sm"}><FaShoppingCart color='green' /></Box>
                                    <Box fontSize='xs'>{count}</Box>
                                    <Box fontSize={"sm"}>Cart</Box>
                                </Button>
                                {!state.isAuth ? <>
                                    <Button variant='ghost' colorScheme='white' disabled gap={"2"}>
                                        <Box fontSize={"sm"}><FaCreditCard /></Box>
                                        <Box fontSize={"sm"}>Credit</Box>
                                    </Button></> : <>
                                    <Button variant='ghost' colorScheme='white' gap={"2"}>
                                        <Box fontSize={"sm"}><FaCreditCard  /></Box>
                                        <Box fontSize={"sm"}>Credit</Box>
                                    </Button></>}


                                {/* Login Modal  */}

                                {/* <Link to="/login"> */}

                                {state.isAuth ? <>                                 
                                    <Button variant='ghost' colorScheme='white' gap={"2"}
                                    
                                    onClick={() => dispatch({ type: "LOGOUT_SUCCESS" })}
                                >
                                    <Box fontSize={"sm"}><FaUserAlt /></Box>
                                    <Box fontSize={"sm"}>{state.token}</Box>

                                </Button></> : <Button onClick={onOpen} variant='ghost' colorScheme='white' gap={"2"}>
                                    <Box fontSize={"sm"}><FaUserAlt /></Box>
                                    <Box fontSize={"sm"}>Login</Box>
                                </Button>}
                                <Modal

                                    isOpen={isOpen}
                                    onClose={onClose}
                                >
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Welcome to Fraazo!</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody pb={6} color={"GrayText"}>
                                            <Text fontSize="sm">Sign In to track your Order and More.</Text>
                                            <br />


                                            <form onSubmit={handleSubmit} >
                                                <FormControl color={"GrayText"} >
                                                    <Input
                                                        variant='flushed'
                                                        placeholder='Enter Your Name'
                                                        type="text"
                                                        value={formData.name}
                                                        name="name"
                                                        onChange={handleChange}
                                                    />
                                                    <br />
                                                    <Input
                                                        variant='flushed'
                                                        placeholder='Enter Your Mobile Number'
                                                        type="number"
                                                        value={formData.number}
                                                        name="number"
                                                        onChange={handleChange}
                                                    />
                                                    <br />
                                                    
                                                    <FormHelperText>We'll never share your personal information.</FormHelperText>
                                                    <br />
                                                    <Link to="/login">
                                                    
                                                    <Input backgroundColor={"green"} type="submit" value="CREATE ACCOUNT" cursor={"pointer"} color={"white"} fontWeight={"bold"}  />
                                                    </Link>
                                                </FormControl>
                                            </form>
                                        </ModalBody>

                                        <ModalFooter>



                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                                {/* </Link> */}

                            </Flex>
                        </Flex>

                    </Stack>
                </Box>
            </SimpleGrid>
            <hr />
        </div>
        
    )
}

export default Navbar