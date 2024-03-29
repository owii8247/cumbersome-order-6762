import { Container, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../Context/AppContext'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input
} from '@chakra-ui/react'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(AuthContext)
  const [form,setForm] = useState({
    email:"",
    password:""
  })

const handleChange=(e)=>{
  const{name,value} = e.target
  setForm({...form, [name]:value})
}

  const handleSubmit=(e)=>{
    e.preventDefault()
    //console.log(form)
    axios.post("https://reqres.in/api/login", {
      email: form.email,
      password: form.password
    })
    .then((res) => {
      //console.log(res.data);
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
      

      <Text>{state.token}</Text>
      <Container color={"GrayText"} p={10}>
        <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel >Email address</FormLabel>
          <Input 
          type='email'
          value={form.email}
          name="email"
          onChange={handleChange}
          placeholder="Enter Your Email"
          />
          <br />
          <br />
          <FormLabel >Password</FormLabel>
          <Input 
          type='password'
          value={form.password}
          name="password"
          onChange={handleChange}
          placeholder="Enter Your Password"
          />
          <br />
          <FormHelperText>We'll never share your email and password.</FormHelperText>
          <br />
          <Input type="submit" value="Log In" bg={"green"} color={"white"} />
        </FormControl>
        </form>
      </Container>

     
    </>
  )
}

export default Login