import "./App.css";
import { apiUrl, filterData } from "./data";
import NavBar from "./Components/NavBar";
import Filter from "./Components/Filter";
import Spinner from "./Components/Spinner";
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
      setCourses(output.data);
    } catch (error) {
      toast.error("something error occurd in apiUrl");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-slate-600 min-h-screen flex flex-col">
      <div>
        <NavBar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? <Spinner /> : <Cards courses={courses} />}
      </div>
    </div>
  );
}

export default App;
