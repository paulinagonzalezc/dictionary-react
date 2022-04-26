import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="row">
        <div className="col-2">
          <h3>{props.meaning.partOfSpeech}</h3>
        </div>
        <div className="col-7">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <p>
                  {definition.definition}
                  <br></br>
                  <em>{definition.example}</em>
                </p>
              </div>
            );
          })}
        </div>
        <div className="col-3">
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    </div>
  );
}
