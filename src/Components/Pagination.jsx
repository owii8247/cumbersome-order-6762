import { Box, Button } from "@chakra-ui/react"

function Pagination ({total, current,changePage}){
    let pages = new Array(total).fill(0).map((item,index)=>(
        <Button backgroundColor={"green"} 
        onClick={()=>changePage(index+1)}
        disabled={current===index+1}
        key={`page - ${index+1}`}
        >{index+1}</Button>
    ))
    return <Box>{pages}</Box>
}
export default Pagination