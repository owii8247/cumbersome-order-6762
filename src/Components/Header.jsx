import { Flex, Select, Divider } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    return (
        <>
            <Flex justifyContent={"center"}>
                
                    <Select variant='flushed' placeholder='Fruits' w={100} >
                        <option value='option1'>Exotic Fruits</option>
                        <option value='option2'>Fresh Fruits</option>
                        <option value='option3'>Fruit Combos</option>
                    </Select>
                    <Select variant='flushed' placeholder='Vegetables' w={120}>
                        <option value='option1'>Daily Veggies</option>
                        <option value='option2'>Herbs & Leafies</option>
                        <option value='option3'>Exotic Vegetables</option>
                        <option value='option3'>Cuts, Peeled & Sprouts</option>
                        <option value='option3'>Vegetable Combos</option>
                    </Select>
                
            </Flex>
            <Divider />
            <br />
        </>
    )
}

export default Header