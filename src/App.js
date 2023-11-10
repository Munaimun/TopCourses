import "./App.css";
import { apiUrl, filterData } from "./data";
import NavBar from "./Components/NavBar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output);
    } catch (error) {
      toast.error("something error occurd in apiUrl");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>
        <Cards courses={courses} />
      </div>
    </div>
  );
}

export default App;
