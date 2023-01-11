import { Box, Button } from "@chakra-ui/react"

function Pagination ({total, current,changePage}){
    let pages = new Array(total).fill(0).map((item,index)=>(
        <Button backgroundColor={"green"}
        ml={1}
        onClick={()=>changePage(index+1)}
        disabled={current===index+1}
        key={`page - ${index+1}`}
        >{index+1}</Button>
    ))
    return <Box gap={2}>{pages}</Box>
}
export default Pagination