import { useState } from "react";

export const useLoadData = (length) => {
  const loadedItems = [...Array(length)].map((_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));
  const [items, setItems] = useState(loadedItems);
  return {items, setItems};
};
