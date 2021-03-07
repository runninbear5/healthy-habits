// Import dependencies
import React, { useRef, useState, useEffect, useContext } from "react";
import * as ml5 from 'ml5';
import Loader from 'react-loader-spinner';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import useInterval from '@use-it/interval';
import Chart from './Chart';
import "../css/ExerciseTracker.css";
import sound from "../assets/sound.mp3"
import { UserContext} from '../provider/UserProvider'
import {writeUserData} from '../database/firebase'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

let classifiers = {};
let stateCount = 0;
let audio = new Audio(sound);


function ExcerciseTracker({options}) {
  const user = useContext(UserContext);
  const videoRef = useRef();
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const [togo, setTogo] = useState(20);
  const [countState, setCountState] = useState("Default");
  const [selected, setSelected] = useState(options[0]);

  // options.forEach(option => {
  //   classifiers[option] = null;
  // })

  useEffect(() => {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
        });
    options.forEach(option => {
      if(option !== "Default"){
        classifiers[option] = ml5.imageClassifier(process.env.PUBLIC_URL+`/models/${option}/model.json`, modelLoaded);
      }
    })
    // classifier = ml5.imageClassifier(process.env.PUBLIC_URL+"/models/model.json", modelLoaded);
  }, []);

  function modelLoaded(){
  }

  function predict(callback){
    console.log(selected);
    classifiers[selected].predict(videoRef.current, (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      setResult(results);

      callback(results[0].label)
    });
  }


  useInterval(() => {
    if (selected !== "Default" && start) {        
        switch(countState){
          default:
            predict(result => {
              setCountState(result)
            })
            break;
          case "Up":
            predict(result => {
              if(result === "Down"){
                stateCount++;
              }else if(result === "Up"){
                stateCount = 0;
              }

              if(stateCount >= 2){
                setCountState("Down");
                stateCount = 0;
              }
              
            });
            break;
          case "Down":
            predict(result => {
              if(result === "Up"){
                stateCount++;
              }else if(result === "Down"){
                stateCount = 0;
              }

              if(stateCount >= 2){
                setCountState("Up");
                stateCount = 0;
                setCount(count+1);
                setTogo(togo-1);
              }
            })
            break;
        }
    }
  }, 100);

  const toggle = () => {
    if(start){
      let data = {
        name: selected,
        total: count,
        user: user.uid,
        updatedAt: Date.now()
      };
      writeUserData(data);
    }
    setStart(!start);
    setResult([]);
    audio.play();
  }

  function _onSelect(data){
    console.log(data);
    setSelected(data.label);
    setCount(0);
  }

  function handleRepsChange(e){
    e.preventDefault();
    setTogo(e.target.value);
  }

  return (
    <div className="container">
        <Loader
          type="Watch"
          color="#00BFFF"
          height={200}
          width={200}
          visible={!loaded}
          style={{display:'flex', justifyContent:'center', marginTop:'30px' }}/>   
        {start ? 
        <div className="dropdown">
          { togo <= 0 ? <h2 className="goal"> Nice Job! Count: {count} {selected} </h2> : <h2 className="goal"> To go: {togo} {selected} </h2>}
        </div>
        : 
        <div className="dropdown">
          <h2 className="goal"> Goal: </h2>
          <input className="reps" type="number" defaultValue={togo} onChange={handleRepsChange}></input>
          <Dropdown options={options} onChange={_onSelect} value={selected} placeholder="Select an option" />
        </div>
      }   
      <div className="upper">
        <div className="capture">
          <video
            ref={videoRef}
            style={{ transform: "scale(-1, 1)" }}
            width="900"
            height="450"
          />
          {loaded && (
            <button onClick={() => toggle()}>
              {start ? "Stop" : "Start"}
            </button>
          )}
        </div>
        {result.length > 0 && (
          <div>
            <Chart data={result[0]} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExcerciseTracker;