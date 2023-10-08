import { Flex, useBreakpointValue, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import data from '../data';

export default function Root() {
  const { pathname } = useLocation();
  const pathNameWithoutFWSlash = pathname.substring(1);
  const sidebarVisible = useBreakpointValue({ base: false, md: true });

  const pageTitle =
    data.routes.sidebar.find((r) => r.to === pathNameWithoutFWSlash)?.title ??
    'Home';

  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Flex
        flex="1"
        flexDirection={sidebarVisible ? 'row' : 'column'}
        height={sidebarVisible ? 'auto' : 'calc(100vh - 64px)'}
      >
        {sidebarVisible && <Sidebar />}
        <Flex direction="column" w="100%">
          <Text fontSize="xl" fontWeight="bold" p={4}>
            {pageTitle}
          </Text>
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
}
