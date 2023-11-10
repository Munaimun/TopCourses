import "./App.css";
import { apiUrl, filterData } from "./data";
import NavBar from "./Components/NavBar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output.data); // Add this line
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
}

export default App;
