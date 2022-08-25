import React, { useState, useContext } from 'react'
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
    FormLabel,
    FormControl,
    FormHelperText
} from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import axios from "axios"
import { AuthContext } from "../Context/AppContext";


const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
    const { state, dispatch, isAuth } = useContext(AuthContext)
    const [formData, setFormData] = useState(
        {
            name: "",
            number: "",
            email:"",
            password:""

        })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post("https://reqres.in/api/login", {
        email: formData.email,
        password: formData.password
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "LOGIN_SUCCESS",
          token: res.data.token
        });
        navigate("/");
      })
      .catch((err) => {
        console.log("error");
      })


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
                                    <Box >{!isAuth ? "Login" : "Logout"}</Box>
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
                                            <br />


                                            <form onSubmit={handleSubmit}>
                                                <FormControl >
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
                                                    <Input
                                                        variant='flushed'
                                                        type='email'
                                                        value={formData.email}
                                                        name="email"
                                                        placeholder='Enter email'
                                                        onChange={handleChange}
                                                    />
                                                    <br />
                                                    <Input
                                                        variant='flushed'
                                                        type='password'
                                                        value={formData.password}
                                                        name="password"
                                                        onChange={handleChange}
                                                        placeholder="Enter password"
                                                    />
                                                    <FormHelperText>We'll never share your personal information.</FormHelperText>
                                                    <br />
                                                    <Input backgroundColor={"green"} type="submit" value="CREATE ACCOUNT" cursor={"pointer"} color={"white"} fontWeight={"bold"}/>

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
        </>
    )
}

export default Navbar