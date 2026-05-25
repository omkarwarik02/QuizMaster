


function HomeScreen (props) {
    let screen ="home"

    return(
        <div>
            <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <p>Made by {props.author}</p>
        <button onClick={props.onStart}>Let's Play!🎮</button>
        <h1>{screen}</h1>
        </div>
    )
}

export default HomeScreen