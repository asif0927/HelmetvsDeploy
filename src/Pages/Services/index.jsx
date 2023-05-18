import React from 'react';
import {Helmet} from "react-helmet";

const index = () => {
  return (
   <>
   <Helmet>
            <meta charSet="utf-8" />
            <title>Services</title>
          </Helmet>
     <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
        <h2 style={{fontSize:"30px"}}>Services</h2>
    </div>
   </>
  )
}

export default index
