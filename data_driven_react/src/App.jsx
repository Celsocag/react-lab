import HeaderComponent from "./components/journal/Header";
import Entry from "./components/journal/Entry";
import ContactBook from "./components/contactBook/ContactBook";
import JokeApp from "./components/jokeComponent/JokeApp";
import journalData from "./components/journal/data";
// import src from "./assets/img/japan.png";

function App() {
  console.log(journalData)
  const journalEntries = journalData.map((journalItem) => {
    return (
      <Entry
      key={journalItem.id}
        {...journalItem}
      />
    );
  });

  return (
    <>
      <HeaderComponent />
      {journalEntries}
    </>
  );
}

export default App;


// <JokeApp/>
