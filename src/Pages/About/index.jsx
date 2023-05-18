import React from 'react'
import {Helmet} from "react-helmet";
const index = () => {
  return (
    <>
       <Helmet>
            <meta charSet="utf-8" />
            <title>About</title>
      </Helmet>
      <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
        <h2 style={{fontSize:"30px"}}>About</h2>
     </div>
    </>
  )
}

export default index
