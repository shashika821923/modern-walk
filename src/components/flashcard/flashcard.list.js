// FlashcardList.js

import React from 'react';
import { Box, Container } from '@mui/material';
import Flashcard from './flashcard.page';

const FlashcardList = ({ flashcards }) => {
  return (
    <Container maxWidth="md">
      <Box className="flashcard-list">
        {flashcards.map((flashcard, index) => (
          <Flashcard key={index} {...flashcard} className="flashcard" descriptionClass={ flashcard.category === "men's clothing" ? "mens-card-bg" : "womens-card-color"}/>
        ))}
      </Box>
    </Container>
  );
};

export default FlashcardList;
