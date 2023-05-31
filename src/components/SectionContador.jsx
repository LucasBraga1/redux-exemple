function SectionContador(props) {
  return(
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.increment}>{props.button1}</button>
      <button onClick={props.decrement}>{props.button2}</button>
    </div>
  )
}

export default SectionContador;