import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Header() {
  const mobileLogoSize = useBreakpointValue({ base: '150px', md: '200px' });
  const mobileFontSize = useBreakpointValue({ base: 'lg', md: 'xl' });

  return (
    <Box as="header" py={4} px={4} bg="gray.100">
      <Flex alignItems="center">
        {/* Right Side - Mobile: Logo and Web App Name */}
        <Link to="/">
          <HStack spacing={2}>
            <Box as="img" src="/logo.svg" alt="Logo" maxH={mobileLogoSize} />
            <Heading fontSize={mobileFontSize}>Clinic Reminders</Heading>
          </HStack>
        </Link>

        {/* Center - Logo and Web App Name */}
        <Spacer />

        <HStack spacing={4}>
          {/* Left Side - Logout Button */}
          <Button
            colorScheme="blue"
            variant="solid"
            fontSize={mobileFontSize}
            _hover={{ bg: 'blue.600' }}
          >
            Logout
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
