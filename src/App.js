import "./App.css";
import { apiUrl, filterData } from "./data";
import NavBar from "./Components/NavBar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //     } catch (error) {

  //     }
  //   };
  // });
  return (
    <div className="App">
      <NavBar />
      <Filter filterData={filterData} />
      <Cards />
    </div>
  );
}

export default App;
