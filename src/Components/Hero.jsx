import { Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Devnandan_Raj_Resume from "../Assets/Devnandan-Raj-Sharma-Resume.pdf";
export default function Hero() {
  return (
    <Container maxW={"6xl"} margin="110px auto" id="Home">
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
          lineHeight={"110%"}
        >
          Hii 👋 I'm {`${" "}`}
          <Text as={"span"} color={"blue.400"}>
            Devnandan Raj Sharma
          </Text>
        </Heading>
        <Text fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}>
          <Typewriter
            options={{
              strings: [
                "A Full Stack Developer",
                "A Software Engineer",
                "A Problem Solver",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Text>

        <Text
          color={"gray.500"}
          maxW={"3xl"}
          fontSize={{ base: "sm", sm: "lg", md: "xl" }}
        >
          As a skilled Full Stack Developer trained in the MERN stack at Masai
          School, I am actively seeking opportunities to join a startup. With a
          passion for continuous learning and a dedication to delivering
          exceptional results, I aim to enhance my skills and contribute as an
          asset to the organization. Let's connect and create something
          remarkable together!
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"blue.400"}
            _hover={{ bg: "red.500" }}
          >
            <a
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1ElM0jh3ilAPRCeDVMniGCiojkMUExcgh/view?usp=drive_link"
                )
              }
              href={Devnandan_Raj_Resume}
              target={"_blank"}
              download
            >
              Resume
            </a>
          </Button>
          <Button
            rounded={"full"}
            px={6}
            bg={"blue.400"}
            _hover={{ bg: "red.500" }}
          >
            <a href="/#Project">Projects</a>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
