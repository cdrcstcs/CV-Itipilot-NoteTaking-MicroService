import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import NavbarComp from '../components/NavbarComp'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getData } from '../Redux/AppReducer/action'
const routes=[
    {
        "to":"/signup",
        "tile":"SIGNUP"
    },{
        "to":"/login",
        "tile":"LOGIN"
    },{
        "to":"/notes",
        "tile":"NOTES"
    }
]
const Navbar = () => {

    const isAuth=useSelector((store)=>store.authReducer.isAuth)
    const name=useSelector((store)=>store.appReducer.name)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getData())
    },[])
    return (
        <Flex backgroundColor="black"  border={"1px solid white"} justifyContent="space-around"
        alignItems={"center"} position="fixed" width={"100%"} top="0" zIndex="2" height="80px" >
            <Text color={"goldenrod"} display={isAuth?"block":"none"} fontSize={{base:"large",md:"large",lg:"4xl"}}  ml="3%">{name}</Text>
            {
                routes.map((elem)=>(

                    <NavbarComp key={elem.to} to={elem.to} title={elem.tile} />

                ))
            }
        </Flex>
  )
}

export default Navbar