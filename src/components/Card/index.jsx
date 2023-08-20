import './style.css'
export default function Card(props) {
  return (
    <div className="card">
      <p className="card-date">{props.date}</p>
      <h2>{props.title}</h2>
      <p>{props.company}</p>
      <p>
        {props.paragraph}
      </p>
    </div>
  );
}
