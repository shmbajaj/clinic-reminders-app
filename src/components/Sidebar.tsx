import { AtSignIcon, BellIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Icon,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const iconSize = useBreakpointValue({ base: '20px', md: '24px', lg: '28px' });
  const textSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  return (
    <Box bg="gray.500" color="white" h="100vh" p={4}>
      <VStack spacing={4}>
        <Link to="/patients">
          <Flex alignItems="center" gap={1}>
            <Icon as={AtSignIcon} fontSize={iconSize} />
            <Text fontSize={textSize}>Patients</Text>
          </Flex>
        </Link>
        <Link to="/reminders">
          <Flex alignItems="center" gap={1}>
            <Icon as={BellIcon} fontSize={iconSize} />
            <Text fontSize={textSize}>Reminders</Text>
          </Flex>
        </Link>
      </VStack>
    </Box>
  );
}
