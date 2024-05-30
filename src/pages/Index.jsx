import { Box, Button, Container, Flex, Heading, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", price: "$199", image: "https://via.placeholder.com/150" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">Products</Button>
          <Button variant="link" color="white">About Us</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.700" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Products Section */}
      <Box py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {sampleProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} textAlign="center">
              <Image src={product.image} alt={product.name} mb={4} />
              <Heading size="md" mb={2}>{product.name}</Heading>
              <Text fontSize="lg" mb={4}>{product.price}</Text>
              <Button colorScheme="teal">Add to Cart</Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10} mt={10}>
        <Flex justifyContent="space-between" alignItems="center" px={10}>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <HStack spacing={4}>
            <FaFacebook size="24px" />
            <FaTwitter size="24px" />
            <FaInstagram size="24px" />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;