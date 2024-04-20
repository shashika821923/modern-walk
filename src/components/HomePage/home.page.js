// Homepage.js or App.js

import React, { Fragment, useEffect, useState } from "react";
import FlashcardList from "../flashcard/flashcard.list";
import { assignInvoicesToSalaryCycle } from "./api.calls";
import { Card, CardContent } from "@mui/material";

const Homepage = () => {
  const [flashCardsContent, setFlashCardContent] = useState([]);

  useEffect(() => {
    assignInvoicesToSalaryCycle().then((products) => {
      setFlashCardContent(products);
    });
  }, []);

  const handleClick = (endpoint) => {
    // Redirect to the '/mens' route on the same domain
    window.location.href = `/${endpoint}`;
  };

  return (
    <div>
      <div className="main-div-panel">
        <Fragment>
          <h4 className="title-text-align">Flash cards</h4>
          <FlashcardList flashcards={flashCardsContent.slice(0, 4)} />
        </Fragment>
        <Fragment>
          <h4 className="title-text-align">Categories</h4>
          <div className="card-container">
            <Card
              className="half-width-card mens-bg-color"
              onClick={() => handleClick("mens")}
            >
              <CardContent className="centered-card-content">
                Men's Clothing
              </CardContent>
            </Card>
            <div className="card-spacing"></div> {/* Space between cards */}
            <Card
              className="half-width-card womens-bg-color"
              onClick={() => handleClick("womens")}
            >
              <CardContent className="centered-card-content">
                Women's Clothing
              </CardContent>
            </Card>
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default Homepage;
