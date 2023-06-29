import React from "react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const imageBoxSize = useBreakpointValue({
    base: "200px",
    md: "300px",
    lg: "400px",
    xl: "600px",
  });

  return (
    <Flex
      minH={"100vh"}
      margin="40px"
      gap={{ base: "20px", md: "200px" }}
      direction={{ base: "column", xl: "row" }}
      alignItems="center"
      justifyContent="center"
      id="About"
    >
      <Flex flex={1} justifyContent="center">
        <Image
          borderRadius="full"
          boxSize={imageBoxSize}
          src="https://avatars.githubusercontent.com/u/115460502?v=4"
          alt="Devnandan Raj Sharma"
        />
      </Flex>

      <Flex p={8} flex={1} flexDirection="column">
        <Stack spacing={6} w={"full"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "10%", md: "20%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              About Me
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"} // Adjusted text color to be more visible
            textAlign="left"
            position={"relative"}
          >
            Welcome to my portfolio! I'm Devnandan Raj Sharma, a passionate Full
            Stack developer with a strong background in Computer Science
            Engineering. I recently completed a rigorous 30-week Full Stack
            Development course at Masai School, where I honed my skills and
            expertise. My goal is to make a meaningful impact in the tech
            industry by leveraging my knowledge and abilities to fulfill the
            unique needs and goals of every company I collaborate with. I enjoy
            working on challenging projects that push my boundaries and allow me
            to deliver exceptional results. Collaboration is at the core of my
            work style, and I thrive in diverse teams that foster open
            communication. I believe that great achievements are the result of
            collective efforts and the power of teamwork. I'm actively seeking
            opportunities to contribute to well-established organizations that
            offer a stable and supportive environment for continuous learning
            and development. Thank you for visiting my portfolio, where I
            showcase my projects, skills, and accomplishments. If you have any
            inquiries or potential collaborations, please feel free to reach
            out. Let's create something remarkable together!
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
            >
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/devnandanraj07"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </Button>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
            >
              <a
                target={"_blank"}
                href="https://github.com/DevnandanRaj"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default About;
