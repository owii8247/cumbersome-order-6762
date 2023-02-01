import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import {
    Box,
    Flex,
    Image,
    Input,
    Button,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FaCreditCard, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../Context/AppContext';
import axios from 'axios';

const Navbar1 = () => {
    // const [show, setShow] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { state, dispatch, count } = useContext(AuthContext)


    const [products, setProducts] = useState([])
    const [pdata, setpData] = useState([])
    const [showBox, setShowBox] = useState(false)
    const [value, setValue] = useState("")
    useEffect(() => {
        axios.get(`https://nice-sandals-pig.cyclic.app/api/products`).then((res) => {
            setProducts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
//console.log("search",products)
    const handleFilter = (e) => {
        setValue(e.target.value)
        const filterResult = products && products.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setpData(filterResult)
        
        
    }

    useEffect(() => {
        if (value === "") {
            setShowBox(false)
        }
        if (value !== "") {
            setShowBox(true)
        }
    }, [value])

    return (
        <Box p={4} color="white">
            <Flex
                maxW="1400px"
                mx="auto"
                align="center"
                justifyContent="space-between"
                w="100%"
            >
                <Link to="/">
                    <Image
                        src="https://cdn6.aptoide.com/imgs/d/2/5/d250962ae12d9f11a37ba33ea1d30057_fgraphic.png"
                        alt="Your Logo"
                        w="150px"
                        h="40px"
                    />
                </Link>
                <Box display={{ base: 'block', md: 'none' }}>
                    <IconButton
                        icon="hamburger"
                        onClick={onOpen}
                        aria-label="Open menu"
                        color="white"
                        colorScheme='green'
                    />
                </Box>
                <Box
                    display={{ base: 'none', md: 'block' }}
                    ml="auto"
                    align="center"
                >
                    <Input
                        type="text"
                        placeholder="Find fresh vegetables, fruits, dairy..."
                        aria-label="Search products"
                        width='500px'
                        borderRadius={"2rem"} color={"GrayText"} fontSize={"sm"}
                        onChange={handleFilter}
                    />
                    <Button colorScheme={"green"} borderRadius={"2rem"} ml={4}
                    onClick={handleFilter}
                    >
                        Search
                    </Button>
                </Box>


                {showBox && <Box border={"1px solid green"} borderTop={"none"} borderRadius={5} mt={"20%"} w={"35%"} maxHeight={"5%"} ml={440}  p={2}
                backgroundColor={"white"} overflow={"hidden"} zIndex={"999"} position={"absolute"} overflowY={"scroll"}>
{/* zIndex={"999"} */}
                    {pdata && pdata.map((item) =>

                        <Box >
                            <Link to={`/products/${item.id}`}>
                                <Flex p={1} justifyContent={"space-between"}>
                                    <Box textAlign={"start"}>
                                        <Text fontWeight={"semibold"} color={"green"}>{item.name}</Text>
                                        <Text fontSize={"xx-small"} color={"green"}>₹ {item.price}</Text>
                                    </Box>
                                    <Box h={5} w={20}>
                                        <Image src={item.imgUrl} />
                                    </Box>
                                </Flex>
                            </Link>
                        </Box>
                    )}
                </Box>}



                <Box
                    display={{ base: 'none', md: 'block' }}
                    ml={4}
                    align="center"
                >
                    <Button variant='ghost' colorScheme='green' gap={"2"}>
                        <Box fontSize={"sm"}><FaShoppingCart color='green' /></Box>
                        <Box fontSize='xs'>{count}</Box>
                        <Box fontSize={"sm"}>Cart</Box>
                    </Button>
                    {!state.isAuth ? <>
                        <Button variant='ghost' colorScheme='green' disabled gap={"2"}>
                            <Box fontSize={"sm"}><FaCreditCard /></Box>
                            <Box fontSize={"sm"}>Credit</Box>
                        </Button></> : <>
                        <Button variant='ghost' colorScheme='green' gap={"2"}>
                            <Box fontSize={"sm"}><FaCreditCard /></Box>
                            <Box fontSize={"sm"}>Credit</Box>
                        </Button></>}
                    {state.isAuth ? <>
                        <Button variant='ghost' colorScheme='green' gap={"1"}

                            onClick={() => dispatch({ type: "LOGOUT_SUCCESS" })}
                        >
                            <Box fontSize={"sm"}><FaUserAlt /></Box>
                            <Box fontSize={"sm"}>{state.token}</Box>
                            <Button fontSize={"sm"} variant='ghost' colorScheme='green'>Logout</Button>

                        </Button></> : <Link to="/login"><Button variant='ghost' colorScheme='green' gap={"2"}>
                            <Box fontSize={"sm"}><FaUserAlt /></Box>
                            <Box fontSize={"sm"}>Login</Box>
                        </Button></Link>}
                </Box>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    size="md"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader>
                        <Link to="/">
                    <Image
                        src="https://cdn6.aptoide.com/imgs/d/2/5/d250962ae12d9f11a37ba33ea1d30057_fgraphic.png"
                        alt="Your Logo"
                        w="150px"
                        h="40px"
                    />
                </Link>
                        </DrawerHeader>
                        <DrawerBody>
                            <Stack spacing={4}>
                                {/* <Input
                                    type="text"
                                    placeholder="Find fresh vegetables, fruits, dairy..."
                                    aria-label="Search products"
                                    borderRadius={"2rem"} color={"GrayText"} fontSize={"sm"}
                                />
                                <Button colorScheme={"green"} borderRadius={"2rem"} ml={4} width="100%">
                                    Search
                                </Button> */}

                                <Button variant='ghost' colorScheme='green' gap={"2"} width="100%">
                                    <Box fontSize={"sm"}><FaShoppingCart color='green' /></Box>
                                    <Box fontSize='xs'>{count}</Box>
                                    <Box fontSize={"sm"}>Cart</Box>
                                </Button>
                                {!state.isAuth ? <>
                                    <Button variant='ghost' colorScheme='green' disabled gap={"2"} width="100%">
                                        <Box fontSize={"sm"}><FaCreditCard /></Box>
                                        <Box fontSize={"sm"}>Credit</Box>
                                    </Button></> : <>
                                    <Button variant='ghost' colorScheme='green' gap={"2"} width="100%">
                                        <Box fontSize={"sm"}><FaCreditCard /></Box>
                                        <Box fontSize={"sm"}>Credit</Box>
                                    </Button></>}
                                {state.isAuth ? <>
                                    <Button variant='ghost' colorScheme='green' gap={"1"} width="100%"

                                        onClick={() => dispatch({ type: "LOGOUT_SUCCESS" })}
                                    >
                                        <Box fontSize={"sm"}><FaUserAlt /></Box>
                                        <Box fontSize={"sm"}>{state.token}</Box>
                                        <Button fontSize={"sm"} variant='ghost' colorScheme='green' width="100%">Logout</Button>

                                    </Button></> : <Link to="/login"><Button variant='ghost' colorScheme='green' gap={"2"} width="100%">
                                        <Box fontSize={"sm"}><FaUserAlt /></Box>
                                        <Box fontSize={"sm"}>Login</Box>
                                    </Button></Link>}
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Box>





    )
}

export default Navbar1