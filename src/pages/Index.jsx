import { useState } from "react";
import { Container, VStack, HStack, Button, Box, Text, SimpleGrid } from "@chakra-ui/react";

const jobList = [
  { id: 1, title: "Product Manager", category: "Product" },
  { id: 2, title: "UX Designer", category: "Design" },
  { id: 3, title: "Frontend Engineer", category: "Engineering" },
  { id: 4, title: "Backend Engineer", category: "Engineering" },
  { id: 5, title: "Graphic Designer", category: "Design" },
  { id: 6, title: "Product Owner", category: "Product" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobList : jobList.filter(job => job.category === filter);

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6}>
        <Text fontSize="4xl" fontWeight="bold">Job Board</Text>
        <HStack spacing={4}>
          <Button onClick={() => setFilter("All")} colorScheme={filter === "All" ? "blue" : "gray"}>All</Button>
          <Button onClick={() => setFilter("Product")} colorScheme={filter === "Product" ? "blue" : "gray"}>Product</Button>
          <Button onClick={() => setFilter("Design")} colorScheme={filter === "Design" ? "blue" : "gray"}>Design</Button>
          <Button onClick={() => setFilter("Engineering")} colorScheme={filter === "Engineering" ? "blue" : "gray"}>Engineering</Button>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
          {filteredJobs.map(job => (
            <Box key={job.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">{job.title}</Text>
              <Text mt={2}>{job.category}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;