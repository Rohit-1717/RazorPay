import { Button, VStack, Image, Text } from "@chakra-ui/react";
import React from "react";

function Card({ amount, img, checkouthandler }) {
  return (
    <VStack>
      <Image  boxSize='64' src={img} objectFit={"cover"} />
      <Text>₹ {amount}</Text>
      <Button onClick={()=>checkouthandler(amount)}>Buy Now</Button>
    </VStack>
  );
}

export default Card;
