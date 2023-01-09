import React from 'react';
import {Heading,Grid,GridItem,Box} from "@chakra-ui/react";
import {BsFolder} from "react-icons/bs"
import {AiOutlineStar} from "react-icons/ai"
import {BiGitRepoForked} from "react-icons/bi"

const projects = ({projects}) => {

  return (
    <div>
    <Heading>Projects</Heading>
    <Grid templateColumns="repeat(2,1fr)" gap={6} >
   {
    projects&&projects.items&&projects.items.map((project)=>{
     return <a key={project.id}  href={project.clone_url}>
      <GridItem>
      <Box display="flex" justifyContent="space-evenly" padding="30px" >
       <Box>
       <Box display="flex" justifyContent="space-evenly">
        <BsFolder/>
        <h3>{project.name}</h3>
       </Box>
       <Box display="flex" justifyContent="space-evenly" >
        <Box display="flex" justifyContent="space-evenly">
         <AiOutlineStar/>
         <h3>{project.stargazers_count}</h3>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
        <BiGitRepoForked/>
         <h3>{project.forks_count}</h3>
        </Box>
       </Box>
       </Box>


       <Box>
        <h4>{project.language}</h4>
       </Box>
      </Box>
     </GridItem>
     </a>
    })
   }
    </Grid>
    </div>
  )
}

export async function getStaticProps(){
 let res=await fetch("https://api.github.com/search/repositories?q=user:fahad9988+fork:true&sort=updated&per_page=10&type=Repositories");
 let data=await res.json();

 return {
   props:{
     projects:data
   }
 }
}

export default projects