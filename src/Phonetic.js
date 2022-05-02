import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div>{props.phonetic.text}</div>
    </div>
  );
}
