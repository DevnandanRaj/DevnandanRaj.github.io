import React from "react";
import { Box, Heading, SimpleGrid, Image, Text, Link, Flex } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import BFC from "../Assets/Project-images/BFC.png"
import Refresh from "../Assets/Project-images/RefreshClinic.png"
import Foodies from "../Assets/Project-images/Foodies-paradise.png"

const ProjectCard = ({ project }) => {
  const { image, title, desc, techStack, github, deploy } = project;

  return (
    <Box
      bg="white"
      p={4}
      boxShadow="md"
      borderRadius="lg"
      textAlign="center"
    >
      <Image src={image} alt={title} />
      <Heading mt={2} fontSize="xl">
        {title}
      </Heading>
      <Text mt={2}>{desc}</Text>
      <Text mt={2} fontWeight="bold">
        Tech Stack: {techStack.join(", ")}
      </Text>
      <Flex justifyContent="center" mt={2}>
        <Link href={github} target="_blank" color="blue.500" mr={2}>
          GitHub
        </Link>
        <Link href={deploy} target="_blank" color="blue.500">
          Demo
        </Link>
      </Flex>
    </Box>
  );
};

const Projects = () => {
  let data = [
    {
      image: Foodies,
      desc: "Foodies Paradise,is a online grocery shopping!  e-commerce platform.",
      title: "Foodies-paradise",
      techStack: ["JavaScript","React","Redux", "Chakra UI","Material UI" ],
      github: "https://github.com/DevnandanRaj/Foodies-paradise",
      deploy: "https://sprightly-lolly-ea509d.netlify.app",
    },
    {
      image: Refresh,
      desc: "Refresh Clinic, the innovative React-based website for private clinics. With a user-friendly interface, patients can easily schedule appointments, access medical information.",
      title: "Refresh Clinic",
      techStack: ["JavaScript","React","Redux", "Chakra UI","JsonServer" ],
      github: "https://github.com/DevnandanRaj/Refresh-Clinic",
      deploy: "https://mellifluous-toffee-1a1ab6.netlify.app",
    },
    {
      image: BFC,
      desc: "BFC : Clone of KFC.com",
      title: "BFC",
      techStack: ["JavaScript","HTML","CSS","JsonServer" ],
      github: "https://github.com/DevnandanRaj/BFC.com",
      deploy: "https://gleaming-pie-62470a.netlify.app",
    },
    
  ];

  return (
    <Box id="projects" textAlign="center" pt="130px" mt="10">
      <Heading>
        <Fade bottom> Projects </Fade>
      </Heading>
      <SimpleGrid
        justifyContent="center"
        textAlign="center"
        m="auto"
        columns={{ base: 1, md: 2, xl: 3 }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "95%", md: "81%" }}
        marginTop="70px"
        marginBottom="50px"
      >
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
