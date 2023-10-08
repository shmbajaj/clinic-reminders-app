import { Center, Text, VStack } from '@chakra-ui/react';

export default function Index() {
  return (
    <Center h="100vh" w="100%">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          This is a demo for Clinic Reminders web App.
        </Text>
        <Text fontSize="lg" textAlign="center">
          Nothing to Check out.
        </Text>
      </VStack>
    </Center>
  );
}
