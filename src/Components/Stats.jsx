import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <Box
      id="Stats"
      h="auto"
      pt={20}
      w="100%"
      fontFamily="Roboto Mono, monospace"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="30px"
    >
      <Center>
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={10}>
          <Text
            as="span"
            position="relative"
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
            Github
          </Text>
        </Heading>
      </Center>

      <Box
        padding={{ base: "5px", md: "30px" }}
        boxShadow="rgb(0, 0, 0) 3px 2px 10px 1px"
        borderRadius="10px"
        width={{ base: "90%", md: "70%" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img
          style={{ display: "block", margin: "auto", width: "60%" }}
          src="https://github-readme-stats.vercel.app/api?username=DevnandanRaj&theme=react&hide_border=false&include_all_commits=false&count_private=false"
          alt="GitHub Stats"
          id="github-stats-card"
        />
      </Box>

      <Box
        padding={{ base: "5px", md: "30px" }}
        boxShadow="rgb(0, 0, 0) 3px 2px 10px 1px"
        borderRadius="20px"
        width="70%"
      >
        <img
          style={{ display: "block", margin: "auto", width: "60%" }}
          src="https://github-readme-streak-stats.herokuapp.com/?user=DevnandanRaj&theme=react&hide_border=false"
          alt="GitHub Streak"
          id="github-streak-stats"
        />
      </Box>

      <Box
        padding={{ base: "5px", md: "30px" }}
        boxShadow="rgb(0, 0, 0) 3px 2px 10px 1px"
        borderRadius="10px"
        width="70%"
      >
        <img
          style={{ display: "block", margin: "auto", width: "60%" }}
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=DevnandanRaj&theme=react&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
          alt="Top Languages"
          id="github-top-langs"
        />
      </Box>

      <Box
        padding={{ base: "5px", md: "30px" }}
        boxShadow="rgb(0, 0, 0) 3px 2px 10px 1px"
        borderRadius="10px"
        width="70%"
      >
        <Text style={{ base: "10px", md: "20px" }} textAlign="center">
          GitHub Trophies
        </Text>
        <img
          style={{ display: "block", margin: "auto", width: "60%" }}
          src="https://github-profile-trophy.vercel.app/?username=DevnandanRaj&theme=nord&no-frame=false&no-bg=true&margin-w=4"
          alt="GitHub Trophies"
        />
      </Box>

      <Box
        padding={{ base: "5px", md: "30px" }}
        boxShadow="rgb(0, 0, 0) 3px 2px 10px 1px"
        borderRadius="10px"
        width="70%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <div className="react-activity-calendar">
          <GitHubCalendar username="DevnandanRaj" />
        </div>
      </Box>
    </Box>
  );
};

export default Stats;
