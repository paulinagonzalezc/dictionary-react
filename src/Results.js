import Meaning from "./Meaning";
import Phonetic from "./Phonetic.js";
import AudioPlayer from "./AudioPlayer.js";

import "./Results.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1 className="word">{props.results.word}</h1>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-2">
            {props.results.phonetics.map(function (phonetic, index) {
              if (index < 1) {
                return (
                  <div key={index}>
                    <Phonetic phonetic={phonetic} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>

          <div className="col-2">
            {props.results.phonetics.map(function (phonetic2, index) {
              if (index < 2) {
                return (
                  <div key={index}>
                    <AudioPlayer phonetic2={phonetic2} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>

        <br></br>
        <div className="horizontal"></div>

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
