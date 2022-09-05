import React from 'react';
import {useState, useEffect} from 'react'

function MyApi(props) {

    const URL = 'https://api.xor.cl/red/metro-network';

    const jsonData = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        props.setLinea(data.lines)
        console.log(data.lines)
    }

    useEffect(() => {
        jsonData()
    },) 
    

  return (
    <>
      
    </>
  )
}

export default MyApi
