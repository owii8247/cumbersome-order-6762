import React from 'react'
import {
    SimpleGrid,
    Box,
    Stack,
    Image,
    Flex,
    Heading,
    Container,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
    Input,
    InputAddon,
    InputGroup,
    InputLeftAddon,
    Spacer
} from '@chakra-ui/react'
import { FaGooglePlay, FaApple } from "react-icons/fa"

const Download = () => {
    return (
        <>
            <Container maxW={"100%"} >
                <SimpleGrid columns={[2, 1]}>
                    <Flex>
                        <Box h={"100%"} w={"50%"} padding={"2rem"} backgroundImage={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI0IiBoZWlnaHQ9Ijc4NCIgdmlld0JveD0iMCAwIDcyNCA3ODQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIG9wYWNpdHk9IjAuMTUiIGQ9Ik0xMTEuNzY4IDEyMi42Qy0xMS43NDk0IDExMy4wMzQgLTguOTc1MzQgNDIuMDkwMiAtNTIuMTA4MyAwTC0zNTYgMjIzLjg0M0MtMjkyLjYwOCA0MTUuMTYzIC0xMjguMzEgODg2LjMzOSAtODQuMzkyOSA3NjMuODk1QzIxLjIzMjEgNDI2LjI3MiAxODQuMDkgNTU3LjAwNiA0MTUuNDQgNjQ4LjgzOUM2NDYuNzg5IDc0MC42NzIgODUzLjAyOSA1ODIuODI0IDYyNC44MDQgMzAzLjY3MkMzOTYuNTc4IC05Mi40MjE5IDIzNS4yODUgMTMyLjE2NiAxMTEuNzY4IDEyMi42WiIgZmlsbD0iIzVEQzZBRCIvPgo8cGF0aCBvcGFjaXR5PSIwLjE1IiBkPSJNMjU2LjAzMiA2ODIuMTc3QzI1MS45OTkgNzExLjcxOCAyMjYuMTQ5IDcwMC44IDE4OC4zNTEgNjk1LjYzOUMxNTAuNTUyIDY5MC40NzkgMTE1LjExNyA2OTMuMDMgMTE5LjE1IDY2My40ODlDMTIzLjE4NCA2MzMuOTQ4IDE1Ny4wOTUgNjE0LjE4MyAxOTQuODk0IDYxOS4zNDRDMjMyLjY5MyA2MjQuNTA1IDI2MC4wNjUgNjUyLjYzNiAyNTYuMDMyIDY4Mi4xNzdaIiBmaWxsPSIjNURDNkFEIi8+CjxwYXRoIG9wYWNpdHk9IjAuMTUiIGQ9Ik02NjIuNzc5IDE1MS45NjFDNjUwLjUxOSAxNjQuMjIxIDYzOC43NTcgMTQzLjQ3MyA2MDEuNDc5IDEzNC45ODZDNTYyLjgxMyAxMzQuOTg2IDU1NC42ODMgMTA5LjA4MSA1NzEuMzAxIDg5LjE5MTJDNTg3LjkxOCA2OS4zMDEzIDYxMi43ODcgNjcuNDkzMSA2MzguNzU3IDg5LjE5MDNDNjY0LjcyOCAxMTAuODg4IDY3Mi4yMSAxMzQuOTg2IDY2Mi43NzkgMTUxLjk2MVoiIGZpbGw9IiM1REM2QUQiLz4KPC9zdmc+Cg=="}>

                            <Image src="https://webasset.fraazo.com/production/app-screen.64b2c07bae4a9c5a4ec4.png" />
                        </Box>
                        <Box h={"100%"} w={"50%"} padding={"5rem"}>
                            <br />
                            <Heading textAlign={"start"}>Download The App</Heading>
                            <br />
                            <Text w={"80%"} textAlign={"start"}>Enter your phone number to receive a text with a link to download the app</Text>
                            <br /><br />
                            <Button border={"1px solid black"} colorScheme={"whiteAlpha"} borderRadius={"1rem"} padding={"1.5rem"}>
                                <Tabs variant='soft-rounded' colorScheme={"linkedin"}>
                                    <TabList>
                                        <Tab><FaGooglePlay />Android</Tab>
                                        <Tab><FaApple />IPhone</Tab>
                                    </TabList>

                                </Tabs>
                            </Button>
                            <br /><br />
                            <InputGroup padding={"1.5rem"} w={"100%"}>
                                <InputLeftAddon children='+91' />
                                <Input type='tel' placeholder='Enter Your Mobile Number' />
                            </InputGroup>
                            <br />
                            <Button colorScheme='blue' padding={"1.5rem"} w={"90%"}>SUBMIT</Button>
                            <br /><br /><br />
                            <Flex justifyContent={"space-around"}>
                                <Text>Available On</Text>
                                <Button colorScheme={"whiteAlpha"}><Image width="120px" height="40px" src="data:image/png;base64,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" /></Button>
                                <Button colorScheme={"whiteAlpha"}><Image width="120px" height="40px" src="https://icon-library.com/images/app-store-icon-png/app-store-icon-png-14.jpg" /></Button>
                            </Flex>
                        </Box>
                    </Flex>
                </SimpleGrid>
            </Container>
        </>
    )
}

export default Download