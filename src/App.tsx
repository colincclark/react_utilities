import NavBar from "./NavBar";

import "./App.css";
import VirtualizedList from "./components/VirtualisedList";

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

function App() {
  return (
    <>
      <NavBar />
      <h1>React Components & Hooks Library</h1>
      <VirtualizedList items={items} />
    </>
  );
}

export default App;
