export default function Phonetic(props) {
  return (
    <div className="Phonetic row justify-content-between">
      <div className="col-4">{props.phonetic.text}</div>
      <a href={props.phonetic.audio} className="col-4">
        Listen
      </a>
    </div>
  );
}
