import './style.css'
export default function Card(props) {
  return (
    <div id="card" className={props.isDarkMode ? "card-light-mode" : "card-dark-mode"}>
      <p className="card-date">{props.date}</p>
      <h2>{props.title}</h2>
      <p>{props.company}</p>
      <p>
        {props.paragraph}
      </p>
    </div>
  );
}
