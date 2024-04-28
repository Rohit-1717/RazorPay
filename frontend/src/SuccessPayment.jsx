import { Heading, VStack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";

function SuccessPayment() {
  const searchQuery = useSearchParams()[0];

  console.log(searchQuery.get('refer'));
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Successfull</Heading>
        <Text>Reference Number:111222333</Text>
      </VStack>
    </Box>
  );
}

export default SuccessPayment;
