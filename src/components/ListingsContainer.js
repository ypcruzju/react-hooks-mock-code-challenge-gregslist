import React from "react";
import ListingCard from "./ListingCard";




function ListingsContainer(props) {
  console.log(props.listings)
  return (
    <main>
      <ul className="cards">
        <ListingCard description={props.listings}/>
      </ul>
    </main>
  );
}

export default ListingsContainer;
