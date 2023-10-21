import React from "react";
import { SearchResultItemType } from "./models/SearchResultItemType";

export const SearchResultItem = ({ item }: { item: SearchResultItemType }) => {
  return (
    <li className="search-result">
      <span className="city">{item.city}</span>
      <span className="state">{item.state}</span>
      <span className="country">{item.country}</span>
    </li>
  );
};
