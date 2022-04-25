export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio}>Listen</a>
      <br></br>
      {props.phonetic.text}
    </div>
  );
}
