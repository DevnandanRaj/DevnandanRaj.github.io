import { React, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useColorMode,
  Text,
  Image,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";
import DrawerExample from "./SideBar";
import Logo from "../Assets/Logo"


function handleResume() {
  const resumeUrl = "https://drive.google.com/u/0/uc?id=1ElM0jh3ilAPRCeDVMniGCiojkMUExcgh&export=download";
  window.open(resumeUrl, "_blank");
}
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    {/* there is a navbar */}
      <Box
        id="nav-menu"
        as="header"
        bg={colorMode === "light" ? "white" : "#1a202c"}
        px={4}
        position="fixed"
        w="100%"
        zIndex={"1000"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        top={"0px"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          m="auto"
          width={"97%"}
        >
          <Flex
            alignItems={"center"}
            className="fontClass"
            w={{ base: "50%" }}
            fontSize={"42px"}
          >
            <Logo/>
          </Flex>

          <Flex
            w={{ base: "20px", lg: "90%", xl: "70%" }}
            display={{ base: "none", lg: "block" }}
            alignItems={"center"}
            justifyContent="end"
          >
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"row"}
              fontSize="18px"
              alignItems={"center"}
            >
              <Button
                onClick={() => {
                  handleClickScroll("home");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <a className="nav-link home">
                  <Flex alignItems={"center"}>
                    <svg
                      fill={colorMode === "light" ? "black" : "white"}
                      width="24"
                      height="24"
                      transform="scale(0.7)"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M6 23h-3v-10l8.991-8.005 9.009 8.005v10h-3v-9h-12v9zm1-2h10v2h-10v-2zm0-3h10v2h-10v-2zm10-3v2h-10v-2h10zm-5-14.029l12 10.661-1.328 1.493-10.672-9.481-10.672 9.481-1.328-1.493 12-10.661z" />
                    </svg>
                    <Text ml="10px">Home</Text>
                  </Flex>
                </a>
              </Button>

              <Button
                colorScheme="gray"
                onClick={() => {
                  handleClickScroll("about");
                }}
                variant="ghost"
              >
                <a className="nav-link about">
                  <Flex alignItems={"center"}>
                    <svg
                      fill={colorMode === "light" ? "black" : "white"}
                      transform="scale(0.7)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                    </svg>
                    <Text ml="10px">About</Text>
                  </Flex>
                </a>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("skills");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <a className="nav-link skills">
                  <Flex alignItems={"center"}>
                    <svg
                      fill={colorMode === "light" ? "black" : "white"}
                      transform="scale(0.7)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.27 19.743l-11.946-11.945c-.557-.557-.842-1.331-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.375-1.537-3.723-1.537-.507 0-1.015.072-1.506.216l3.17 3.17c.344 1.589-1.959 3.918-3.566 3.567l-3.17-3.17c-.145.492-.217 1-.217 1.509 0 1.347.51 2.691 1.537 3.721 1.135 1.136 2.66 1.646 4.146 1.53.783-.06 1.557.226 2.113.783l11.947 11.944c.468.468 1.103.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.73-1.763zm-1.77 2.757c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm-8.375-15.753l6.723-6.747 4.152 4.128-6.722 6.771-1.012-1.012 5.488-5.533c.165-.165.165-.435-.001-.602-.166-.165-.436-.165-.601 0l-5.489 5.533-.935-.936 5.495-5.539c.166-.166.166-.437 0-.603-.168-.166-.436-.166-.603.001l-5.494 5.539-1.001-1zm-3.187 9.521l-5.308 5.35c-.166.166-.437.166-.603 0-.165-.166-.166-.436 0-.602l5.308-5.351-.936-.935-5.301 5.343c-.165.168-.435.167-.601.001-.166-.167-.166-.436 0-.602l5.3-5.343-1.004-1.004-5.745 5.787-1.048 5.088 5.203-.937 5.743-5.786-1.008-1.009z" />
                    </svg>
                    <Text ml="10px">Skills</Text>
                  </Flex>
                </a>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("projects");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <a className="nav-link projects">
                  <Flex alignItems={"center"}>
                    <svg
                      fill={colorMode === "light" ? "black" : "white"}
                      transform="scale(0.7)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-3.409c-3.006 0-7.588-.523-10-2.256v2.434c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.434c-2.418 1.738-7.005 2.256-10 2.256zm0-14.646c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256z" />
                    </svg>
                    <Text ml="10px">Projects</Text>
                  </Flex>
                </a>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("contact");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <a className="nav-link contact">
                  <Flex alignItems={"center"}>
                    <svg
                      fill={colorMode === "light" ? "black" : "white"}
                      transform="scale(0.7)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 0c-1.105 0-2 .896-2 2v18.678c-.001 2.213 3.503 3.322 7.005 3.322 3.498 0 6.995-1.106 6.995-3.322v-18.678c0-1.104-.895-2-2-2h-10zm5 22c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm5-4h-10v-14h10v14z" />
                    </svg>
                    <Text ml="10px">Contact</Text>
                  </Flex>
                </a>
              </Button>

              <Button
                className="nav-link resume"
                onClick={handleResume}
                id="resume-button-1"
                colorScheme="teal"
                size="md"
              >
                <a
                  id="resume-link-1"
                  href="https://drive.google.com/file/d/1ElM0jh3ilAPRCeDVMniGCiojkMUExcgh"
                  target="_blank"
                >
                  <Flex alignItems={"center"} mr={"4px"} ml="10px">
                    <Text mr="8px">Resume</Text> <BiDownload />
                  </Flex>
                </a>
              </Button>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>

          <Box display={{ base: "block", lg: "none" }}>
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
              <DrawerExample
                handleClickScroll={handleClickScroll}
                handleResume={handleResume}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}