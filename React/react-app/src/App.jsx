function Card(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Card name="Sravan NK" role="Frontend Developer" />
      <Card name="Laika" role="Your guide" />
    </div>
  )
}