import React from "react";
import { Box, Heading, Image, Text, Button, List, ListItem,ListIcon } from "@chakra-ui/react";


export const RecipePage = ({ selectedRecipe, onBack }) => {
  return (
    <Box bg='white' align="center" p={55} boxShadow="lg" borderRadius="md">
      <Box bg='blue.200' p={4} mt={4} borderRadius="md" boxShadow="md">
      <Heading color='white' bg='blue.400' as="h2" size="lg" mt={4}>
        {selectedRecipe.label}
      </Heading>
      <Image boxSize='400px' borderRadius="md"
    objectFit='cover' src={selectedRecipe.image} alt={selectedRecipe.label} mt={4} p={4}  />
      <Text color='white' bg='blue.400' textTransform="capitalize"
        fontSize="md" fontWeight='bold' >Meal Type: {selectedRecipe.mealType || "N/A"}</Text>
      <Text bg='yellow.200' textTransform="capitalize"
        fontSize="md">Dish Type: {selectedRecipe.dishType || "N/A"}</Text>
      <Text bg='orange' textTransform="capitalize"
        fontSize="md">
        Total Cooking Time: {selectedRecipe.totalTime || "N/A"} minutes
      </Text>
      <Text bg='blue.100'>Diet Label: {selectedRecipe.dietLabels?.join(", ") || "N/A"}</Text>
      {selectedRecipe.healthLabels && (
        <Text color='white' bg='blue.600'>
          Health Labels:{" "}
          {selectedRecipe.healthLabels.map((label) => (
            <span key={label}>{label} </span>
          ))}
        </Text>
      )}
      <Text bg='yellow.200'>Cautions: {selectedRecipe.cautions?.join(", ") || "N/A"}</Text>
      <Text bg='orange'>
        Ingredients: {selectedRecipe.ingredientLines?.join(", ") || "N/A"}
      </Text>
      <Text bg='blue.100'>Servings: {selectedRecipe.yield || "N/A"}</Text>
      <Text Text color='white' bg='blue.600' fontWeight="bold" mt={4}>Total Nutrients:</Text>
      <List styleType="none" pl={0} mt={2}>
        <ListItem>
          Energy: {selectedRecipe.totalNutrients.ENERC_KCAL?.quantity || "N/A"}{" "}
          kcal
        </ListItem>
        <ListItem>
          Protein: {selectedRecipe.totalNutrients.PROCNT?.quantity || "N/A"} g
        </ListItem>
        <ListItem>Fat: {selectedRecipe.totalNutrients.FAT?.quantity || "N/A"} g</ListItem>
        <ListItem>
          Carbs: {selectedRecipe.totalNutrients.CHOCDF?.quantity || "N/A"} g
        </ListItem>
        <ListItem>
          Cholesterol: {selectedRecipe.totalNutrients.CHOLE?.quantity || "N/A"}{" "}
          mg
        </ListItem>
        <ListItem>
          Sodium: {selectedRecipe.totalNutrients.NA?.quantity || "N/A"} mg
        </ListItem>
      </List>
      
      <Button bg="blue.500" color="white" mt={5} p={5} onClick={onBack}>Back</Button>
      </Box>
    </Box>
  );
};
