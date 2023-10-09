import {
  Box,
  Flex,
  Icon,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import data from '../data';

export default function Sidebar() {
  const iconSize = useBreakpointValue({ base: '20px', md: '24px', lg: '28px' });
  const textSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  return (
    <Box bg="whitesmoke" h="100vh" p={4}>
      <VStack spacing={4}>
        {data.routes.sidebar.map((r) => (
          <NavLink
            to={r.to}
            key={r.to}
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
          >
            <Flex alignItems="center" gap={1}>
              <Icon as={r.icon} fontSize={iconSize} />
              <Text fontSize={textSize}>{r.title}</Text>
            </Flex>
          </NavLink>
        ))}
      </VStack>
    </Box>
  );
}
