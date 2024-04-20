import React, { Fragment, useEffect, useState } from "react";
import { getItemsInCategory } from "../HomePage/api.calls";
import FlashcardList from "../flashcard/flashcard.list";
import CircularProgress from "@mui/material/CircularProgress";

export const MensDressListing = () => {
  const [url, setUrl] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/").filter((part) => part.trim() !== "");
    const lastPart = parts[parts.length - 1];
    setUrl(lastPart);
  }, []);

  useEffect(() => {
    url !== '' && getItemsInCategory(
      url === "mens" ? "men's clothing" : "women's clothing"
    ).then((data) => {
      setItems(data);
      setIsLoading(false);
    });
  }, [url]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <Fragment>
      <div className="main-div-panel">
        <Fragment>
          <h4 className="title-text-align">
            {url === "mens" ? "Men's clothing" : "Women's clothing"}
          </h4>
          {items.length > 0 && <FlashcardList flashcards={items} />}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            {isLoading && <CircularProgress />}
            {!isLoading && items.length === 0 && 'No items found'}
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
};
