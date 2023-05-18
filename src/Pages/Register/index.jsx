import React from 'react'
import {Helmet} from "react-helmet";
const index = () => {
  return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <title>Register</title>
          </Helmet>
     <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
        <h2 style={{fontSize:"30px"}}>Register</h2>
    </div>
    </>
  )
}

export default index
