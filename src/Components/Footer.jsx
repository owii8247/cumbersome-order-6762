import React from 'react'
import {
  Container,
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Stack,
  Divider,
}
  from "@chakra-ui/react"

import { MdOutlineMail, MdPhone } from "react-icons/md"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <Container maxW={"100%"} >
        <Box>
          <Image w={"100%"} src="https://webasset.fraazo.com/production/a72cf5cd03bd56f4be37fa1c4ce7062d.svg" />
          <Box bg={"#165241"}>
            <br /><br /><br />
            <Flex  justifyContent={"space-around"}>
              <Box w={250}>
                <Link to="/"><Image w={215}  src="https://webasset.fraazo.com/production/f01ccf2737aa24558c3808178effa5fb.svg" /></Link><br />
                <Text textAlign={"start"} color={"lightgray"}>Order online vegetables & fruits
                  directly from the farm. Fraazo is
                  online platform that allows customer
                  to get farm fresh produce directly
                  from farmers.</Text>
              </Box>
              <Box color="white" >
                <Stack textAlign={"start"}>
                  <Heading size='md' fontWeight={"bold"}>Useful Links</Heading>
                  <br />
                  <Text color={"lightgray"}>Privacy Policy</Text>
                  <Text color={"lightgray"}>FAQ</Text>
                  <Text color={"lightgray"}>Term & Conditions</Text>
                  <Text color={"lightgray"}>Sitemap</Text>
                </Stack>
              </Box>
              <Box color="white">
                <Stack textAlign={"start"}>
                  <Heading size='md' fontWeight={"bold"}>Cities We Serve</Heading>
                  <br />
                  <Text color={"lightgray"}>Mumbai</Text>
                  <Text color={"lightgray"}>Hyderabad</Text>
                  <Text color={"lightgray"}>Bangalore</Text>
                  <Text color={"lightgray"}>Delhi</Text>
                  <Text color={"lightgray"}>Noida</Text>
                  <Text color={"lightgray"}>Delhi</Text>
                  <Text color={"lightgray"}>Gurugram</Text>
                  <Text color={"lightgray"}>Pune</Text>
                </Stack>
              </Box>
              <Box color="white" >
                <Stack textAlign={"start"}>
                  <Heading size='md' fontWeight={"bold"}>Connect With Us</Heading>
                  <br />
                  <Text color={"lightgray"}><MdOutlineMail />support@fraazo.com</Text><br />
                  <Text color={"lightgray"}><MdPhone />+91 9152291522</Text>
                  <br />
                  <Heading size='md' fontWeight={"bold"}>Download The App</Heading>
                  <Flex>
                  <Image w="120px" h="40px" mt={2} src="https://webasset.fraazo.com/production/footer-g-play.53194b32f1f28968b89e.png" />
                  <Image w="155px" h="60px" src="https://webasset.fraazo.com/production/footer-appstore.b90f071a00b68166f2af.png" />
                  </Flex>
                </Stack>
              </Box>

            </Flex>
            <Stack p={5}>
            <Heading size='xl' fontWeight={"bold"} color="white" textAlign={"start"} p={5}>
              Fresh Fruits & Vegetables Grocery Shopping Online
            </Heading>
            <Container maxW={"100%"} textAlign={"start"} color={"lightgray"} >
              The quality of fruits & vegetables is synonymous with its freshness, while getting fresh fruits and vegetables is a tedious task at times but with Fraazo you can get it delivered at your doorstep. Fraazo brings a wide range of farm fresh fruits, vegetables and dairy products to you, all in just a click. We currently serve about more than 3lacs+ happy customers in Mumbai, Navi Mumbai, Thane, Kalyan-Dombivli and Virar. Fraazo has made online shopping of fresh produce much easier with its hassle-free home delivery options. You can choose the delivery slot as per your choice and schedule your order accordingly. Or you can simply opt for the option of 90 mins Express Delivery and get your order delivered in not more than 90 mins. The farm fresh fruits and vegetables on Fraazo are available at best prices compared to other vendors & supermarkets. Plus with so many exciting offers, one can save up to 20% on their Monthly grocery budgets. No need to wait in long queues in crowded supermarkets or local mandis for getting the best prices on veggies. Kick the stress out & just Fraazo your dose of freshness with savings at the comfort of your home. Fraazo directly sources fresh fruits and veggies from an extensive network of farmers across Maharashtra, hence bringing you fresh produce straight from farm to table in less than 18 hours. With our Safe & Hygienic packaging and minimal multiple handling, we ensure you get the best quality fresh produce.
            </Container>
            
            <Container maxW={"100%"} textAlign={"start"} color={"lightgray"}>
              The fruits and vegetables are 100% hand-picked fresh from farm, while some products are hydroponically-grown. The wide range of fruits and veggies on Fraazo include more than 100+ farm fresh vegetables and fruits, starting from regular veggies like dudhi, cauliflower, beetroot, cabbage, etc. to exotic veggies like broccoli, lettuce etc. We also provide the essential vegetable combos like Onion, Potato, Tomato Combo, Salad Combo, Fresh Cut-Veg Combos or Fruit Combos like Banana, Apple Combo, & more. There are a lot of exciting deals on vegetables & fruits, every day of the week, the major highlights being Monday Mandi, Veggie Wednesday, Freelivery Thursday & Fruit Friday.For payments, you can choose from the multiple payment options as Fraazo accepts Debit card, Credit card, UPI options like iMobile, Google Pay, 8+ e-Wallet options like Phonepe, JioPay, MobiKwik, Sodexo, NetBanking and Cash on Delivery (COD). If you ever have an issue with missing items or any quality issue, you can raise your concern with us in 48 hrs & we shall refund/ replace your product with “no-questions-asked-policy”. You can simply connect with our Customer Support team via Chat Support or Call on 9152291522.
            </Container>
            </Stack>
            <Divider/>
            <br />
          <Container color={"lightgray"}>© Copyrights 2021 - 2022. Fraazo. All Rights Reserved.</Container>
          <br />

          </Box>
          
        </Box>

      </Container>
    </>
  )
}

export default Footer