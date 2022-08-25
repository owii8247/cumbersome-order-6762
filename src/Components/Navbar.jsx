import React, { useState } from 'react'
import { SimpleGrid, Box, Input, Image, Flex, Stack, Button, useDisclosure, Text } from '@chakra-ui/react'
import { FaMapMarkerAlt, FaShoppingCart, FaUserAlt, FaCreditCard, FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormLabel,
    FormControl
} from '@chakra-ui/react'

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const[form, setForm] = useState(
        {
            name:"",
            number:""

        })

    const handleChange=(e)=>{
        const{name,value} = e.target
        setForm({...form,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)

    }

    return (
        <>
            <SimpleGrid columns={[3, 3, 2, 1]} spacing={10}>
                <Box>
                    <Stack>
                        <Flex justifyContent={"space-around"} padding={"1rem"}>
                            <Flex gap={"15px"} cursor={"pointer"}>
                                <Link to="/"><Box><Image height='40px' width='140px' src="https://webasset.fraazo.com/production/b70a67f4e825e3d388ac4466952c20a8.svg" /></Box></Link>
                                <Button variant='ghost' colorScheme='white' gap={"2"}>
                                    <Box><FaMapMarkerAlt /></Box>
                                    <Box>Mumbai</Box>
                                </Button>
                            </Flex>
                            <Input width='600px' padding={"1.5rem"} borderRadius={"2rem"} placeholder='Find fresh vegetables, fruits, dairy...' />
                            <Flex justifyContent='space-between' gap={"20px"} cursor={"pointer"}>
                                <Button variant='ghost' colorScheme='white' gap={"2"}>
                                    <Box><FaShoppingCart /></Box>
                                    <Box>Cart</Box>
                                </Button>
                                <Button variant='ghost' colorScheme='white' disabled gap={"2"}>
                                    <Box><FaCreditCard /></Box>
                                    <Box>Credit</Box>
                                </Button>

                                {/* Login Modal  */}

                                {/* <Link to="/login"> */}
                                    <Button variant='ghost' colorScheme='white' gap={"2"}
                                    onClick={onOpen}
                                    >
                                        <Box><FaUserAlt /></Box>
                                        <Box >{true ? "Login" : "Logout"}</Box>
                                    </Button>
                                    <Modal
                                       
                                        isOpen={isOpen}
                                        onClose={onClose}
                                    >
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Welcome to Fraazo!</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody pb={6}>
                                                <Text fontSize="sm">Sign In to track your Order and More.</Text>
                                              
                                              
                                                <form onSubmit={handleSubmit}>
                                                
                                                <Input 
                                                    variant='flushed' 
                                                    placeholder='Enter Your Name'
                                                    type="text"
                                                    value={form.name}
                                                    name="name"
                                                    onChange={handleChange}
                                                />
                                                    <br />
                                                    <Input 
                                                    variant='flushed' 
                                                    placeholder='Enter Your Mobile Number'
                                                    type="number"
                                                    value={form.number}
                                                    name="number"
                                                    onChange={handleChange}
                                                    />
                                                    <Text fontSize="xs">We will send you an OTP on this number</Text>
                                                    <br />
                                                    
                                                <Input type="submit" value="Get OTP" />
                                                
                                                
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
        </>
    )
}

export default Navbar