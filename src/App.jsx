import "./App.css";
import Editor from "./components/Editor";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <>
      <div className="container">
        <Toolbar />
      </div>
      <div className="container">
        <div className="editor-title">
          <Editor />
        </div>
        <div className="editor-body">
          <Editor />
        </div>
      </div>
    </>
  );
}

export default App;
