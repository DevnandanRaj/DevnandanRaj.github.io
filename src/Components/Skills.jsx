import { Container } from "@chakra-ui/react";
import React from "react";
import SkillsList from "./SkillList";

const Skills = () => {
  return (
    <Container minH="100vh" maxW="7xl" id="Skills">
      <SkillsList />
    </Container>
  );
};

export default Skills;
