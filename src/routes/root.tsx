import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Root() {
  const sidebarVisible = useBreakpointValue({ base: false, md: true });

  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Flex
        flex="1"
        flexDirection={sidebarVisible ? 'row' : 'column'}
        height={sidebarVisible ? 'auto' : 'calc(100vh - 64px)'}
      >
        {sidebarVisible && <Sidebar />}
        <Box >
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
}
