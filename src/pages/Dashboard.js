import React, { useState, useEffect, setState } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../database/firebase";
import "../css/home.css";

function Dashboard({ user }) {
  const [redirect, setredirect] = useState(null);
  const [data, setData] = useState(null);
  const [pulled, setPulled] = useState(false);
  useEffect(() => {
    if (!pulled) {
      getUserData(user, (retrivedData) => {
        console.log(retrivedData);
        if (retrivedData) {
          setData(retrivedData);
          setPulled(true);
        }
      });
    }
  }, []);

  function dateToString(date) {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  console.log(data);

  return (
    <div>
      {data ? (
        <table className="table table-bordered table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Activity</th>
              <th scope="col">Reps</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((workout, index) => {
              return (
                <tr key={workout}>
                  <td>{data[workout].name}</td>
                  <td>{data[workout].total}</td>
                  <td>{dateToString(new Date(data[workout].updatedAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No Workouts</p>
      )}
    </div>
  );
}

export default Dashboard;
