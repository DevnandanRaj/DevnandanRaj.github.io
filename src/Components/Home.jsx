import { Box, Button, ChakraProvider, Heading, Link, Stack, Text, IconButton, useDisclosure, Collapse } from '@chakra-ui/react';
import { FaDownload, FaBars } from 'react-icons/fa';
import React, { useState } from 'react';

function Home() {
  const [activeSection, setActiveSection] = useState('');
  const { isOpen, onToggle } = useDisclosure();

  const handleSectionClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Code to handle resume download goes here
  };

  const languages = ['C++', 'Java', 'HTML5', 'JavaScript'];
  const techStacks = [
    'Netlify',
    'Vercel',
    'React',
    'React Native',
    'React Router',
    'Redux',
    'Node.js',
    'Apache',
    'MySQL',
    'Canva',
  ];

 return (
  <ChakraProvider>
    <Box p={4}>
      <Box bg="gray.200" p={4} mb={4} display="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="lg">
          Devnandan Raj Sharma
        </Heading>
        <IconButton icon={<FaBars />} onClick={onToggle} display={{ base: 'block', md: 'none' }} />
        <Stack direction="row" spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Link onClick={() => handleSectionClick('home')} textDecoration={activeSection === 'home' ? 'underline' : 'none'}>
            Home
          </Link>
          <Link onClick={() => handleSectionClick('about')} textDecoration={activeSection === 'about' ? 'underline' : 'none'}>
            About
          </Link>
          <Link
            onClick={() => handleSectionClick('projects')}
            textDecoration={activeSection === 'projects' ? 'underline' : 'none'}
          >
            Projects
          </Link>
          <Link onClick={() => handleSectionClick('skills')} textDecoration={activeSection === 'skills' ? 'underline' : 'none'}>
            Skills
          </Link>
          <Link onClick={() => handleSectionClick('contact')} textDecoration={activeSection === 'contact' ? 'underline' : 'none'}>
            Contact
          </Link>
          <Button leftIcon={<FaDownload />} onClick={handleResumeDownload}>
            Resume
          </Button>
        </Stack>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box bg="gray.200" p={4} mb={4}>
          <Stack direction="column" spacing={4}>
            <Link onClick={() => handleSectionClick('home')} textDecoration={activeSection === 'home' ? 'underline' : 'none'}>
              Home
            </Link>
            <Link onClick={() => handleSectionClick('about')} textDecoration={activeSection === 'about' ? 'underline' : 'none'}>
              About
            </Link>
            <Link
              onClick={() => handleSectionClick('projects')}
              textDecoration={activeSection === 'projects' ? 'underline' : 'none'}
            >
              Projects
            </Link>
            <Link onClick={() => handleSectionClick('skills')} textDecoration={activeSection === 'skills' ? 'underline' : 'none'}>
              Skills
            </Link>
            <Link onClick={() => handleSectionClick('contact')} textDecoration={activeSection === 'contact' ? 'underline' : 'none'}>
              Contact
            </Link>
            <Button leftIcon={<FaDownload />} onClick={handleResumeDownload}>
              Resume
            </Button>
          </Stack>
        </Box>
      </Collapse>
      <Box as="section" id="home">
        <Heading as="h3" size="md" mb={2}>
          Home
        </Heading>
        <Text>Welcome to my portfolio website!</Text>
      </Box>
      <Box as="section" id="about">
        <Heading as="h3" size="md" mb={2}>
          About
        </Heading>
        <Text>Here's some information about me...</Text>
      </Box>
      <Box as="section" id="projects">
        <Heading as="h3" size="md" mb={2}>
          Projects
        </Heading>
        <Text>Check out my latest projects...</Text>
      </Box>
    <Box as="section" id="skills">
  <Heading as="h3" size="md" mb={2}>
    Skills
  </Heading>
  <Text>Check out my skills:</Text>
  <Text as="strong">Languages:</Text>
  <ul>
    {languages.map((language, index) => (
      <li key={index}>{language}</li>
    ))}
  </ul>
  <Text as="strong">Tech Stacks:</Text>
  <ul>
    {techStacks.map((tech, index) => (
      <li key={index}>{tech}</li>
    ))}
  </ul>
</Box>
<Box as="section" id="contact">
  <Heading as="h3" size="md" mb={2}>
    Contact
  </Heading>
  <Text>Feel free to contact me:</Text>
  <Text>Email: your-email@example.com</Text>
  <Text>Phone: 123-456-7890</Text>
</Box>
</Box>
</ChakraProvider>
);
}

export default Home;