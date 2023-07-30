import Canvas from "./canvas/Canvas";
import Costomizer from "./pages/Costomizer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home></Home>
      <Canvas></Canvas>
      <Costomizer></Costomizer>
    </main>
  );
}

export default App;
