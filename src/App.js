import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function App() {
  const [peopleData, setPeopleData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  const baseUrl = "https://swapi.dev/api/";
  const allPeopleUrl = baseUrl + "people/";

  const fetchAllPeople = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPeopleData(data.results);
        setTotalCount(data.count);
        setNext(data.next);
        setPrevious(data.previous);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => fetchAllPeople(allPeopleUrl), []);

  const createGrids = () => {
    if (peopleData) {
      return peopleData.map((people, index) => {
        const ids = people.url.split("/");
        const people_id = ids[ids.length - 2];

        return (
          <div className="gridCell" key={index}>
            <Link to={`/people/${people_id}`}>
              <div>{people.name}</div>
              <div>{people.height}</div>
            </Link>
          </div>
        );
      });
    }
  };

  const grids = createGrids();

  return (
    <div className="App">
      <h1>All People Data</h1>
      <div>{grids}</div>
    </div>
  );
}
