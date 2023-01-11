import { Box, Button, Container, Flex, SimpleGrid, Stack, Text, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import axios from "axios"
import { Link, useSearchParams } from "react-router-dom"

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from '@chakra-ui/react'
import { AddIcon, MinusIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { getPage, getSort } from '../utils/utils'
import Pagination from '../Components/Pagination'
import { AuthContext } from '../Context/AppContext'
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

const FruitsPage = () => {
  const [data, setData] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const initSort = getSort(searchParams.get("setOrder"))
  const[sortById, setSortById] = useState(initSort)
  const initPage = getPage(searchParams.get("page"))
  const[page, setPage] = useState(initPage)
  const {count, addCount, subCount} = useContext(AuthContext)
  useEffect(() => {
    //axios(`https://fraazo-api.herokuapp.com/api/products?_start=90&_limit=20`)
    axios(`https://nice-sandals-pig.cyclic.app/api/products?_start=90&_limit=20`)
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => alert("Error"))
  }, [sortById,page])
  //console.log("products", data)

  useEffect(()=>{
    setSearchParams({
      page,sortById
    })
  },[page,sortById,setSearchParams])
  const isAscending = sortById === "ASC"
  const handlePageChange=(index)=>{
    setPage(index)
  }

  return (
    
    <>
      <Navbar />
      <Header />
      <Container maxW={"100%"}>
        <Flex>
          <Box w={"20%"} p={3}>

            <Accordion allowMultiple color={"GrayText"}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton gap={2} _hover={{ color:"black"}}>
                        {isExpanded ? (
                          <MinusIcon fontSize='12px' />
                        ) : (
                          <AddIcon fontSize='12px' />
                        )}
                        <Box flex='1' textAlign='left'>
                          Fruits
                        </Box>

                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                      <AccordionButton gap={2} _hover={{ color:"black"}} onClick={()=>setSortById(isAscending ? "DESC" : "ASC")}><ChevronRightIcon />Exotic Fruits </AccordionButton>
                      <AccordionButton gap={2} _hover={{ color:"black"}} onClick={()=>setSortById(isAscending ? "DESC" : "ASC")}><ChevronRightIcon />Fresh Fruits </AccordionButton>
                      <AccordionButton gap={2} _hover={{ color:"black"}} onClick={()=>setSortById(isAscending ? "DESC" : "ASC")}><ChevronRightIcon />Fruit Combos </AccordionButton>

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton gap={2} _hover={{ color:"black"}}>
                        {isExpanded ? (
                          <MinusIcon fontSize='12px' />
                        ) : (
                          <AddIcon fontSize='12px' />
                        )}
                        <Box flex='1' textAlign='left'>
                          Vegetables
                        </Box>

                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>


                      <AccordionButton gap={2} _hover={{ color:"black"}} onClick={()=>setSortById(isAscending ? "DESC" : "ASC")}><ChevronRightIcon />Daily Veggies </AccordionButton>
                      <AccordionButton gap={2} _hover={{ color:"black"}} onClick={()=>setSortById(isAscending ? "DESC" : "ASC")}><ChevronRightIcon />Herbs & Leafies </AccordionButton>
                      <AccordionButton gap={2} _hover={{ color:"black"}} onClick={()=>setSortById(isAscending ? "DESC" : "ASC")}><ChevronRightIcon />Exotic Vegetables </AccordionButton>
                      <AccordionButton gap={2} _hover={{ color:"black"}} onClick={()=>setSortById(isAscending ? "DESC" : "ASC")}><ChevronRightIcon />Cuts & Sprouts </AccordionButton>
                      <AccordionButton gap={2} _hover={{ color:"black"}} onClick={()=>setSortById(isAscending ? "DESC" : "ASC")}><ChevronRightIcon />Vegetable Combos </AccordionButton>


                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>

          </Box>
          <Box w={"80%"} >
            <Flex justifyContent={"space-between"} p={5}>
            <Box>
          <Breadcrumb separator=">">
              <BreadcrumbItem color={"GrayText"} fontSize={"sm"}>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem color={"GrayText"} fontSize={"sm"}>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem fontSize={"sm"}>
                <BreadcrumbLink href="/fruits">Fruits</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            </Box>
            <Box><Flex justifyContent={"end"}  color={"white"}><Pagination current={page} total={5} changePage={handlePageChange}/></Flex></Box>
            </Flex>
            <SimpleGrid columns={[1, 2, 2,3]} ml={10} spacing={5} >



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
                          _hover={{ backgroundColor: "green", color: "white" }}>

                          <Box><FaShoppingCart /></Box>
                          <Text fontSize='xs'>ADD</Text>
                        </Button> */}
                        <Button colorScheme={"white"}>
                                        <Popover>
                                            <PopoverTrigger>
                                                <Button variant='ghost' colorScheme='white' borderRadius={25} border={"0.5px solid green"} color={"green"} gap={"2"}
                                                    _hover={{ backgroundColor: "green", color: "white" }}>

                                                    <Box ><FaShoppingCart /></Box>
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
            <br />

          </Box>
        </Flex>

      </Container>
      <Footer />
    </>
  )
}

export default FruitsPage