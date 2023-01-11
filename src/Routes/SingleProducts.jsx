import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import { FaShoppingCart } from "react-icons/fa"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

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
import { AuthContext } from '../Context/AppContext'


const SingleProducts = () => {
  const [data, setData] = useState([])
  const {count, addCount, subCount} = useContext(AuthContext)

  const params = useParams()
  useEffect(() => {
    //axios(`https://fraazo-api.herokuapp.com/api/products/${params.id}`)
    axios(`https://nice-sandals-pig.cyclic.app/api/products/${params.id}`)
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => {
        alert("Error")
      })
  }, [params.id])
  console.log("single", data)

  const colors = useColorModeValue(
    ['red.50', 'teal.50', 'blue.50'],
    ['red.900', 'teal.900', 'blue.900'],
  )
  const [tabIndex, setTabIndex] = React.useState(0)
  const bg = colors[tabIndex]

  return (
    <>
      <Navbar />
      <Header />
      <Box textAlign={"start"} p={10}>
        <Breadcrumb separator=">">
          <BreadcrumbItem color={"GrayText"} fontSize={"sm"}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem color={"GrayText"} fontSize={"sm"}>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem color={"GrayText"} fontSize={"sm"}>
            <BreadcrumbLink href="/fruits">{data.category}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem fontSize={"sm"}>
            <BreadcrumbLink href="">{data.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Container maxW={"80%"} p={5}>
        <Flex>
          <Box  w={"30%"}>
            <Image boxSize={"300px"} src={data.imgUrl} />
          </Box>
          <Box  w={"70%"} textAlign={"start"} p={5}>
            <Text fontWeight={"bold"} fontSize={"xl"} color={"GrayText"}>{data.name}</Text><br />
            <Text>{data.packSize}</Text><br />
            <Text color={"red"} fontWeight={"semibold"}>₹ {data.price}</Text><br />
            {/* <Button variant='ghost' colorScheme='white' borderRadius={25} border={"0.5px solid green"} color={"green"} gap={"2"}
              _hover={{ backgroundColor: "green", color: "white" }}>

              <Box><FaShoppingCart /></Box>
              <Text fontSize='xs'>ADD</Text> */}
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
            <br /><br />
            <hr />
            <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
              <TabList>
                <Tab>Description</Tab>
                <Tab>Benefits</Tab>
                <Tab>Info</Tab>
              </TabList>
              <TabPanels p='2rem' color={"GrayText"}>
                <TabPanel >{data.name} {"-"} ₹ {data.price} {"-"} {data.packSize} {" "} {data.soldOut}</TabPanel>
                <TabPanel>{data.name } lower blood pressure, reduce the risk of heart disease.</TabPanel>
                <TabPanel>{data.name} can help keep appetite in check.</TabPanel>
              </TabPanels>
            </Tabs>

          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  )
}

export default SingleProducts