import pads from "./pads";
import React from "react";
export default function App(props) {
  const [padList, setPadList] = React.useState(pads);
  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  };
  const padListItems = padList.map((padItem) => (
    <button style= {styles} key={padItem.id}></button>
  ));
  console.log(padListItems);

  return (
    <main>
      <div className="pad-container">{padListItems}</div>
    </main>
  );
}
