// RecipeListPage.jsx
import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Input,
  Center,
  Text,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = ({ onRecipeSelect }) => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const filteredRecipes = data.hits.filter(
    (recipe) =>
      recipe.recipe.label.toLowerCase().includes(searchRecipe.toLowerCase()) ||
      (recipe.recipe.healthLabels &&
        recipe.recipe.healthLabels.includes(searchRecipe.toLowerCase()))
  );

  return (
    <Box bg="blue.400" minH="100vh" p={4}>
      <Heading align="center" color="white" mb={4}>
        Winc Recipe Checker
      </Heading>
      <Center padding={2}>
        <Input
          bg="white"
          size="md"
          width="md"
          type="text"
          placeholder="Search recipes"
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
        />
      </Center>
      <SimpleGrid
        align="center"
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={4}
      >
        {filteredRecipes.map((hit) => (
          <Box
            bg="blue.50"
            key={hit.recipe.label}
            onClick={() => onRecipeSelect(hit.recipe)}
            cursor="pointer"
            p={4}
            boxShadow="md"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ boxShadow: "lg" }}
          >
            <Box height="200px" marginBottom="2rem">
              <Image
                maxHeight="200px"
                width='100%'
                marginBottom="2rem"
                src={hit.recipe.image}
                alt={hit.recipe.label}
                height="100%"
                objectFit="cover"
                borderRadius='md'
              />
            </Box>
            <Text color="grey" textTransform="uppercase" fontSize="sm" mt={1}>
              {hit.recipe.mealType || "Not available"}
            </Text>
            <Heading as="h3" size="md" mt={2} align="center">
              {hit.recipe.label}
            </Heading>
            <Text
              color="green"
              bg="green.100"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              mt={1}
            >
              {hit.recipe.dietLabels?.join(", ") || "Not available"}
            </Text>
            <p>Dish:</p>
            <Text textTransform="capitalize" fontWeight="bold">
              {" "}
              {hit.recipe.dishType || "Not available"}
            </Text>
            <p>Cautions:</p>
            <Text
              color="red.500"
              bg="red.100"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              mt={1}
            >
              {hit.recipe.cautions?.join(", ") || "Not available"}
            </Text>
            {hit.recipe.healthLabels && (
              <Text
                color="purple.700"
                bg="purple.100"
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="sm"
                mt={1}
              >
                {hit.recipe.healthLabels[2]}
              </Text>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
