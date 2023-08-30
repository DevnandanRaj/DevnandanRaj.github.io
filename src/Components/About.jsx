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
      id="about"
      class="about section"
    >
      <Flex flex={1} justifyContent="center">
        <Image
          class="home-img"
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
              class="about.about.section"
            >
              About Me
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"} // Adjusted text color to be more visible
            textAlign="left"
            position={"relative"}
            id="user-detail-intro"
          >
          Welcome to my portfolio! I'm Devnandan Raj Sharma, a passionate Full Stack developer with expertise in the MERN stack, HTML, CSS, and JavaScript. I completed a rigorous 30-week Full Stack Development course at Masai School, where I honed my skills in building practical solutions.

My goal is to make a meaningful impact in the tech industry by collaborating with companies to fulfill their unique needs and goals. I thrive on challenging projects that require problem-solving and innovative thinking, delivering exceptional results.

I value collaboration and believe in the power of teamwork. I enjoy working in diverse teams that foster open communication, enabling continuous learning and growth.

In my portfolio, you'll find a showcase of my projects, demonstrating my utilization of various technologies and frameworks. I stay updated with the latest trends and advancements, constantly expanding my skill set.

I'm actively seeking opportunities to contribute to well-established organizations, offering a stable and supportive environment for continuous learning and development. If you have inquiries or potential collaborations, feel free to reach out. Let's create something remarkable using cutting-edge technologies and innovative solutions!
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
