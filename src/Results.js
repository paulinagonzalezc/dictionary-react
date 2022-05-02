import Meaning from "./Meaning";
import Phonetic from "./Phonetic.js";
import AudioPlayer from "./AudioPlayer.js";

import "./Results.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-2">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </div>
          <div className="col-2">
            {props.results.phonetics.map(function (phonetic2, index) {
              return (
                <div key={index}>
                  <AudioPlayer phonetic2={phonetic2} />
                </div>
              );
            })}
          </div>
        </div>

        <br></br>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
