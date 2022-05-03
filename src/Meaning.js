import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="container Meaning">
      <div className="row">
        <div className="col-3 part">
          <h4>{props.meaning.partOfSpeech}</h4>
        </div>
        <div className="vertical col-1"></div>
        <div className="col-6 definitions">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <div className="definition">{definition.definition}</div>
                <div className="example">{definition.example}</div>
              </div>
            );
          })}
        </div>
        <div className="col-1">
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    </div>
  );
}
