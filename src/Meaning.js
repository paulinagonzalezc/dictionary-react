import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
              <br></br>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
