import React, { useState } from "react";
import ReactDOM from "react-dom";
//import axios from "axios";
import "./styles.css";

function App() {
  //const [repos, setRepos] = useState(null);
  const [week, setWeek] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [annual, setAnnual] = useState(0);
  const [divide, setDivide] = useState(1);
  const [divident, setDivident] = useState(0);
  const [error, setError] = useState(false);

  const fetchData = (weekly, divident) => {
    let base = parseInt(weekly);
    let daily = base / 7;
    let monthly = daily * 30;
    let per_divident = monthly;
    let yearly = daily * 365;

    setError(false);
    if (isNaN(divident) || isNaN(week)) {
      setError(true);
    }

    if (divident) {
      per_divident = monthly / parseInt(divident);
    }
    console.log("here");

    setWeek(base);
    setMonth(monthly);
    setDay(daily);
    setDivident(per_divident);
    setAnnual(yearly);
  };

  return (
    <div className="App">
      <h1>Bhaloo the rent analyzer</h1>
      <div>
        <input
          className="base-rent"
          placeholder="Weekly Rent"
          onChange={(e) => {
            setWeek(parseInt(e.target.value));
            setError(isNaN(Number(e.target.value)));
            fetchData(parseInt(e.target.value), parseInt(divide));
          }}
        ></input>
      </div>
      <div>
        <input
          className="base-rent"
          placeholder="Number of Dividents"
          onChange={(e) => {
            setDivide(parseInt(e.target.value));
            setError(isNaN(Number(e.target.value)));
            console.log(e.target.value);
            console.log(week);
            fetchData(week, parseInt(e.target.value));
          }}
        ></input>
      </div>
      <div>
        <div className="analytics">
          <h3>Week rent is ${week}</h3>
          <h3>Day rent is ${day}</h3>
          <h3>Month rent is ${month}</h3>
          <h3>Divided rent per person ${divident}</h3>
        </div>
        <div>
          <h2>Estimated Annual rent is ${annual}</h2>
        </div>
        {error ? (
          <div>
            <h2 className="error">Enter Valid Number</h2>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
