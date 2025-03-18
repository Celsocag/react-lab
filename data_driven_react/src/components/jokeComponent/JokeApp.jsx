import Joke from "./Joke";
import jokesData from "./jokesData"

function JokeApp() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke 
              Setup={joke.setup}
              Punchline={joke.punchline}
            />
  })

  return (
    <>
      {jokeElements}
    </>
  );
}

export default JokeApp;
