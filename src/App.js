import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";

const App = () => {
  const [searchedCountry, setSearchedCountry] = useState("");

  const handleSearch = (country) => {
    setSearchedCountry(country);
  };

  return (
    <div>
      <h1>Global Search</h1>
      <SearchBar onSearch={handleSearch} />
      <Map country={searchedCountry} />
    </div>
  );
};

export default App;
