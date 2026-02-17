import Profile from "./Profile";
import Counter from "./counter";
function Card(props) {
  return (
    <div>
      <section
        style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}
      >
        <h3>{props.name}</h3>
        <p>{props.role}</p>
        {props.active ? <span>Active</span> : <span>Offline</span>}
      </section>

      <section style={{border: "1px solid yellow", padding: "10px", margin: "10px"}}>
        <Profile name="Sravan NK" role="Frontend Developer"/>
        <Profile name="Laika" role="mentor"/>
        <Counter />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Card name="Sravan NK" role="Frontend Developer" active={true} />
      <Card name="Laika" role="Your guide" active={false} />
    </div>
  );
}
