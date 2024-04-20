// Flashcard.js

import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Flashcard = ({ title, image, description, className, price, descriptionClass }) => {
  return (
    <Card className={className}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className="flashcard-header">
          {title}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        style={{ borderRadius: "10px 10px 0 0", objectFit: "cover" }}
      />
      <CardContent className={descriptionClass}>
        <Typography gutterBottom variant="h6" component="div" className="flashcard-price">
          Rs {price}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="flashcard-description">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Flashcard;
