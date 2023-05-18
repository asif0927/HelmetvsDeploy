import React from 'react'
import {Helmet} from "react-helmet";
const index = () => {
  return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <title>NoteFound</title>
    </Helmet>
    <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
        <h2 style={{fontSize:"30px"}}>Not Found</h2>
    </div>
    </>
  )
}

export default index
