import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";
import NodeForm from "./components/NodeForm";
import Sandbox from "./components/Sandbox";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Canvas />
      <NodeForm />
      <Sandbox />
    </div>
  );
}

export default App;