import React, { useState } from "react";
import "./list.css";
import person from "./person";

function List() {
  const [people, setPeople] = useState(person);
  const [head, setHead] = useState("5 Birthdays Today");

  return (
    <div className="contaner">
      <h1>{head}</h1>
      {people.map((person) => {
        return (
          <div className="list">
            <img src={person.img} height="80px" alt="dp" />
            <div className="item">
              <h3>{person.name}</h3>
              <p>{person.age}</p>
            </div>
          </div>
        );
      })}
      <button
        onClick={() => {
          setPeople([]);
          setHead("0 Birthdays Today");
        }}
      >
        {" "}
        Clear All
      </button>
    </div>
  );
}

export default List;
