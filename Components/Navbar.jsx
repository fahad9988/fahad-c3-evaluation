import React from 'react';
import Link from "next/link";
import {Avatar} from "@chakra-ui/react"

const Navbar = () => {
  return (
    <div style={{height:"60px",alignItems:"center",justifyContent:"space-between",backgroundColor:"blue",display:"flex", padding:"10px"}} >
     <div style={{width:"20%",display:"flex",justifyContent:"space-around",color:"white"}} >
      <Link href="/" >Home</Link>
      <Link href="/projects" >Projects</Link>
     </div>
     <Avatar name="Fahad Arif" size="md" />
    </div>
  )
}

export default Navbar