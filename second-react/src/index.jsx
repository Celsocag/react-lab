// importing components

import { createRoot } from "react-dom/client";

import HeaderComponent from "./components/Header"
import MainComponent from "./components/Main"
import FooterComponent from "./components/Footer"

const root = createRoot(document.getElementById("root"));

function MainPage() {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
}

root.render(<MainPage />);
