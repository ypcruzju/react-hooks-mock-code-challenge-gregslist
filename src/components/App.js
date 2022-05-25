import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listings, setListings] = useState()

useEffect(() => {
  fetch("/listings")
  .then((r) => r.json())
  .then(data => setListings(data));
}, [])

console.log(listings)

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
