import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function People() {
  const baseUrl = "https://swapi.dev/api/";
  const [peopleData, setPeopleData] = useState({});
  let { id } = useParams();
  console.log(id);
  const peopleUrl = `${baseUrl}people/${id}`;
  console.log(peopleUrl);

  const fetchPeopleData = () => {
    console.log({ peopleUrl });
    fetch(peopleUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPeopleData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(fetchPeopleData, []);

  const displayData = [];

  for (const [key, value] of Object.entries(peopleData)) {
    displayData.push(
      <div>
        {key} : {value}
      </div>
    );
  }

  return <div className="peopleContainer">{displayData}</div>;
}
