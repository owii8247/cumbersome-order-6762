import { Button, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import { AuthContext } from '../Context/AppContext'

const Login = () => {
  const{state, dispatch} = useContext(AuthContext)
  return (
    <>
    <Navbar />
    <Header/>
    <h1>Login</h1>
    <Button onClick={()=>dispatch({type:"LOGOUT_SUCCESS"})}>Logout</Button>
    <Text>{state.token}</Text>
    <Link to="/">Go Home</Link>
    <Footer/>
    </>
  )
}

export default Login