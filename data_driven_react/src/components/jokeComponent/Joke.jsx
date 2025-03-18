function Joke(props) {
    console.log(props)
    return(
   <>
    {props.isPun && <p>Is a pun !</p>}
    {props.Setup && <p>{props.Setup}</p>}
    <p style={{display: props.Setup ? "block" : "none"}}>{props.Setup}</p>
    <br />
    <p>{props.Punchline}</p>
    <small>Up: {props.upvotes}</small>
    <br />
    <small>Down :{props.downvotes}</small>
    <hr />

   </>
    );
}

export default Joke;