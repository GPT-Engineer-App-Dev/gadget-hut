import { Box, Button, Container, Flex, Heading, HStack, Image, Input, SimpleGrid, Text, VStack, Checkbox, CheckboxGroup, Stack, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 699, brand: "BrandA", type: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: 999, brand: "BrandB", type: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", price: 199, brand: "BrandA", type: "Wearables", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Headphones", price: 149, brand: "BrandC", type: "Accessories", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Tablet", price: 499, brand: "BrandB", type: "Electronics", image: "https://via.placeholder.com/150" },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterProducts(query, selectedBrands, selectedTypes, priceRange);
  };

  const handleBrandChange = (brands) => {
    setSelectedBrands(brands);
    filterProducts(searchQuery, brands, selectedTypes, priceRange);
  };

  const handleTypeChange = (types) => {
    setSelectedTypes(types);
    filterProducts(searchQuery, selectedBrands, types, priceRange);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
    filterProducts(searchQuery, selectedBrands, selectedTypes, value);
  };

  const filterProducts = (query, brands, types, price) => {
    setFilteredProducts(
      sampleProducts.filter(product =>
        product.name.toLowerCase().includes(query) &&
        (brands.length === 0 || brands.includes(product.brand)) &&
        (types.length === 0 || types.includes(product.type)) &&
        product.price >= price[0] &&
        product.price <= price[1]
      )
    );
  };

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
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          bg="white"
          color="black"
          borderRadius="md"
          width="300px"
        />
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.700" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Filters Section */}
      <Box py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Filter Products</Heading>
        <Flex justifyContent="center" mb={10}>
          <VStack spacing={5} align="start">
            <Heading size="md">Brand</Heading>
            <CheckboxGroup onChange={handleBrandChange}>
              <Stack spacing={2} direction="column">
                <Checkbox value="BrandA">BrandA</Checkbox>
                <Checkbox value="BrandB">BrandB</Checkbox>
                <Checkbox value="BrandC">BrandC</Checkbox>
              </Stack>
            </CheckboxGroup>

            <Heading size="md">Type</Heading>
            <CheckboxGroup onChange={handleTypeChange}>
              <Stack spacing={2} direction="column">
                <Checkbox value="Electronics">Electronics</Checkbox>
                <Checkbox value="Wearables">Wearables</Checkbox>
                <Checkbox value="Accessories">Accessories</Checkbox>
              </Stack>
            </CheckboxGroup>

            <Heading size="md">Price Range</Heading>
            <Slider
              aria-label="price-range-slider"
              defaultValue={[0, 1000]}
              min={0}
              max={1000}
              step={50}
              onChangeEnd={handlePriceChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6} index={0} />
              <SliderThumb boxSize={6} index={1} />
            </Slider>
            <Text>Price: ${priceRange[0]} - ${priceRange[1]}</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Products Section */}
      <Box py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} textAlign="center">
              <Image src={product.image} alt={product.name} mb={4} />
              <Heading size="md" mb={2}>{product.name}</Heading>
              <Text fontSize="lg" mb={4}>${product.price}</Text>
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