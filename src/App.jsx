import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { data } from './utils/data';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelection = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider>
      {selectedRecipe ? (
        <RecipePage selectedRecipe={selectedRecipe} onBack={handleBack} />
      ) : (
        <RecipeListPage recipes={data.hits} onRecipeSelect={handleRecipeSelection} />
      )}
    </ChakraProvider>
  );
};

