import React from "react";
import {
  Box,
  Stack,
  Input,
  Text,
  Flex,
  Textarea,
  Button,
  useColorModeValue,
  Grid,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <Box mt="50px" color={useColorModeValue("black", "white")} id="contact">
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
          Contact
        </Text>
      </Heading>
      <Box
        display={["inline", "inline", "flex"]}
        className="contact"
        id="Contact"
        w={["100%", "97%", "79%"]}
        fontSize={30}
        m="auto"
        mt={{ base: 0, md: "5%", lg: "5%" }}
        h="500px"
      >
        <Box w={["100%", "80%", "50%"]} margin="auto">
          <Stack>
            <Text
              color="blue.500"
              fontSize={["20px", "25px", "30px"]}
              textAlign={["center", "center", "left"]}
            >
              Get in Touch
            </Text>
            <Grid
              justifyContent={{ base: "center", md: "left", lg: "left" }}
              alignItems={{ base: "center" }}
              gap="20px"
            >
              <Box mt="5px">
                <Flex gap="20px">
                  <Text fontSize={["20px", "30px", "40px"]} mt="5px">
                    <TfiEmail />
                  </Text>
                  <Text
                    id="contact-email"
                    fontSize={["14px", "20px", "22px"]}
                    mt={["4px", "", ""]}
                  >
                    <a
                      href="mailto:devnandanraj07@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      devnandanraj07@gmail.com
                    </a>
                  </Text>
                </Flex>
              </Box>
              <Box mt="5px">
                <Flex gap="20px">
                  <Text fontSize={["20px", "30px", "40px"]}>
                    <a
                      href="https://github.com/DevnandanRaj"
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <AiFillGithub />
                    </a>
                  </Text>
                  <Text
                    id="contact-github"
                    fontSize={["14px", "20px", "22px"]}
                    mt={["3px", "", ""]}
                  >
                    <a
                      href="https://github.com/DevnandanRaj"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </Text>
                </Flex>
              </Box>
              <Box mt="5px">
                <Flex gap="20px">
                  <Text fontSize={["20px", "30px", "40px"]}>
                    <a
                      href="https://www.linkedin.com/in/devnandanraj07"
                      alt=""
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <FaLinkedin />
                    </a>
                  </Text>
                  <Text
                    id="contact-linkedin"
                    fontSize={["14px", "20px", "22px"]}
                    mt={["1px", "", ""]}
                  >
                    <a
                      href="https://www.linkedin.com/in/devnandanraj07"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Devnandan Raj Sharma
                    </a>
                  </Text>
                </Flex>
              </Box>
              <Box mt="5px">
                <Flex gap="20px">
                  <Text fontSize={["20px", "30px", "40px"]}>
                    <a
                      href="https://github.com/DevnandanRaj"
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <IoCall />
                    </a>
                  </Text>
                  <Text
                    id="contact-phone"
                    fontSize={["14px", "20px", "22px"]}
                    mt={["1px", "", ""]}
                  >
                    + 91 7991132894
                  </Text>
                </Flex>
              </Box>
            </Grid>
          </Stack>
        </Box>
        <form
          action="https://getform.io/f/637f1040-b14e-46cb-8acd-1fe712a680eb"
          method="POST"
        >
          <Box
            w={["90%", "70%", "90%"]}
            mt={["100px", "100px", "0px"]}
            margin="auto"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            p="35px"
            borderRadius="20px"
          >
            <Stack>
              <Stack>
                <Text
                  color="blue.500"
                  fontSize={["20px", "25px", "30px"]}
                  textAlign={["center", "center", "left"]}
                  mt={["-10px", "", ""]}
                >
                  Message Me
                </Text>
                <Flex>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    size={["md", "lg", "lg"]}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    size={["md", "lg", "lg"]}
                    ml="20px"
                    required
                  />
                </Flex>
              </Stack>
              <Stack mt="20px">
                <Input
                  type="number"
                  name="number"
                  placeholder="Mobile Number"
                  size={["md", "lg", "lg"]}
                  m="auto"
                  mt="8%"
                  required
                />
              </Stack>
              <Stack mt="20px">
                <Textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  size={["md", "lg", "lg"]}
                  m="auto"
                  mt="8%"
                  required
                />
              </Stack>
              <Stack mt="20px">
                <Button
                  type="submit"
                  w={["50%", "30%", "50%"]}
                  h={["35px", "40px", "45px"]}
                  mt="5%"
                  ml={["56px", "170px", "100px"]}
                  size="lg"
                  fontSize={["15px", "19px", "20px"]}
                  bg="blue.500"
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Send
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Box>
      <Text
        textAlign="center"
        fontSize={{ base: "12px", md: "16px" }}
        marginTop="20px"
        color="teal"
      >
        Designed & Built By Devnandan Raj Sharma, 2023
      </Text>
    </Box>
  );
};

export default Contact;
