function Card(props){
  return (
    <div style={{border:"1px solid gray", padding:"10px", margin:"10px"}}>
      <h3>{props.name}</h3>
      <p>{props.role}</p>
      {props.active ? <span>Active</span>: <span>Offline</span>}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Card name="Sravan NK" role="Frontend Developer" active={true} />
      <Card name="Laika" role="Your guide" active={false}/>
    </div>
  )
}