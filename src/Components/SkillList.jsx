import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  useBreakpointValue,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Heading,
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";
export const skillsData = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "Javascript",
    category: "frontend",
  },
  {
    icon: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
    name: "HTML",
    category: "frontend",
  },
  {
    icon: "https://somesh9870.github.io/static/media/CSS.9f33c557b92e4e2e1cc8.png",
    name: "CSS",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/tailwind.e7b4a92d5aefbddd6f0651c024144be2.svg",
    name: "Tailwind",
    category: "frontend",
  },
  {
    icon: "https://somesh9870.github.io/static/media/React.20adfb35ae6a6e5817bf.png",
    name: "React",
    category: "frontend",
  },
  {
    icon: "https://cdn.cdnlogo.com/logos/n/80/next-js.svg",
    name: "Next JS",
    category: "frontend",
  },
  {
    icon: "https://somesh9870.github.io/static/media/Redux.5de70b7bc0d2556a0958.png",
    name: "Redux",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/chakra.15320604467d004df871.png",
    name: "Chakra UI",
    category: "frontend",
  },
  {
    icon: "https://somesh9870.github.io/static/media/Node.js.478c590a266bed215577.png",
    name: "Node JS",
    category: "backend",
  },
  {
    icon: "https://somesh9870.github.io/static/media/Express.39a0f4c3d981885c64f8.png",
    name: "Express",
    category: "backend",
  },
  {
    icon: "https://alih6051.github.io/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg",
    name: "MongoDB",
    category: "backend",
  },
  {
    icon: "https://somesh9870.github.io/static/media/mongoose.998152e4bc5fdd366c2c.png",
    name: "Mongoose",
    category: "backend",
  },
  {
    icon: "data:image/png;base64,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",
    name: "Git",
    category: "tool",
  },
  {
    icon: "data:image/png;base64,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",
    name: "Postman",
    category: "tool",
  },
  {
    icon: "https://code.visualstudio.com/assets/images/code-stable.png",
    name: "VS code",
    category: "tool",
  },
  {
    icon: "https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/2.5.1/1678365054933/Microsoft.VisualStudio.Services.Icons.Default",
    name: "Thunder",
    category: "tool",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2175/2175377.png",
    name: "Github",
    category: "tool",
  },
];

const SkillsList = () => {
  const frontend_skills = skillsData.filter(
    (skill) => skill.category === "frontend"
  );

  const backend_skills = skillsData.filter(
    (skill) => skill.category === "backend"
  );
  const tools = skillsData.filter((skill) => skill.category === "tool");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box h="70%">
      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: useBreakpointValue({ base: "20%", md: "30%" }),
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "blue.400",
            zIndex: -1,
          }}
        >
          Technical Skills
        </Text>
      </Heading>
      <Tabs variant="unstyled" align="center">
        <TabList
          my={5}
          display="grid"
          gridTemplateColumns={isMobile ? "1fr 1fr" : "auto auto auto auto"}
          gridGap="10px"
        >
          <Tab
            _selected={{ color: "white", bg: "red.400" }}
            bg="blue.500"
            color="black"
            mx={3}
            rounded="md"
          >
            All
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "red.400" }}
            bg="blue.500"
            color="black"
            mx={3}
            rounded="md"
          >
            Frontend
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "red.400" }}
            bg="blue.500"
            color="black"
            mx={3}
            rounded="md"
          >
            Backend
          </Tab>{" "}
          <Tab
            _selected={{ color: "white", bg: "red.400" }}
            bg="blue.500"
            color="black"
            mx={3}
            rounded="md"
          >
            Tools
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {skillsData.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {frontend_skills.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {backend_skills.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {tools.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SkillsList;
