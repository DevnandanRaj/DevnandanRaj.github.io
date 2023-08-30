import { GridItem, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SkillCard = ({ icon, name }) => {
  return (
    <GridItem
      p={5}
      rounded="2xl"
      _hover={{
        boxShadow: "0 0 5px #007FFF",
        transform: "scale(1.1)",
        transition: "all .2s ease-in-out",
      }}
      
    >
      <VStack class="skills-card">
        <Image src={icon} w="80%"  class="skills-card-img"/>
        <Text fontSize="sm"  class="skills-card-name">{name}</Text>
      </VStack>
    </GridItem>
  );
};

export default SkillCard;
